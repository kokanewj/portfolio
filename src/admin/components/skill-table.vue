<template lang="pug">
  table.skill-table
    skill-field(
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    )
</template>

<script>
export default {
  components: {
    skillField: () => import("components/skill-field.vue"),
  },
  props: {
    skills: Array
  }
}
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/skill-table.pcss";
</style>