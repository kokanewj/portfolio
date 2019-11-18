<template lang="pug">
  .review-cards
    ul.review-cards__list
      li.review-cards__item.review-cards__item__add-new
        button(
          type="button"
          @click="FormAndEditOff"
        ).button.button__add-new
          span.button__add-icon
          span.button__add-title Добавить отзыв
      li.review-cards__item(
        v-for="review in reviews"
        :key="review.id"
      )
        review-block(
          :review="review"
        )
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  components: {
    reviewBlock: () => import("components/reviews-blocks-info.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapMutations("reviews", ["SHOW_FORM", "EDIT_MODE_OFF"]),
    ...mapActions("reviews", ["fetchReviews"]),
    FormAndEditOff() {
      this["EDIT_MODE_OFF"]();
      this["SHOW_FORM"]();
    }
  },
  async created() {
    try {
      await this.fetchReviews();
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/reviews-blocks.pcss";
</style>