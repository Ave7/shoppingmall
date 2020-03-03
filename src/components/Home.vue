<template>
    <div>
        <h1>我是首页</h1>
        <p>我是首页</p>
        <p>我是首页</p>
        <p>我是首页</p>
        <p>我是首页</p>
        <router-link to="/home/homenews">新闻</router-link>
        <router-link to="/home/homemessage">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",
        activated() {
            this.$router.push(this.path);
        },
        beforeRouteLeave(to, from, next) {
            this.path = this.$route.path;
            next()
        }
    }
</script>

<style scoped>

</style>
