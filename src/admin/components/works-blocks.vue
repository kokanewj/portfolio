<template lang="pug">
  ul.work-cards__list
    li.work-cards__item.work-cards__item__new-card
      button(
        type="button"
        @click="FormAndEditOff"
      ).button.button__add-new
        span.button__add-icon
        span.button__add-title Добавить работу
    li.work-cards__item(
      v-for="work in works"
      :key="work.id"
    )
      work-info(
        :work="work"
      )
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    workInfo: () => import("components/works-blocks-info.vue")
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    ...mapMutations("works", ["SHOW_FORM", "EDIT_MODE_OFF"]),
    FormAndEditOff() {
      this["SHOW_FORM"]();
      this["EDIT_MODE_OFF"]();
    }
  },
  async created() {
    try {
      await this.fetchWorks();
    } catch (error) {
      console.error(error.messsage);
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/work-blocks.pcss";
</style>