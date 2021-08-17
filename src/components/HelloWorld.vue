<template>
  <div class="wrap">
    <el-carousel
      indicator-position="outside"
      height="72vh"
      v-bind:autoplay="false"
    >
      <el-carousel-item v-for="img1 in img" :key="img1">
        <img v-bind:src="img1.thumbnail" />
      </el-carousel-item>
    </el-carousel>
    <h3>Best Product</h3>
    <p>최고의 인기제품들을 소개합니다</p>
    <vueper-slides
      class="no-shadow"
      :visible-slides="5"
      :slide-ratio="5 / 5"
      :dragging-distance="70"
      :autoplay="true"
      fixed-height="250px"
      duration:2000
      :gap="2"
      :bullets="false"
    >
      <vueper-slide
        v-for="img2 in img3"
        :key="img2"
        :image="img2.thumbnail"
        content="123"
      />
    </vueper-slides>
  </div>
</template>


<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      viewd: "",
      img: [
        {
          thumbnail: require("../assets/mb9.png"),
          description: "1번째 사진",
        },
        {
          thumbnail: require("../assets/sp.png"),
          description: "2번째 사진",
        },
        {
          thumbnail: require("../assets/sp.png"),
          description: "3번째 사진",
        },
        {
          thumbnail: require("../assets/mb9.png"),
          description: "1번째 사진",
        },
      ],

      img3: [
        {
          thumbnail: require("../assets/y1.png"),
          description: "1번째 사진",
        },
        {
          thumbnail: require("../assets/y2.png"),
          description: "2번째 사진",
        },
        {
          thumbnail: require("../assets/y3.png"),
          description: "3번째 사진",
        },
        {
          thumbnail: require("../assets/y4.png"),
          description: "1번째 사진",
        },
        {
          thumbnail: require("../assets/y5.png"),
          description: "1번째 사진",
        },
        {
          thumbnail: require("../assets/y6.png"),
          description: "1번째 사진",
        },
        {
          thumbnail: require("../assets/y7.png"),
          description: "1번째 사진",
        },
      ],
    };
  },
};
</script>


<style>
.vueperslide__content {
  position: absolute;
  top: 210px;
}
.vueperslides__inner {
  width: 1220px;
  margin: 30px auto;
  color: white;
}
.el-carousel--horizontal {
  overflow: hidden;
}
.a1 {
  width: 100%;
  height: 937px;
}
.wrap {
  position: relative;
}
.button {
  position: absolute;
  bottom: 1px;
  left: 65%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__indicator {
  position: relative;
}
.el-carousel__indicators {
  background: #f4efe9;
}
.el-carousel__indicator:nth-child(1) {
  background-image: url("../assets/tab1.png");
  width: 127px;
  height: 10px !important;
}
.el-carousel__indicator:nth-child(2) {
  background-image: url("../assets/tab2.png");
  width: 127px;
  height: 10px !important;
}
.el-carousel__indicator:nth-child(3) {
  background-image: url("../assets/tab3.png");
  width: 127px;
  height: 9px !important;
}
.el-carousel__indicator:nth-child(4) {
  background-image: url("../assets/tab4.png");
  width: 127px;
  height: 10px !important;
}
.el-carousel__button {
  padding: 2px !important;
  width: 127px !important;
  position: absolute;
  top: 34px;
}
</style>