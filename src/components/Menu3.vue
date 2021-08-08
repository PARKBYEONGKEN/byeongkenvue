<template>
    <div>
        <h3>상세화면</h3>
        <div class="wrap">

            <div><label>글번호</label><input type="text" v-bind:value="row._id" disabled></div>
            <div><label>제목</label><input type="text" v-bind:value="row.title" disabled></div>
            <div class="textdiv"><label for="textarea1">내용</label><textarea id="textarea1" disabled rows="7" v-bind:value="row.content"></textarea></div>
            <div><label>작성자</label><input type="text" disabled v-bind:value="row.writer"></div>
            <div><label>조회수</label><input type="text" disabled v-bind:value="row.hit"></div>
            <div><label>이미지</label><img v-bind:src="`/board/image?_id=${row._id}`"></div>
            <div><label>날짜</label><input type="text" disabled v-bind:value="row.regdate"></div>
        </div>
        <hr>
        <input type="button" class="a1" @click="handleDelete" value="삭제" />I
         <input type="button" @click="dialogVisible=true" value="수정" class="a1"/>I
        <input type="button" class="a1" value="이전글" @click="handlePrev">i
        <input type="button" class="a1" value="다음글" @click="handleNext">

            <el-dialog title="게시글변경" v-model="dialogVisible" width="300">
            제목 : <input type="text" v-model="title"  /><br />
            내용 : <input type="text" v-model="content" /><br />
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">취소</el-button>
                    <el-button type="primary" @click="handleUpdate">변경</el-button>
                </span>
            </template>
        </el-dialog>

    
    </div>
</template>

<script>
    import axios from 'axios';

    export default {

        data() {
            return {
                row : '',              //글번호를 이용한 현재 게시글 내용
                no  : this.$route.query._id,  // 현재의 글번호 정보
                dialogVisible : false,    // 글변경 dialog 표시 여부
                title : '',         // 변경시 임시 보관 변수
                content : '',       // 변경시 임시 보관 변수
            }
        },

        methods : {
            async handleNext() { //다음글
                 const header = { "Content-Type" : "application/x-www-form-urlencoded" }
                const url = `/board/nextno?_id=${this.no}`;
                const response = await axios.get(url, header);
                console.log(response);
                if(response.data.ret === 1){
                    const next = Number(response.data.data);
                    if(next > 0){
                        this.$router.push(
                            {path:'/menu3',query:{_id:next}}
                        );
                        this.no = next;
                        await this.handleContent();
                    }
                    else{
                        alert('다음글이 없습니다.');
                    }
                }

                    },
           
            
            async handlePrev() { //이전글
                const header = { "Content-Type" : "application/x-www-form-urlencoded" }
                const url = `/board/prevno?_id=${this.no}`;
                const response = await axios.get(url, header);
                console.log(response);
                if(response.data.ret === 1){
                    // 0 또는 이전글
                    const prev = Number(response.data.data);
                    if(prev > 0) {
                        // 현재 페이지가 /menu3에서 다시 menu3으로 이동X
                        // 뒤로가기 기록을 남기면 push    
                        // 뒤로가기 기록을 남기지 않을 거면 replace
                        this.$router.push(
                           { path:'/menu3', query:{_id:prev} });
                        
                        //글번호를 변경후 새로운 내용 가져오기
                        this.no = prev;
                        await this.handleContent();  // this.no를 사용 
                    }
                    else { // prev가 0인경우는 이동불가
                        alert('이전글이 없습니다.');
                    }
                }
            },


            async handleUpdate() {
                const header = { "Content-Type" : "application/x-www-form-urlencoded" }
                const url = `/board/update`;
                const obj = {
                    _id     : this.row._id,
                    title   : this.title,
                    content : this.content
                }
                const response = await axios.put(url, obj, header);
                console.log(response);
                if(response.data.ret === 1) { //변경 성공시 
                    this.dialogVisible = false;
                    await this.handleContent(); //변경된 내용으로 갱신
                }
            },

            async handleDelete() {
                this.$confirm('삭제하시겠습니까?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then( async () => {
                    // 파일 첨부가 아닌경우
                    const header = { "Content-Type" : "application/x-www-form-urlencoded" }
                    const url = `/board/delete?_id=${this.no}`;
                    const response = await axios.delete(url, header);
                    console.log(response);
                    if(response.data.ret === 1) { //삭제 성공
                        this.$router.push({path:'/menu1'}); // 목록페이지로 이동
                    }
                }).catch(() => {
                });
            },

            async handleContent(){
                const url = `/board/content?_id=` + this.no;
                const response = await axios.get(url);
                console.log(response);
                if(response.data.ret === 1){
                    this.row = response.data.data;
                    this.title = this.row.title;
                    this.content = this.row.content;
                }
            }
        },
        
        async created() {
            //methods에 만든 함수 호출
            await this.handleContent(); 
        }
    }
</script>

<style scoped>
    label{
        width:100px;
        display: inline-block;
    }
    input{
        background: white;
        border:none;
        width:200px;
        margin-bottom: 10px;
    }

    .a1:hover{
        background: #ccc;
    }
        .a1:active{
        background: red;
    }
    
    textarea{
        width:200px;
        background: white;
        resize: none;
        border:none;

    }
    img{
        width:200px;

    }
    .wrap{
        display: inline-block;
        text-align: left;
    }
 
    #textarea1{
         vertical-align: middle;
    }
</style>