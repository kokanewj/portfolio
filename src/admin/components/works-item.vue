<template lang="pug">
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
</template>