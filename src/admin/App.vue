<template lang="pug">
  div.root-wrapper-container
    div.root-container
      template
        header.header-container
          app-header
        section.tabs-container
          tabs
        main.content-container
          router-view
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("components/header"),
    tabs: () => import("components/tabs")
  }
};
</script>


<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

button {
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  background-color: buttonface;
}
.root-wrapper-container {
  height: 100%;
}

.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;

  @include phones {
    padding: 20px 0;
  }
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.admin-wrapper {
  display: flex;

  .maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}

.content-container {
  background: url("~images/background/balloon.png") center center no-repeat / cover;
  flex: 1;
  padding-top: 60px;

  @include phones {
    padding-top: 30px;
  }
}

.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}
</style>

