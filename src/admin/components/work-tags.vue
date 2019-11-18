<template lang="pug">
  .tags
    ul.tags__list
      li.tags__item(
        v-for="(tag, index) in tags"
        :key="index"
      ) {{tag}}
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/tags.pcss";
</style>