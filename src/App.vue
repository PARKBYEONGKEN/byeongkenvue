<template>
  <div class="app">
    
    <el-container>
      <div class="wrap"><img src="../src\assets\logo2.png" class="logo"></div>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
         
        >
       
          <el-menu-item index="1" v-bind:class="on">홈으로</el-menu-item>
          <el-menu-item index="2" v-bind:class="on1">게시판목록</el-menu-item>
          <el-menu-item index="3" v-bind:class="on2">게시판글쓰기</el-menu-item>
          <el-menu-item index="4" v-bind:class="on3">회원가입</el-menu-item>
          <el-menu-item index="5">로그인</el-menu-item>
          <el-menu-item index="6">마이페이지</el-menu-item>
          <el-menu-item index="7">Seller</el-menu-item>
         
        </el-menu>
      </el-header>
      <div class="hr"></div>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        <hr />
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  created() {
    // 주소창의 url정보 가져오기
    const currentPath = window.location.pathname;
    console.log(currentPath);
    if (currentPath === "/") {
      this.activeIndex = "1";
    }
    if (currentPath === "/menu1") {
      this.activeIndex = "2";
    }
    if (currentPath === "/menu2") {
      this.activeIndex = "3";
    }
    if (currentPath === "/join") {
      this.activeIndex = "4";
    }
    if (currentPath === "/login") {
      this.activeIndex = "5";
    }
    if (currentPath === "/mypage") {
      this.activeIndex = "6";
    }
    if (currentPath === "/seller") {
      this.activeIndex = "7";
    }
  },
  data() {
    return {
      activeIndex: "1",
      on: "red",
      on1: "",
      on2: "",
      on3: "",
    };
  },
  methods: {
    handleSelect(val) {
      if (val === "1") {
        this.$router.push({ path: "/" });
      }
      if (val === "2") {
        this.$router.push({ path: "/menu1" });
      }
      if (val === "3") {
        this.$router.push({ path: "/menu2" });
      }
      if (val === "4") {
        this.$router.push({ path: "/join" });
      }

      if (val === "5") {
        this.$router.push({ path: "/login" });
      }
      if (val === "6") {
        this.$router.push({ path: "/mypage" });
      }
      if (val === "7") {
        this.$router.push({ path: "/seller" });
      }
      console.log(val);
    },
  },
};
</script>
  
<style>
/* ----------element ------------------- */
*{
  padding: 0;
  margin:0;
}
.app{
  padding:0;
  margin:0;
}
.el-menu-demo{
  display: inline-block;
  border-bottom: none!important;
}
.hr{
  border-bottom: 1px solid #ccc;
}


.el-header,
.el-footer {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
  padding:0!important;
 
  

}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.logo{
  width:80px;
   margin-top:30px;
}
.wrap{
  text-align: center;
 
}
</style>
