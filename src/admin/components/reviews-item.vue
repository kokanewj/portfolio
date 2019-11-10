<template lang="pug">
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
</template>