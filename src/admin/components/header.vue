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
      a.exit-btn(@click="logout") Выйти
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

.header {
  color: #fff;
}

.header__info {
  display: flex;
  align-items: center;
}

.header__title {
  color: rgba(#fff, 0.5);

  @include phones {
    display: none;
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user__name {
  font-size: 18px;
  font-weight: 600;

  .exit-btn {
    display: none;
    @include phones {
      display: block;
    }
  }
}

.user__pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}

.exit-btn {
  opacity: 0.7;
  text-decoration: underline;
  font-size: 14px;

  &:hover {
    text-decoration: none;
  }

  @include phones {
    display: none;
  }
}
</style>

