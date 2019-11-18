<template lang="pug">
  .skill-card(
    :class="{ 'skill-card__edit': editMode }"
  )
    .skill-card__heading(
      :class="{'error' : validation.firstError('editedCategory.category')}"
    )
      input(type="text" placeholder="Название новой группы" v-model="editedCategory.category").skill-card__title
      .skill-card__title-error
        error-tooltip(
          :errorText="validation.firstError('editedCategory.category')"
        )
      .skill-card__heading-buttons
        .skill-card__edit-mode-buttons
          button(
            type='button'
            @click="editSkill(editedCategory)"
          ).button.button__save-skill-card
          button(
            type='button'
            @click="removeSkill(category.id)"
          ).button.button__remove-skill-card
        .skill-card__read-mode-buttons
          button(
            type='button'
            @click="editMode = true"
          ).button.button__edit-skill-card
    .skill-card__table
      skill-table(
        :skills="skills"
      )
    skill-new(
      :category="category.id"
    )
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedCategory.category": value => {
      return Validator.value(value).required("Введите название группы");
    }
  },
  components: {
    skillTable: () => import("components/skill-table.vue"),
    skillNew: () => import("components/skill-add-new.vue"),
    errorTooltip: () => import("components/errors-tooltip.vue")
  },
  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {
      editMode: false,
      editedCategory: { ...this.category }
    };
  },
  methods: {
    ...mapActions("categories", ["removeSkillGroup", "editSkillGroup"]),
    async removeSkill(skillId) {
      try {
        await this.removeSkillGroup(skillId);
      } catch (error) {
        console.log(error.message);
      }
    },
    async editSkill(skill) {
      if ((await this.$validate("editedCategory.category")) === false) return;
      try {
        await this.editSkillGroup(skill);
        this.editMode = false;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/skill-block.pcss";
</style>