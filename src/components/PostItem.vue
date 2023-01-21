<template>
    <div class="post" >
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Name:</strong> {{ post.title }}</div>
            <div><strong>Body:</strong> {{ post.body }}</div>
        </div>
        <div class="postButtons">
            <MyButton
                @click='$router.push(`posts/${post.id}`)'
            >Open</MyButton>
            <MyButton
                @click='$emit("removePost",post)'
            >Delete</MyButton>
        </div>
    </div>         
</template>
    
<script>


    export default{
    props: {
        post: {
            type: Object,
            required: true,
        }
    },

}
</script>
    
<style scoped>
    .post{
        padding: 15px;
        border: 2px solid var(--myColor);
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .postButtons{
        display: flex;
    }
</style>