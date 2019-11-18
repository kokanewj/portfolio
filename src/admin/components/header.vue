<template lang="pug">
  .header
    .container
      .header__info
        .user
          .user__pic
            img(src="../../images/content/me.jpg").user__pic-avatar
          .user__name 
            span Куаныш Ерсаханов
        .header__title Панель администрирования
      a.exit-button(@click="logout") Выйти
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"])
  }
};
</script>


<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
@import "../../styles/admin/header.pcss";
</style>

