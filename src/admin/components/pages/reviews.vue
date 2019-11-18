<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .heading.reviews__heading
        h1.title.reviews__title Блок «Отзывы»
      review-add(
        v-if="reviewAdd.show"
      )
      review-blocks
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    reviewAdd: () => import("components/reviews-add.vue"),
    reviewBlocks: () => import("components/reviews-blocks.vue"),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState("reviews", {
      reviewAdd: state => state.reviewAdd,
      readyReview: state => state.readyReview
    })
  },
  created() {
    this.reviewAdd.show = false;
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
</style>