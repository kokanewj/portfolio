<template lang="pug">
  .login
    .login__content
      a(href="/").close-btn
      form.login__form(@submit.prevent="login")
        .login__form-title Авторизация
        .login__row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
          ).login__send-data Отправить
</template>

<script>
import $axios from "@/requests";
export default {
  components: {
    appInput: () => import("components/input.vue")
  },
  data() {
    return {
      user: {
        name: "kokanewj",
        password: "koka"
      }
    };
  },
  methods: {
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        //error handling
      }
    }
  }
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~images/background/balloon.png") center center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}

.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}

.login__content {
  position: relative;

  @include phones {
    height: 100%;
    width: 100%;
  }
}

.login__row {
  margin-bottom: 35px;
}

.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}

.login__send-data {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  outline:none;

    &:hover {
      background-image: linear-gradient(to right, #5500f2, #ad00ed);
    }

  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}

.login__form {
  width: 563px;
  padding: 50px 77px 60px;
  background: #fff;

  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.close-btn{
  position: absolute;
  right: 30px;
  top: 30px;
  display: inline-block;
  width: 19px;
  height: 19px;
  background: svg-load( "remove.svg", fill=black, width=100%, height=100%) center center no-repeat;
  transition: transform .3s;
    &:hover {
      transform: scale(1.5);
    }
}
</style>


