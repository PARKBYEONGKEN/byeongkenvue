<template>
    <div>
        <h3>글쓰기</h3>
        <hr/>
        <!-- <div class="wrap">
        <label>제목:</label><input type="text"  class="text1"
        v-model="title"
        placeholder="제목입력"/>
        <br>
        <label>내용:</label><textarea rows="7"
        v-model="content"
         placeholder="내용입력"></textarea>
        <br>
        <label>작성자:</label><input type="text" class="text2"
        v-model="writer"
         placeholder="작성자입력"/>
        <br>
       <label >이미지:</label><input type="file" id="input-file"
       @change="handleImage" /><label for="input-file" class="upload">업로드</label>
        {{name}}
        <br>
       
        <div class="center">
        <input type="button" @click="sendData" value="글쓰기" class="button" /><br>
        <router-link to="/menu1">글목록으로</router-link>
        </div>
        </div> -->
<div class="wrap2">
    
         <el-form ref="form" :model="form" label-width="100px">
             <div class="wr1">
  <el-form-item label="제목" >
    <el-input v-model="title" label-width="10px"></el-input>
  </el-form-item>
             </div>
             <div class="wr2">
   <el-form-item label="내용">
    <el-input type="textarea" v-model="content" ></el-input>
  </el-form-item>
  </div>
  <div class="wr3">
    <el-form-item label="작성자" >
    <el-input v-model="writer" label-width="10px"></el-input>
  </el-form-item>
  </div>
  <div class="wr4">
    <el-form-item label="사진" >
    <input type="file" id="input-file"
       @change="handleImage" /><label for="input-file" class="upload">업로드</label>
        {{name}}
  </el-form-item>
  </div>
<div class="center">
  
        <input type="button" @click="sendData" value="글쓰기" class="button" /><br>
        <router-link to="/menu1">글목록으로</router-link>
      
        </div>

</el-form>
</div >
    </div>
</template>

<script>
 import axios from 'axios';
    export default {
        methods:{
            async sendData(){
                const url = '/board/insert' ;
                const header = { "Content-Type" : "multipart/form-data"};
                
                const formData = new FormData();
                formData.append("title", this.title);
                formData.append("content", this.content);
                formData.append("writer", this.writer);
                formData.append("file", this.image);

                const response = await axios.post(url,formData,header);
                console.log(response);
                if(response.data.ret === 1){
                    alert(response.data.data);
                    this.$router.push({path:'/menu1'})
                }
                else{
                    alert("글쓰기에 실패했습니다");
                }
            },
            handleImage(e){
                // e로 전송되는 파일정보를 image변수에 넣어줌.
                console.log(e);
                if(e.target.files.length >0){
                    this.image = e.target.files[0];
                    this.name = e.target.files[0].name;
                }
            }
        },
        data(){
            return{
                title:'',
                content:'',
                writer:'',
                image:'',
                name:'',
            }
        },
    }
</script>

<style scoped>
    .wrap{
        display: inline-block;
        text-align: left;
    }
    label{
        width:100px;
        display: inline-block;
    }
    textarea{
        width:500px;
        resize:none;
        margin-bottom: 10px;
    }
    .text1{
        width:500px;
        margin-bottom: 20px;
        padding:10px;
    }
    .text2{
        width:200px;
        margin-bottom: 10px;
    }
    .file{
        position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip:rect(0,0,0,0); border: 0;
        
    }
    #input-file{
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
    }
    .upload{
         text-align: center;
  background-color:#487b99;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-left: 10%;
  
  
  font-size:13px;
  margin-bottom: 20px;
    }
    .button{
        width:400px;
        padding: 6px 25px;
        border-radius: 4px;
          margin-bottom: 20px;
            background-color:#487b99;
            color:white;
            text-align: center;
    }
    .center{
        text-align: center;
    }
    .wrap2{
        width:50%;
    display: inline-block;
    text-align: center;
}
.wr1{
    width:70%;
    margin-left:10%;
    
}
.wr2{
    width:70%;
    margin-left:10%;
}
.wr3{
    width:70%;
    margin-left:10%;
}
.wr4{
    width:70%;
    text-align: left;
    margin-left:10%;
}

</style>