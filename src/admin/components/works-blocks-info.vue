<template lang="pug">
  .work-card
    .work-card__header
      img(:src="PhotoPath" alt="Изображение работы").work-card__img
      .work-card__tags
        work-tags(
          :tags="tagsArray"
        )
    .work-card__content
      .work-card__text-content
        h3.work-card__title {{work.title}}
        .work-card__description
          p {{work.description}}
        a(:href="work.link").work-card__link {{work.link}}
      .work-card__buttons
        button(
          type="button"
          @click="FormAndEditModeOn"
        ).button.button__card-edit Править
        button(
          type="button"
          @click="removeCurrentWork"
        ).button.button__card-remove Удалить
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export const BASE_URL = "https://webdev-api.loftschool.com";
export default {
  components: {
    workTags: () => import("./work-tags.vue")
  },
  props: {
    work: Object
  },
  data() {
    return {
      
    }
  },
  computed: {
    PhotoPath() {
      return `${BASE_URL}/${this.work.photo}`;
    },
    tagsArray() {
      return this.work.techs.split(',');
    }
  },
  methods: {
    ...mapActions("works", ['removeWork']),
    ...mapMutations("works", ['SHOW_FORM', 'EDIT_MODE_ON', 'SET_EDITED_WORK']),
    async removeCurrentWork() {
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        console.error(error.message);
      }
    },
    FormAndEditModeOn() {
      this['EDIT_MODE_ON'](this.work);
      this['SHOW_FORM']();
    },
  }
}
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/work-info.pcss";
</style>