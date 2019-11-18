<template lang="pug">
  .skill-cards
    ul.skill-cards__list
      li.skill-cards__item(v-if="showAddGroup")
        skill-add-group(@closeCard="$emit('closeCard')")
      li.skill-cards__item(
        v-for="category in categories"
        :key="category.id"
      )
        skill-block(
          :category="category"
          :skills="filterSkillsByCard(category.id)"
        )
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import $axios from "@/requests";
export default {
  components: {
    skillAddGroup: () => import("components/skill-add-group.vue"),
    skillBlock: () => import("components/skill-block.vue")
  },
  props: {
    showAddGroup: Boolean
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"]),
    ...mapActions("skills", ["fetchSkills"]),
    filterSkillsByCard(skillGroupId) {
      return this.skills.filter(skill => skill.category === skillGroupId);
    }
  },
  async created() {
    try {
      await this.fetchCategories();
    } catch (error) {
      console.log(error.message);

    }
    try {
      await this.fetchSkills();
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/skill-categories.pcss";
</style>