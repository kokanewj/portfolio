<template lang="pug">
  label.input(
    v-if="fieldType === 'input'" 
    :class="[{'input_labeled' : !!title, 'remove-paddings' : RemovePaddings}, iconClass, {'error' : !!errorText}]"
  )
    .input__title(v-if="title") {{title}} 
    input(
      v-bind="$attrs"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    ).input__element.field__element
    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )

  label.textarea(
    v-else-if="fieldType === 'textarea'"
    v-bind="$attrs"
    :class="{'error': !!errorText}"
  )
    .input__title(v-if="title") {{title}} 
    textarea.textarea__element.field__element(
      :value="value"
      :class="{'error' : !!errorText}"
      @input="$emit('input', $event.target.value)"
    )
    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    RemovePaddings: Boolean,
    fieldType: {
      type: String,
      default: "input"
    },
    value: String | Number,
    icon: {
      type: String,
      default: "",
      validator: value => ["", "user", "key"].includes(value)
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  components: {
    errorsTooltip: () => import("components/errors-tooltip.vue")
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/admin/input.pcss";
</style>

