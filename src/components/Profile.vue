<template>
    <div>
        <h1>这里是个人信息</h1>
        <p>个人信息</p>
        <p>个人信息</p>
        <p>个人信息</p>
        <p>个人信息</p>
        <p>{{$route.query.age}}</p>
        <p>{{$route.query.height}}</p>
        <p>{{$route.query.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
