<template>
    <div class="app">
        
          
        <el-container>
          <el-header>
            <el-menu :default-active="activeIndex" background-color="#1B1D1F"  active-text-color="#fff" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                 <el-menu-item index="1" default-active="black">홈으로</el-menu-item>
             
            
              <el-menu-item index="2" >게시판목록</el-menu-item>
             <el-menu-item index="3" >게시판글쓰기</el-menu-item>
            </el-menu>
          </el-header>

          <el-main>
               
      <router-view />
 
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
}
.el-header {
   padding: 0!important;
   background: #1B1D1F;
    }
    .el-main{
      padding: 0!important;;
      margin:0!important;
    }
    .el-menu{
      border-bottom:none!important;
      float:right;
    }





</style>
