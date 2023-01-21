<template>
    <div class="navbar">
        <div  @click="$router.push('/')" :style="{cursor:'pointer'}">Vue3</div>
        <div class="navbarBtns">
            <MyButton @click="$router.push('/posts')">Posts</MyButton>
            <MyButton @click="$router.push('/about')">About</MyButton>
            <MyButton @click="$router.push('/store')">Store</MyButton>
        </div>
    </div>
</template>
    
<script>
    export default{
        name:"Navbar",
    }
</script>
    
<style scoped>
    .navbar{
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding-inline: 15px;
    }
    .navbarBtns{
        margin-left: auto;
        display: flex;
        gap: 20px;
    }
</style>