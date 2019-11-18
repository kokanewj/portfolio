<template lang="pug">
  section.section.about
    .container.about__container
      .heading.about__heading
        h1.title.about__title Блок «Обо мне»
        button(
          type='button'
          @click="showAddGroup = true"
        ).button.button__add-skills-group Добавить группу
      .about__cards
        skill-categories(
          :showAddGroup="showAddGroup"
          @closeCard="showAddGroup = false"
        )
          
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {
    skillCategories: () => import("components/skill-categories.vue")
  },
  data() {
    return {
      showAddGroup: false
    };
  }
};
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
</style>



