<template>
    <div>
        <h1>用户:{{userId}}你好</h1>
        <p>我是用户界面</p>
        <p>我是用户界面</p>
        <p>我是用户界面</p>
        <p>我是用户界面</p>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId() {
                return this.$route.params.userId;
            }
        }
    }
</script>

<style scoped>

</style>
