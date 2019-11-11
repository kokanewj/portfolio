<template lang="pug">
  .reviews-section
    .container
      h1.page-title Блок "Отзывы"

    .reviews-container
      .container.card
        .card__title
          .card__title-text Текст
        .card__content
          .reviews__form   
            .reviews__form-content
              .reviews__form-userpic
                label.reviews__form-avatar-upload
                  input(
                    type="file"
                    @change="appendFileAndRenderPhoto"
                  ).reviews__form-file-input
                  .reviews__form-pic
                    .reviews__form-avatar-empty(
                      :class="{'filled' : this.rendedPhotoUrl.length}"
                      :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
                    )
                  .reviews__form-addphoto Добавить фото
              .reviews__form-col
                .reviews__form-row
                  .reviews__form-block
                    app-input(
                      title="Имя автора"
                    )
                  .reviews__form-block
                    app-input(
                      title="Титул автора"
                    )
                .reviews__form-row
                  .reviews__form-block
                    app-input(
                      title="Отзыв"
                      field-type="textarea"
                    )
      
          .edit-form__buttons
            .edit-form__buttons-item
              app-button(
                text="Отмена"
                class="plain"
              )
            .edit-form__buttons-item
              app-button(
                text="Загрузить"
              )
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    appInput: () => import("components/input.vue"),
    appButton: () => import("components/button.vue")
  },
  data() {
    return {
      rendedPhotoUrl: "",
      review: {
        desc: "",
        title: "",
        photo: ""
      }
    };
  },
  methods: {
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert("sh*t happens :(");
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &_plain {
    padding: 0;
  }
}

.card__title {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}

.card__content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.container__reviews {
  background: #fff;
}

.reviews__form {
  margin-bottom: 30px;
}

.reviews__form-content {
  display: flex;

  @include tablets {
    padding-right: 0;
  }

  @include phones {
    flex-direction: column;
  }
}

.reviews__form-addphoto {
  text-align: center;
}

.reviews__form-row {
  display: flex;
  margin-bottom: 40px;
  @include tablets {
    flex-direction: column;
  }
}
.reviews__form-col {
  flex: 1;
}

.reviews__form-block {
  flex: 1;
  margin-right: 30px;

  @include tablets {
    margin-right: 0;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }
}
.reviews__form-addphoto {
  color: #383bcf;
  font-weight: 600;
}

.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}

.reviews__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;

  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.reviews__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;

  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }

  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}

.reviews__form-avatar-upload {
  position: relative;

  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}

.reviews__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.reviews__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.edit-form__buttons {
  display: flex;
  justify-content: flex-end;

  @include tablets {
    padding: 0 !important;
  }
}

.edit-form__buttons-item {
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
}
</style>


