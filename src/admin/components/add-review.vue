<template lang="pug">
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
                        label.input.input_new
                            .input__title Добавление тега
                            input.input__element(placeholder="JQuery, Vue.js, HTML5").field__element
                        .edit-form__buttons
                            .edit-form__buttons-item
                                button(type="button").button-action.cancel Отмена
                            .edit-form__buttons-item
                                button(type="button").button-action Сохранить
</template>