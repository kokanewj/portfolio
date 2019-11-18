<template lang="pug">
  .input__error-tooltip-container {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Ошибка"
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/admin/errors-tooltip.pcss";
</style>

