<template lang="pug">
  .form-block
    h2.form-block__title {{formTitle}}
    form.form.review-form.form-block__content.form-block__content__review
      .form__pic.form__pic__review
        label.form__upload-pic.form__upload-pic__review
          .form__upload-pic-container__review(:class="{'filled' : this.PhotoURL.length, 'error' : validation.firstError('PhotoURL')}" :style="{'backgroundImage' : `url(${this.PhotoURL})`}")
            input(type="file" @change="addAndRender").form__upload-pic-input
            .form__upload-pic-error
              error-tooltip(:errorText="validation.firstError('PhotoURL')")
          .button.button__upload-review-pic Добавить фото
      .form__info.form__info__review
        .form__row.form__row__review-author-info
          .form__column.form__column__review
            label.form__info-block(for="name" :class="{'error' : validation.firstError('review.author')}")
              span.form__label Имя автора
              input.form__input.form__input__name#name(type="text" name="name" placeholder="Введите имя автора" v-model="review.author")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('review.author')")
          .form__column.form__column__review
            label.form__info-block(for="position" :class="{'error' : validation.firstError('review.occ')}")
              span.form__label Титул автора
              input.form__input.form__input__position#position(type="text" name="position" placeholder="Введите титул автора" v-model="review.occ")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('review.occ')")
        .form__row.form__row__textarea
          .form__column
            label.form__info-block.form__info-block__textarea(for="position" :class="{'error' : validation.firstError('review.text')}")
              span.form__label Отзыв
              textarea.form__textarea#review(name="review" rows="7" placeholder="Введите отзыв" v-model="review.text")
              .form__info-block-error
                error-tooltip(:errorText="validation.firstError('review.text')")

        .form__row.form__row__buttons
          .form__column
            .form__buttons.form__buttons__review
              button(type="button" @click="CLOSE_FORM").button.button__cancel-edit Отмена
              button(type="button" @click="addNewReview" v-if="!reviewAdd.editMode").button.button__save-edit Сохранить
              button(type="button" v-if="reviewAdd.editMode" @click="saveReadyReview").button.button__save-edit Сохранить
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { Validator } from "simple-vue-validator";
export const BASE_URL = "https://webdev-api.loftschool.com";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "PhotoURL": value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "review.author": value => {
      return Validator.value(value).required("Введите имя");
    },
    "review.occ": value => {
      return Validator.value(value).required("Введите титул");
    },
    "review.text": value => {
      return Validator.value(value).required("Введите отзыв");
    }
  },
  components: {
    errorTooltip: () => import("components/errors-tooltip.vue")
  },
  data() {
    return {
      PhotoURL: "",
      review: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    };
  },
  computed: {
    ...mapState("reviews", {
      reviewAdd: state => state.reviewAdd,
      readyReview: state => state.readyReview
    }),
    formTitle() {
      switch (this.reviewAdd.editMode) {
        case true:
          return "Редактирование отзыва";
          break;
        case false:
          return "Новый отзыв";
          break;
      }
    },
    PhotoPath() {
      return `${BASE_URL}/${this.review.photo}`;
    }
  },
  methods: {
    ...mapMutations('reviews', ['CLOSE_FORM']),
    ...mapActions('reviews', ['addReview', 'editReview']),
    addAndRender(e) {
      const file = e.target.files[0];
      this.review.photo = file;
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
    createreviewAddData() {
      const formData = new FormData();
      formData.append("author", this.review.author);
      formData.append("occ", this.review.occ);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);
      return formData;
    },
    async addNewReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewAddData = this.createreviewAddData();
        await this.addReview(reviewAddData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    },
    setReadyReview() {
      this.review = { ...this.readyReview };
      this.PhotoURL = this.PhotoPath;
    },
    async saveReadyReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewData = {
          id: this.review.id,
          data: this.createreviewAddData()
        };
        await this.editReview(reviewData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  created() {
    if (this.reviewAdd.editMode) {
      this.setReadyReview();
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
</style>