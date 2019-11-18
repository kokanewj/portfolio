<template lang="pug">
  .skill-card.skill-card__edit
    .skill-card__heading(
      :class="{'error' : validation.firstError('title')}"
    )
      input(type="text" placeholder="Название новой группы" v-model="title").skill-card__title
      .skill-card__title-error
        error-tooltip(
          :errorText="validation.firstError('title')"
        )
      .skill-card__heading-buttons
        .skill-card__edit-mode-buttons
          button(
            type='button'
            @click="addSkillCard"
          ).button.button__save-skill-card

          button(
            type='button'
            @click="$emit('closeCard')"
          ).button.button__remove-skill-card

        .skill-card__read-mode-buttons
          button(type='button').button.button__edit-skill-card
    .skill-card__table
      skill-table
    footer.skill-card__footer
      .skill__input__new-title-wrapper
        input(type="text" placeholder="Новый навык").skill__input.skill__input__title.skill__input__new-title
      .skill__percent-block.skill__percent-block__new-skill
        input(type="text" placeholder="100").skill__input.skill__input__percent.skill__input__new-percent
        span.skill__percent-prefix.skill__percent-prefix__new-skill %
      button(type="button").button.button__add-skill +
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "title": value => {
      return Validator.value(value).required("Введите название группы");
    }
  },
  components: {
    skillTable: () => import("components/skill-table.vue"),
    errorTooltip: () => import("components/errors-tooltip.vue")
  },
  data() {
    return {
      title: ""
    }
  },
  methods: {
    ...mapActions("categories", ['addNewSkillGroup']),
    async addSkillCard() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addNewSkillGroup(this.title);
        this.title = "";
        this.$emit('closeNewSkillCard');
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/skill-add-group.pcss";
</style>