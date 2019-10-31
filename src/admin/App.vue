<template lang="pug">
.wrapper
  .wrapper__container
    header.header
      .container.container-header
        .profile-pic
          .profile-pic__photo
            img(src="../images/content/me.jpg" class="profile-photo" alt="Аватар Куаныша")
          .profile-pic__username Куаныш Ерсаханов
        .panel-name Панель администрирования
        a(href="#").login-exit Выйти
    nav.tabs
      .container.container-tabs
        ul.tabs__list
          li.tabs__item.tabs__item-active
            a(href="#").tabs__link Обо мне
          li.tabs__item
            a(href="#").tabs__link  Работы
          li.tabs__item
            a(href="#").tabs__link Отзывы
    main.maincontent
      .container.container-maincontent
        .section-heading
          h1.section-heading__title Блок «Обо мне»
          button(type='button').button.button__add-group Добавить группу
        section.section__skills
          .skills-card.section-block 
            form.skills__form.skill-form__heading 
              input(placeholder="Название новой группы").skill__title.skill__title-edit
              .form__edit-buttons
                button(type="submit").button.button__create 
                button(type="reset").button.button__cancel 

            form.skills__form.skills__form-skill__new 

              input(placeholder="Новый навык").new-skill
              input(type="number" min="0" max="100" step="5" placeholder="100%").skill__value
              button(type="submit").button.button__add-skill
            
          .skills-card.section-block 
              form.skills__form.skill-form__heading 
                .skill__title Workflow
                .form__edit-buttons
                  button(type="submit").button.button__edit
              
              form.skills__form.skills__form-skill__old
                .old-skill Git
                .skill__value.skill__value-percentage 100%
                .form__edit-buttons
                  button(type="submit").button.button__edit
                  button(type="button").button.button__delete
              
              form.skills__form.skills__form-skill__old  
                .old-skill Terminal
                .skill__value.skill__value-percentage 90%
                .form__edit-buttons
                  button(type="submit").button.button__edit
                  button(type="button").button.button__delete
              
              form.skills__form.skills__form-skill__old  
                .old-skill Gulp
                .skill__value.skill__value-percentage 80%
                .form__edit-buttons
                  button(type="submit").button.button__edit
                  button(type="button").button.button__delete

              form.skills__form.skills__form-skill__old  
                .old-skill Webpack
                .skill__value.skill__value-percentage 85%
                .form__edit-buttons
                  button(type="submit").button.button__edit
                  button(type="button").button.button__delete     
              
              form.skills__form.skills__form-skill__new
                input(required placeholder="Новый навык").new-skill
                input(required type="number" placeholder="100%").skill__value
                button(type="submit").button.button__add-skill


            
        section.section__works
          h1.section-heading__title Блок «Работы»
          form.section-block.card.card-works 
            h2.card__name Редактирование работы
            .card__download-area
              input.input-file(type="file" required name="file" id="file") 
              label.input-file__label(for="file")
                .input-file__text Перетащите или загрузите для загрузки изображения
                .button.button__submit загрузить
            .card__content
              label.card__label Название
                input(required placeholder = "Дизайн сайта для авто салона Porsche").card__input
              label.card__label Ссылка
                input(required placeholder = "https://www.porsche-pulkovo.ru").card__input
              label.card__label Описание
                textarea(required placeholder="Порше Центр Пулково...").card__textarea
              label.card__label Добавление тега
                input(required placeholder = "Jquery, Vue.js, HTML5").card__input
              ul.card__taglist
                li.card__tag
                  .card__description HTML
                  button(type="button").button.card__cross 
                li.card__tag
                  .card__description CSS
                  button(type="button").button.card__cross 
                li.card__tag
                  .card__description Javascript
                  button(type="button").button.card__cross 
              .card__buttons
                button(type = "reset").card__reset Отмена
                button(type = "submit").button.button__submit.button__save сохранить
          .blocks-edit
            button.button.button__add-card
              .button__pic
              .button__name Добавить работу
            .section-block.card-edit
              .card-edit__picture-box
                img(src='../images/content/slider-1.jpg').card-edit__picture
              .card-edit__description
                .card-edit__name Сайт школы образования
                .card-edit__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").card-edit__link http://loftschool.ru
                .card-edit__buttons
                  button(type="button").button.button__card-edit Править
                  button(type="button").button.button__card-delete Удалить
            .section-block.card-edit
              .card-edit__picture-box
                img(src='../images/content/slider-2.jpg').card-edit__picture
              .card-edit__description
                .card-edit__name Сайт школы образования
                .card-edit__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").card-edit__link http://loftschool.ru
                .card-edit__buttons
                  button(type="button").button.button__card-edit Править
                  button(type="button").button.button__card-delete Удалить


        section.section__feedback
          h1.section-heading__title Блок «Отзывы»
          form.section-block.card.card-feedback
            h2.card__name Добавить отзыв
            .card__download-area.card__download-area-feedback
              input.input-file(type="file" required name="file" id="profile-pic") 
              label.input-file__label(for="profile-pic")
                .profile-pic-avatar
              
                .button.button__add-photo Добавить фото
            .card__content
              .card__row
                label.card__label.card__label-feedback Имя автора
                  input( required placeholder = "Ковальчук Дмитрий").card__input.card__input-feedback
                label.card__label.card__label-feedback Титул автора
                  input(required placeholder = "Основатель LoftSchool").card__input.card__input-feedback
              label.card__label Отзыв
                textarea( rows="5" required placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!").card__textarea.card__textarea-feedback
            
              .card__buttons
                button(type = "reset").card__reset Отмена
                button(type = "submit").button.button__submit.button__save сохранить

          .blocks-edit
            button.button.button__add-card
              .button__pic
              .button__name Добавить отзыв
            .section-block.card-edit.card-edit-feedback
              .card-edit__reviewer-info
                .card-edit__reviewer-picture-box
                  img(src='../images/content/feedback-1.png').card-edit__reviewer-picture
                .card-edit__reviewer-text
                  .card-edit__reviewer-name Ковальчук Дмитрий
                  .card-edit__reviewer-position Основатель LoftSchool          
              .card-edit__description.card-edit__description-feedback  
                .card-edit__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!           
                .card-edit__buttons
                  button(type="button").button.button__card-edit Править
                  button(type="button").button.button__card-delete Удалить
            .section-block.card-edit.card-edit-feedback
              .card-edit__reviewer-info
                .card-edit__reviewer-picture-box
                  img(src='../images/content/feedback-2.png').card-edit__reviewer-picture
                .card-edit__reviewer-text
                  .card-edit__reviewer-name Владимир Сабанцев
                  .card-edit__reviewer-position Преподаватель          
              .card-edit__description.card-edit__description-feedback  
                .card-edit__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!           
                .card-edit__buttons
                  button(type="button").button.button__card-edit Править
                  button(type="button").button.button__card-delete Удалить

  .login
    .container.container-login
      form.form-login
        h2.form-login__heading Авторизация
        label.form-login__label.form-login__label-login Логин
          input(type="text" placeholder="kokanewj" required).form-login__input
        label.form-login__label.form-login__label-password Пароль
          input(type="text" placeholder="***" required).form-login__input
        button(type= "submit").button.button-login-submit Отправить
        button(type = "button").button.button-login-exit     
</template>

<style lang = "postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import "../styles/admin/admin-base.pcss";
@import "../styles/admin/block.pcss";
@import "../styles/admin/button.pcss";
@import "../styles/admin/card.pcss";  
@import "../styles/admin/header.pcss";
@import "../styles/admin/inputfile.pcss";
@import "../styles/admin/login.pcss"; 
@import "../styles/admin/profile.pcss";
@import "../styles/admin/section.pcss";
@import "../styles/admin/skill.pcss";   
@import "../styles/admin/tabs.pcss";             
</style>