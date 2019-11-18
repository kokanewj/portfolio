<template lang="pug">
  tr.skill__row(
    :class="{ 'skill__row__edit': editMode }"
  )
    td.skill__column.skill__column__title
      input(type="text" placeholder="Новый навык" v-model="editedSkill.title").skill__input.skill__input__table.skill__input__title
    td.skill__column.skill__column__percent
      .skill__percent-block
        input(type="text" placeholder="100" v-model="editedSkill.percent").skill__input.skill__input__table.skill__input__percent
        span.skill__percent-prefix %
    td.skill__column.skill__column__buttons
      .skill__buttons-block
        .skill__edit-mode-buttons
          button(
            type='button'
            @click="editCurrentSkill"
          ).button.button__save-skill
          button(
            type='button'
            @click="removeCurrentSkill"
          ).button.button__remove-skill
        .skill__read-mode-buttons
          button(
            type='button'
            @click="editMode = true"
          ).button.button__edit-skill
          button(
            type='button'
            @click="removeCurrentSkill"
          ).button.button__trash-skill

</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editMode: false,
      editedSkill: { ...this.skill }
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeCurrentSkill() {
      try {
        const {
          data: { message }
        } = await this.removeSkill(this.skill.id);
      } catch (error) {
        console.error(error.message);
      }
    },
    async editCurrentSkill() {
      try {
        const {
          data: { message }
        } = await this.editSkill(this.editedSkill);
        this.editMode = false;
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/skill-field.pcss";
</style>