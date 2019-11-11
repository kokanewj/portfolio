<template lang="pug">
  tr(v-if="editmode === false")
    td {{skill.title}}
    td {{skill.percent}}
    td 
      button(type="button" @click="removeExistedSkill") удалить
      button(type="button" @click="editmode = true") изменить
  
  tr(v-else)
    td 
      input(type="text" v-model="editedSkill.title")
    td 
      input(type="text" v-model="editedSkill.percent")
    td 
      button(type="button" @click="save") сохранить
      button(type="button" @click="editmode = false") отменить

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editmode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {}
    },
    async save() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {
        
      }
    }

  }
};
</script>

