<template lang="pug">
  section.section.works
    .container.works__container
      .heading.works__heading
        h1.title.works__title Блок «Работы»
      work-add(
        v-if="workAdd.show"
      )
      work-blocks
        
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    workAdd: () => import("components/works-form.vue"),
    workBlocks: () => import("components/works-blocks.vue")
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("works", {
      workAdd: state => state.workAdd
    })
  },
  methods: {},
  created() {
    this.workAdd.show = false;
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
</style>