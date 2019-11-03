import Vue from "vue";

const _tick = 5000;

const thumbs = {
  template: "#slider-thumbs",
  props: ["works","currentWork","currentIndex"],
  computed: {
    translate() {
      const step = 100 / this.works.length;
      if (this.currentIndex >= this.works.length) return;
      else if (this.currentIndex < 3) return 0;
      else if (this.currentIndex >= 3) return step * (this.currentIndex - 2);
    }
  }
};

const btns = {
  template: "#slider-btns",
  props: ["worksLength","currentWorkId"]
};

const display = {
  template: "#slider-display",
  data() {
    return {
      show: true
    };
  },
  components: { btns, thumbs },
  props: ["works","currentWork","currentIndex"],
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  },
  methods: {
    handleSlide(direction) {
      this.$emit("slide", direction);
    },
    handleHover(state) {
      this.$emit("hover", state);
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: ["tagsArray"]
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data() {
    return {
      works: [],
      currentIndex: 0,
      hoverState: "leave"
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.updateCurIndex(value);
    }
  },
  methods: {
    tick(sec) {
      setInterval(() => {
        if (this.hoverState === "leave") {
          this.currentIndex === this.works.length - 1
            ? (this.currentIndex = 0)
            : this.currentIndex++;
        }
      }, sec);
    },
    makeInfiniteLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;

      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
    },
    updateCurIndex(value) {
      if (value === this.works.length) {
        this.currentIndex = this.works.length - 1;
      } else if (value <= 0) this.currentIndex = 0;
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case "prev":
          this.currentIndex--;
          break;
        case "next":
          this.currentIndex++;
          break;
        default:
          this.currentIndex = direction;
          break;
      }
    },
    handleHover(state) {
      switch (state) {
        case "enter":
          return (this.hoverState = "enter");
        case "leave":
          return (this.hoverState = "leave");

        default:
          break;
      }
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  },
  mounted() {
    this.tick(_tick);
  }
});
