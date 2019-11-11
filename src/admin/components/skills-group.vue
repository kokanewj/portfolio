<template lang="pug">
  .skill-container
    h2 {{category.category}}
    hr
    table
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )
    hr
    .add-skill-wrapper.blocked
      input(type="text" v-model="skill.title" placeholder="Добавить скилл")
      input(type="text" v-model="skill.percent" placeholder="Проценты")
      button(type="button" @click="addNewSkill") Добавить
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    skillsItem: () => import("components/skills-item.vue")
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill() {
      try {
        await this.addSkill(this.skill);
      } catch (error) {
        // error 
      }
    }
  }
};
</script>
