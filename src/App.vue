<template>
    <div>
        
          
        <el-container>
          <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" v-bind:class="on">홈으로</el-menu-item>
              <el-menu-item index="2" v-bind:class="on1">게시판목록</el-menu-item>
              <el-menu-item index="3" v-bind:class="on2">게시판글쓰기</el-menu-item>
            </el-menu>
          </el-header>

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
  data(){
    return{
    on:'on',
    on1:'',
    on2:''
    }
  },
  methods:{
    handleSelect(val){
      if(val === '1'){
        this.$router.push({path:'/'})
        this.on ="red"
        this.on1="on"
        this.on2="on"
      }
      if(val === '2'){
        this.$router.push({path:'/menu1'})
        this.on ="on"
        this.on1="red"
        this.on2="on"
      }
      if(val === '3'){
        this.$router.push({path:'/menu2'})
         this.on ="on"
        this.on1="on"
        this.on2="red2"
      }      
      console.log(val);
    }
  }
}
</script>
  
<style>
  *{
    margin:0px;
    padding:0px;
  }
.on{
  color:red;
  
}
.red{
  color: blue!important;
  font-weight: bold;
}
.red2:hover{
  color: blue !important;
  font-weight: bold;
}
.red2:active{
  color: blue!important;
  font-weight: bold;
}

.m1{
   padding:10px;
   text-decoration: none;
   color: blue;
  }
  .m1:hover{
    color:red;
  }
 .m1:active{
   background: rgba(255,255,0,0.1);
   background: 400px;
 
 }
 .logo{
   width:80px;
   
 }
 .logowrap{
   text-align: center;
 }


  /* ----------element ------------------- */
  .el-menu-demo{
    background: #000!important;
  }
  

  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    background: #000;
    text-align: center;
    line-height: 60px;
  }


  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    padding:0!important;
    margin:0!important;
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
</style>
