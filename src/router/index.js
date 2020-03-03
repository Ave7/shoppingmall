import VueRouter from 'vue-router';
import Vue from 'vue';

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Profile = () => import('../components/Profile');
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [

        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '首页',
            },
            children: [
                {
                    path: '/',
                    redirect: 'homenews'
                },
                {
                    path: 'homenews',
                    component: HomeNews
                },
                {
                    path: 'homemessage',
                    component: HomeMessage
                }
            ]
        },
        {
            path: '/about',
            component: About,
            meta: {
                title: '关于',
            },
        },
        {
            path: '/user/:userId',
            component: User,
            meta: {
                title: '用户',
            },
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                title: '档案',
            },
        },
    ],
});
router.beforeEach((to, from, next) => {
    // document.title = to.meta.title; //这样写第一个首页的标题为undefined，因为第一个路由嵌套了
    // console.log(to); //打印to后可看到，to对象中首页没有meta属性,需要到to属性中的matched数组中去拿
    document.title = to.matched[0].meta.title;//这是正确的写法
    next();
})
export default router;
