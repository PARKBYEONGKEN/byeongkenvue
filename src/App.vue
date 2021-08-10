<template>
    <div>
        
          
        <el-container>
          <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">홈으로</el-menu-item>
              <el-menu-item index="2" >게시판목록</el-menu-item>
              <el-menu-item index="3" >게시판글쓰기</el-menu-item>
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
 
    }
  },
  methods:{
    handleSelect(val){
      if(val === '1'){
        this.$router.push({path:'/'})
       
      }
      if(val === '2'){
        this.$router.push({path:'/menu1'})
        
      }
      if(val === '3'){
        this.$router.push({path:'/menu2'})
    
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
    background: #1B1D1F!important;
  }




  /* ----------element ------------------- */
  .el-menu-demo{
    
    border: none!important;
  }
  

  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #1B1D1F;
    background: #1B1D1F;
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
