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
    <div class="a1">12331</div>
  </div>
</template>


<script>
export default {
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
    };
  },
  components: {},
};
</script>


<style>
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