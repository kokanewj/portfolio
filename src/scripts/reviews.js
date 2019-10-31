import Vue from "vue";
import Flickity from "vue-flickity";

const review = {
  template: "#reviews-slide",
  props: ["review"]
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-main",
  components: {
    Flickity,
    review
  },
  data: {
    reviews: [],
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      contain: true,
      groupCells:true

      // any options from Flickity can be used
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.avatar}`);
        item.avatar = requiredPic;
        return item
      })
    },
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }
});