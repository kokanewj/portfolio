<template lang="pug">
  .form-block
    h2.form-block__title Редактирование работы
    form.form.work-form.form-block__content.form-block__content__work
      .form__pic.form__pic__work
        label.form__upload-pic
          .form__upload-pic-container(:class="{'filled' : this.PhotoURL.length, 'error' : validation.firstError('PhotoURL')}" :style="{'backgroundImage' : `url(${this.PhotoURL})`}")
            input(type="file" @change="addAndRender").form__upload-pic-input
            .form__upload-pic-error
              error-tooltip(:errorText="validation.firstError('PhotoURL')")
            .form__upload-pic-content
              span.form__upload-pic-description Перетащите или загрузите для загрузки изображения
              .button.button__upload-work-pic Загрузить
      .form__info.form__info__work
        .form__row
          .form__column
            label.form__info-block(for="title" :class="{'error' : validation.firstError('work.title')}")
              span.form__label Название
              input.form__input.form__input__title#title(type="text" name="title" placeholder="Введите название работы" v-model="work.title")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('work.title')")
        .form__row
          .form__column
            label.form__info-block(for="link" :class="{'error' : validation.firstError('work.link')}")
              span.form__label Ссылка
              input.form__input.form__input__link#link(type="text" name="link" placeholder="Вставьте ссылку" v-model="work.link")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('work.link')")
        .form__row.form__row__textarea
          .form__column
            label.form__info-block.form__info-block__textarea(for="description" :class="{'error' : validation.firstError('work.description')}")
              span.form__label Описание
              textarea.form__textarea#description(name="description" rows="4" placeholder="Введите описание работы" v-model="work.description")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('work.description')")
        .form__row.form__row__tags
          .form__column
            label.form__info-block(for="tags" :class="{'error' : validation.firstError('readyTagsAsString')}")
              span.form__label Добавление тега
              input.form__input.form__input__tags#tags(type="text" name="tags" placeholder="Добавьте теги навыков" v-model="work.techs" @change="ADD_TAGS(work.techs)")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('readyTagsAsString')")
        .form__row
          .form__column(v-if="workAdd.editMode")
            form-tags
        .form__row.form__row__buttons
          .form__column
            .form__buttons
              button(type="button" @click="CLOSE_FORM").button.button__cancel-edit Отмена
              button(type="button" @click="addNewWork" v-if="!workAdd.editMode").button.button__save-edit Сохранить
              button(type="button" v-if="workAdd.editMode" @click="saveEditedWork").button.button__save-edit Сохранить
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Validator } from "simple-vue-validator";
export const BASE_URL = "https://webdev-api.loftschool.com";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    PhotoURL: value => {
      return Validator.value(value).required("Добавьте картинку");
    },
    "work.title": value => {
      return Validator.value(value).required("Добавьте название");
    },
    "work.link": value => {
      return Validator.value(value).required("Добавьте ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Добавьте описание");
    },
    readyTagsAsString: value => {
      return Validator.value(value).required(
        "Работа должна содержать как минимум один тег (например, HTML)"
      );
    }
  },
  components: {
    formTags: () => import("./works-form-tags.vue"),
    errorTooltip: () => import("components/errors-tooltip.vue")
  },
  data() {
    return {
      PhotoURL: "",
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState("works", {
      workAdd: state => state.workAdd,
      readyWork: state => state.readyWork,
      readyTags: state => state.readyTags
    }),
    PhotoPath() {
      return `${BASE_URL}/${this.work.photo}`;
    },
    readyTagsAsString() {
      return this.readyTags.join(",");
    }
  },
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["CLOSE_FORM", "ADD_TAGS"]),
    addAndRender(e) {
      const file = e.target.files[0];     
    
      this.work.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          
          this.PhotoURL = reader.result;
        };
      } catch (error) {
        console.error(error.message);
      }
    },
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      try {
        const workFormData = this.createWorkFormData();
        await this.addWork(workFormData);
        this["CLOSE_FORM"]();
      } catch (error) {
        console.error(error.message);
      }
    },
    createWorkFormData() {
      const formData = new FormData();
      formData.append("title", this.work.title);
      if (this.workAdd.editMode) {
        formData.append("techs", this.readyTagsAsString);
      } else {
        formData.append("techs", this.work.techs);
      }
      formData.append("photo", this.work.photo);
      formData.append("link", this.work.link);
      formData.append("description", this.work.description);
      return formData;
    },
    setEditedWork() {
      this.work = { ...this.readyWork };
      this.PhotoURL = this.PhotoPath;
    },
    async saveEditedWork() {
      if ((await this.$validate()) === false) return;
      try {
        const workData = {
          id: this.work.id,
          data: this.createWorkFormData()
        };
        await this.editWork(workData);
        this["CLOSE_FORM"]();
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  created() {
    if (this.workAdd.editMode) {
      this.setEditedWork();
      this.work.techs = "";
    }
  }
};
</script>



<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
</style>