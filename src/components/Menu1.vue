<template>
<div>
  <div class="wrap3">
   <el-input
     v-model="text" placeholder="검색" @keyup.enter="handleSearch"
     @change="change()" 
    prefix-icon="el-icon-search"
    >
    
  </el-input>
           

          
  </div>
                  <el-badge :value="pages" class="item" >
  <el-button size="small"><span v-html="get"></span></el-button>
</el-badge>
  <!-- <input type="text" v-model="text" placeholder="검색" @keyup.enter="handleSearch"> -->
   <el-table
    :data="rows"
 
    style="width: 100%">
    <el-table-column prop="_id" label="번호" sortable width="90"></el-table-column>
    <el-table-column label="제목" width="120">
                <template #default="scope">
                    <router-link @click="handleHit(scope.row._id)" :to="`/menu3?_id=${scope.row._id}`">{{scope.row.title}}</router-link>
                                        
                   
                </template>
            </el-table-column>
 
     <el-table-column
      prop="hit"
      label="조회수"
      width="180"
      sortable>
    </el-table-column>
     <el-table-column
      prop="writer"
      label="작성자">
    </el-table-column>
    <el-table-column
      prop="regdate"
      label="날짜"
      sortable  
    >
    </el-table-column>

     <el-table-column
      label="Operations">
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit()">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete
          </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  @current-change="handleCurrentChange"
  layout="prev, pager, next"
  :total="pages">
</el-pagination>
</div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                get :'게시물 수',
                rows : [],      // 게시물 목록
                text : '',      // 검색어 저장      
                pages : 0,      // 전체 페이지수
                page : 1,
            }
        },

        methods:{
          async handleDelete(index, row){
            console.log(index,row);
             this.$confirm('삭제하시겠습니까?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then( async () => {
                    // 파일 첨부가 아닌경우
                    const header = { "Content-Type" : "application/x-www-form-urlencoded" }
                    const url = `/board/delete?_id=${row._id}`;
                    const response = await axios.delete(url, header);
                    console.log(response);
                    if(response.data.ret === 1) { //삭제 성공
                        // this.$router.push({path:'/menu1'}); // 목록페이지로 이동
                        window.location.reload()
                    }
                }).catch(() => {
                });
          },
          
            
           async handleHit(_id) {
                const url = `/board/hit?_id=${_id}`;
                await axios.put(url);
            },
          async handleCurrentChange(val){
            
            this.page = val;
           
            await this.handleSearch();
             
          },
          change(){
             this.get ="검색된 게시물수";
             if(this.text===''){
               this.get ="전체 게시물수"
             }
          },
            async handleSearch() {
               
                //게시물 조회
                let url = `/board/select?page=${this.page}&text=${this.text}`;
                let response = await axios.get(url);
                if(response.data.ret === 1) {
                    this.rows = response.data.data;
                    
                   
                }
              
                //게시물 전체 개수 조회
                url = `/board/count?page=${this.page}&text=${this.text}`;
                response = await axios.get(url);
                console.log(response);
                if(response.data.ret === 1) {
                    this.pages = Number(response.data.data);
                  
                }
               
            },
            
        },

        async created() {
            await this.handleSearch(); // method호출하기
            
        }
    }
</script>


<style scoped>
  .wrap3{
    width:20%;
    min-width: 180px;
    text-align: center;
    display: inline-block;
    margin-bottom: 10px;
  }
  .item{
    display: inline-block;
  float: left;
  }

</style>