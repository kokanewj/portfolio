<template lang="pug">
  .skill-card__footer
    .skill__input__new-title-wrapper(
      :class="{'error' : validation.firstError('skill.title')}"
    )
      input(type="text" placeholder="Новый навык" v-model="skill.title").skill__input.skill__input__title.skill__input__new-title
      .skill__input-error
        error-tooltip(
          :errorText="validation.firstError('skill.title')"
        )
    .skill__percent-block.skill__percent-block__new-skill(
      :class="{'error' : validation.firstError('skill.percent')}"
    )
      input(type="text" placeholder="100" v-model="skill.percent").skill__input.skill__input__percent.skill__input__new-percent
      span.skill__percent-prefix.skill__percent-prefix__new-skill %
      .skill__input-error
        error-tooltip(
          :errorText="validation.firstError('skill.percent')"
        )
    button(
      type="button"
      @click="addNewSkill"
    ).button.button__add-skill +
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "skill.title": value => {
      return Validator.value(value).required("Добавьте название навыка");
    },
    "skill.percent": value => {
      return Validator.value(value)
        .required("Введите значение")
        .digit("Введите число")
        .between(0, 100, "Укажите значение между 0 и 100");
    }
  },
  components: {
    errorTooltip: () => import("components/errors-tooltip.vue")
  },
  props: {
    category: Number
  },
  data() {
    return {
      skill: {
        title: "",
        percent: "",
        category: this.category
      }
    };
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
        this.validation.reset();
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/skill-new.pcss";
</style>