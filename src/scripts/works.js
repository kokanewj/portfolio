import Vue from "vue";
import axios from "axios";

const _tick = 5000;
const _transition = 500;

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentIndex: Number
  },
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
  props: {
    worksLength: Number,
    currentWorkId: Number
  },
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  data() {
    return {
      show: true
    };
  },
  components: {
    btns,
    thumbs
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  watch: {
    currentIndex() {
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, _transition);
    }
  },
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
  props: {
    tagsArray: Array
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.techs.split(",");
    }
  }
};

new Vue({
  template: "#slider-container",
  el: "#works-root",
  components: {
    display,
    info
  },
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
      this.makeInfiniteLoopForCurIndex(value);
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
    makeNoInfiniteSlider(value) {
      if (value === this.works.length) {
        this.currentIndex = this.works.length - 1;
      } else if (value <= 0) this.currentIndex = 0;
    },
    makeArrWithAbsoluteImages(data) {
      return data.map(item => {
        const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = absolutePic;

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
    axios
      .get("https://webdev-api.loftschool.com/works/212")
      .then(response => {
        const data = response.data;
        this.works = this.makeArrWithAbsoluteImages(data);
      })
      .catch(error => console.error(error.message));
  },
  mounted() {
    this.tick(_tick);
  }
});