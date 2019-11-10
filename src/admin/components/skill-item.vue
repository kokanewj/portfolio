<template lang="pug">
  tr.skills-row-wrapper(v-if="editMode===false")
    td.skills__cell {{skill.title}}
    td.skills__cell
      .skills__input
        .skills__input-text {{skill.percent}}
    td.skills__cell
      button(type="button" @click="editMode=true").btn.is-pencil.no-words.grayscale
    td.skills__cell
      button(type="button" @click="removeExistedSkill").btn.is-trash.no-words.grayscale

  tr.skills-row-wrapper(v-else)
    td.skills__cell
      .skills__cell-input-wrapper
        label.input.no-side-paddings
        input(v-model="editedSkill.title").input__elem.field__elem
    td.skills__cell
      .skills__cell-input-wrapper
        label.input.no-side-paddings
        input(type="number" min="0" max="100" maxlength="3" v-model="editedSkill.percent").input__elem.field__elem
    td.skills__cell
      button(type="button" @click="saveSkill").btn.is-tick.no-words
    td.skills__cell
      button(type="button" @click="editMode=false").btn.is-cross.no-words

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
</template>