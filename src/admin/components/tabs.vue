<template lang="pug">
  .tabs-container
    .container
      ul.tabs
        li.tabs__item(v-for="tab in tabs")
          router-link(
            :data-text="tab.title" 
            :to="tab.href"
            exact-active-class="active"
          ).tabs__link

</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Отзывы", href: "/reviews" }
      ]
    };
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "../../styles/admin/tabs.pcss";
</style>
