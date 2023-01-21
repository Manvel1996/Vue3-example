<template>
    <Navbar></Navbar>
    <div class="app">
        <RouterView></RouterView>
    </div>
</template>
    
<script >
    import { RouterView } from 'vue-router';
    
    export default{
        components: { RouterView }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --myColor: teal;
    }
    .app{
        padding: 20px;
    }
</style>