<template lang="pug">
    form.add-new-container.blocked
        .add-new__inputs
            .add-new__column
                label.input
                    input(placeholder="Новый навык").input__element.field__element
            .add-new__column.add-new__column_small
                label.input
                    input(type="type" min="0" max="100" step="5").input__element.field__element
            button(type="submit").add-new__button  
</template>