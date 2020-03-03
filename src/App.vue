<template>
    <div id="app">
        <button @click="homeclick">首页</button>
        <button @click="aboutclick">关于</button>
        <router-link :to="'/user/'+userId" tag="button">用户</router-link>
        <!--router-link标签传递参数-->
        <router-link :to="{path:'/profile',query:{name:'lch',age:'18',height:'180'}}">档案</router-link>
        <keep-alicv>
            <router-view></router-view>
        </keep-alicv>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                userId: 'lch',//这里模拟获取了用户的id
            }
        },
        methods: {
            homeclick() {
                //所有的组件中都有一个this.$router属性
                //向首页传入userId并且跳转到home， 需要在路由对象path中配置path: '/home/:userId',
                this.$router.push('/home');
            },
            //点击关于既传参数又能实现跳转
            aboutclick() {
                this.$router.push(
                    {
                        path: '/about',
                        query: {
                            name: this.userId,
                            age: '18',
                            sex: '男'
                        }
                    }
                );

            },
        }
    }
</script>

<style>

</style>
