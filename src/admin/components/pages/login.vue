<template lang="pug">
    .login
        .login__content
            form.login__form
                .login__form-title Авторизация
            button.login__form-close
                .login__row
                    label.input
                        .input__title Логин
                        input(type="text" title="Логин").input__element.field__element
                .login__row
                label.input
                    .input__title Пароль
                    input(type="password" title="Пароль").input__element.field__element
                .login__button
                    button(type="submit").login__submit Отправить
</template>