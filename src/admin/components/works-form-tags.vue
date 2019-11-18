<template lang="pug">
  ul.form__tags-list
    li.tag(
      v-for="(tag, index) in readyTags"
      :key="index"
    )
      span.tag__name {{tag}}
      button(
        type="button"
        @click="REMOVE_TAG(tag)"
      ).button.button__remove-tag
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState('works', {
      readyTags: state => state.readyTags
    })
  },
  methods: {
    ...mapMutations('works', ['REMOVE_TAG'])
  }
}
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/tags.pcss";
</style>