<template lang="pug">
  .review-block
    .review-block__header
      .reviewer
        .reviewer__photo-block(
          :style="{'backgroundImage' : `url(${this.PhotoPath})`}"
        )
        .reviewer__description
          .reviewer__name {{review.author}}
          .reviewer__position {{review.occ}}
    .review-block__content
      .review-block__description
        p {{review.text}}
      .review-block__btns
        button(
          type="button"
          @click="editReview"
        ).button.button__card-edit Править
        button(
          type="button"
          @click="removeCurrentReview"
        ).button.button__card-remove Удалить
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export const BASE_URL = "https://webdev-api.loftschool.com";
export default {
  props: {
    review: Object
  },
  computed: {
    PhotoPath() {
      return `${BASE_URL}/${this.review.photo}`;
    },
  },
  methods: {
    ...mapActions('reviews', ['removeReview']),
    ...mapMutations('reviews', ['SHOW_FORM', 'EDIT_MODE_ON', 'SET_READY_REVIEW']),
    FormAndEditModeOn() {
      this['EDIT_MODE_ON']();
      this['SHOW_FORM']();
    },
    setReadyReview() {
      this['SET_READY_REVIEW'](this.review);
    },
    editReview() {
      this.setReadyReview();
      this.FormAndEditModeOn();
    },
    async removeCurrentReview() {
      try {
        await this.removeReview(this.review.id);
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/reviews-info.pcss";
</style>