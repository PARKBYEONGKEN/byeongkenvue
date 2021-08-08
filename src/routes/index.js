// 파일명 : routes/index.js
import {createWebHashHistory, createRouter} from 'vue-router';

// 화면에 표시할 컴포넌트 가져오기
import HelloWorld from '@/components/HelloWorld.vue';
import Menu1 from '@/components/Menu1.vue';
import Menu2 from '@/components/Menu2.vue';
import Menu3 from '@/components/Menu3.vue';

//url과 컴포너트 매핑
const routes = [
    {path : '/', name:"HelloWorld", component : HelloWorld},
    {path : '/Menu1', name:"Menu1", component : Menu1 },
    {path : '/Menu2', name:"Menu2", component : Menu2 },
    {path : '/Menu3', name:"Menu3", component : Menu3 },
    
    
];

// route 적용
const router = createRouter({
    history : createWebHashHistory(),
    routes,
});
export default router;