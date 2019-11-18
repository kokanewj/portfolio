import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill-template",

  props: {
    skill: Object
  },

  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skill.percent);

      circle.style.strokeDashoffset = percent;
    }
  },

  mounted() {
    this.drawColoredCircle();
  }
};

const stackRow = {
  template: "#stack-row-template",
  components: {
    skill
  },
  props: {
    category: Object,
    skills: Array
  }
};

new Vue({
  el: "#skills-root",
  template: "#skills-template",
  components: {
    stackRow
  },
  data() {
    return {
      categories: [],
      skills: []
    };
  },
  methods: {
    filterSkillsByCategory(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  mounted() {
    axios
      .get("https://webdev-api.loftschool.com/categories/212")
      .then(response => {
        console.log("categories", response.data);
        this.categories = response.data;
      })
      .catch(error => console.error(error));

    axios
      .get("https://webdev-api.loftschool.com/skills/212")
      .then(response => {
        console.log("SKILLS", response.data);
        this.skills = response.data;
      })
      .catch(error => console.error(error));
  }
});