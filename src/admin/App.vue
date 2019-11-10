<template lang="pug">
  div.root-wrapper-container
    div.root-container
      header.header-container
        .header
          .container
            .header__information
              .user
                .user__photo
                  img(src="../images/content/me.jpg").user__photo-avatar
                .user__fullname 
                  span Ерсаханов Куаныш
              .header__title Панель администрирования
            a.exit Выйти
        
      section.tabs-container
        .container
          ul.tabs
            - 
              var userinformation = ['Обо мне', 'Работы', 'Отзывы'];
            each item in userinformation
              li.tabs__item
                .tabs__link #{item}
        
      main.content-container
        .about-page-container
          .container
            .about-page__title
              h1.page-title Блок «Обо мне»
              button.about-page__add-new Добавить группу

          .about-page__content
            .container
              ul.skill-list
                li.skill-list__item
                  .add-new-skills-group
                    .card
                      .card__title
                        .card__title-text
                        .skills-card-title
                          .skills-card-title__input
                            label.input
                              input(placeholder="Название новой группы").input__element.field__element
                          .skills-card-title__buttons
                              button(type="button").button.tick
                              button(type="button").button.cross
                      .card__content
                        .add-new
                          form.add-new-container.blocked
                            .add-new__inputs
                              .add-new__column
                                label.input
                                  input(placeholder="Новый навык").input__element.field__element
                              .add-new__column.add-new__column_small
                                label.input
                                  input(type="type" min="0" max="100" step="5").input__element.field__element
                              button(type="submit").add-new__button
                        
                li.skill-list__item
                  .card
                    .card__title
                      .skills-title-container
                        .skills-card-title
                          .skills-card-title__text Workflow
                          .skills-card-title__icon
                            button(type="button").button.pencil
                    .card__content
                      .skill-list__table
                        .skills-table-container
                          table.skills
                            tr.skills-row-wrapper
                              td.skills__cell
                                .skills__cell-input-wrapper
                                  label.input
                                    input.input__element.field__element
                              td.skills__cell 
                                .skills__cell-input-wrapper
                                  label.input
                                    input(type="number" min="0" max="100" maxlength="3").input__element.field__element
                              td.skills__cell
                                button(type="button").button.tick
                              td.skills__cell
                                button(type="button").button.cross
                            tr.skills-row-wrapper
                              td.skills__cell GIT
                              td.skills__cell 
                                .skills__input
                                  .skills__input-text 100
                              td.skills__cell
                                button(type="button").button.pencil
                              td.skills__cell
                                button(type="button").button.trash
                            tr.skills-row-wrapper
                              td.skills__cell Terminal
                              td.skills__cell 
                                .skills__input
                                  .skills__input-text 90
                              td.skills__cell
                                button(type="button").button.pencil
                              td.skills__cell
                                button(type="button").button.trash
                            tr.skills-row-wrapper
                              td.skills__cell Gulp
                              td.skills__cell 
                                .skills__input
                                  .skills__input-text 80
                              td.skills__cell
                                button(type="button").button.pencil
                              td.skills__cell
                                button(type="button").button.trash 
                            tr.skills-row-wrapper
                              td.skills__cell Webpack
                              td.skills__cell 
                                .skills__input
                                  .skills__input-text 85
                              td.skills__cell
                                button(type="button").button.pencil
                              td.skills__cell
                                button(type="button").button.trash    
                      .add-new
                        form.add-new-container
                          .add-new__inputs
                            .add-new__column
                              label.input
                                input(placeholder="Новый навык").input__element.field__element
                            .add-new__column.add-new__column_small
                              label.input
                                input(type="number" min="0" max="100" maxlength="3" placeholder="100%").input__element.field__element
                            button(type="submit").add-new__button
        .works-section
          .container
              h1.page-title Блок «Работы»
          .works-container
            .container
              .edit-form
                .card
                  .card__title
                    .card__title-text Редактирование работы
                  .card__content
                    .edit-form__container
                      .edit-form__column
                        label.edit-form__picture
                          .edit-form__picture-text
                            | Перетащите или загрузите для загрузки изображения
                          .button__file-form
                            .button-file-fake.button-action Загрузить
                            input(type="file")
                      .edit-form__column
                        .edit-form__row
                          label.input.input_new
                            .input__title Название
                            input.input__element(placeholder="Дизайн сайта для автосалона Porsche").field__element
                        .edit-form__row
                          label.input.input_new
                            .input__title Ссылка
                            input.input__element(placeholder="https://www.porsche-pulkovo.ru").field__element
                        .edit-form__row
                          label.input.input_new
                            .input__title Описание
                            textarea.textarea__element(placeholder="Porsche Центр в Пулково").field__element
                        .edit-form__row
                          .add-tags
                            .add-tags__wrapper
                              label.input.input_new
                                .input__title Добавление тега
                                input.input__element(placeholder="JQuery, Vue.js, HTML5").field__element
                            ul.tags
                                li.tags__item.tags__item_new
                                  span HTML
                                  a.tags__remove
                                li.tags__item.tags__item_new
                                  span CSS
                                  a.tags__remove
                                li.tags__item.tags__item_new
                                  span JavaScript
                                  a.tags__remove  
                    .edit-form__buttons
                      .edit-form__buttons-item
                        button(type="button").button-action.cancel Отмена
                      .edit-form__buttons-item
                        button(type="button").button-action Сохранить

              ul.works
                li.works__item
                  button(type="button").button-container
                    .button__text
                      .button__sign
                      .button__title Добавить работу
                li.works__item
                  .card
                    .works__wrapper
                      .works__photo
                        img(src="../images/content/slider-1.jpg").works__image
                        .works__tag
                          ul.tags
                            li.tags__item HTML
                            li.tags__item CSS
                            li.tags__item JavaScript
                      .works__data
                        .works__title Сайт школы онлайн образования
                        .works__text
                          p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").works__link http://loftschool.ru
                        .works__buttons
                          button(type="button").button.pencil Править
                          button(type="button").button.cross Удалить
        .reviews-section
          .container
            h1.page-title Блок «Отзывы»
          .reviews-container
            .container
              .edit-form
                .card
                  .card__title
                    .card__title-text Новый отзыв
                  .card__content
                    .edit-form__container.edit-form__container_reviews
                      .edit-form__column
                        label.edit-form__form-avatar-upload
                          input(type="file").edit-form__form-file-input
                          .edit-form__form-photo
                            .edit-form__form-avatar
                          .edit-form__form-addphoto Добавить фото
                      .edit-form__column
                        .edit-form__row
                          .edit-form__form-block
                            label.input.input_new
                              .input__title Имя автора
                              input.input__element(placeholder="Ковальчук Дмитрий").field__element
                          .edit-form__form-block
                            .label.input.input_new
                              .input__title Титул автора
                              input.input__element(placeholder="Основатель LoftSchool").field__element
                        .edit-form__row
                          .edit-form__form-block
                            label.input.input_new
                              .input__title Отзыв
                              textarea.textarea__element(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!").field__element
                    .edit-form__buttons
                      .edit-form__buttons-item
                        button(type="button").button-action.cancel Отмена
                      .edit-form__buttons-item
                        button(type="button").button-action Сохранить

              ul.reviews
                li.reviews__item
                  button(type="button").button-container
                    .button__text
                      .button__sign
                      .button__title Добавить отзыв
                li.reviews__item
                  .card
                    .card__title
                      .card__title-text
                        .user
                          .user__avatar
                            img(src="../images/content/feedback-1.png").user__avatar-photo 
                          .user__desc
                            .user__fullname Ковальчук Дмитрий
                            .user__position Основатель Loftschool
                    .card__content
                      .reviews__content
                        .reviews__content-text
                          p Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .reviews__buttons
                          button(type="button").button.pencil Править
                          button(type="button").button.cross Удалить

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




<style lang="pcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import "../styles/admin/about.pcss";
@import "../styles/admin/add-skill.pcss";
@import "../styles/admin/base-admin.pcss";
@import "../styles/admin/button.pcss";
@import "../styles/admin/card.pcss";
@import "../styles/admin/edit-form.pcss"; 
@import "../styles/admin/header.pcss";
@import "../styles/admin/input.pcss";  
@import "../styles/admin/login.pcss";
@import "../styles/admin/reviews.pcss"; 
@import "../styles/admin/skill-card.pcss";
@import "../styles/admin/skill-list.pcss";  
@import "../styles/admin/skills.pcss";
@import "../styles/admin/tabs.pcss";
@import "../styles/admin/tags.pcss";
@import "../styles/admin/user-reviews.pcss";
@import "../styles/admin/works.pcss";
</style>