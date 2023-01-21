<template>
    <form @submit.prevent>
        <h3>Create Post</h3>
        <MyInput 
            v-model="post.title"
            placeholder="Name"
            v-focus
        />
        <MyInput 
            v-model="post.body" 
            placeholder="Body"
        />
        <MyButton
            class="btn createPostButton" 
            @click="createPost"
        >Create</MyButton>
    </form>
</template>
    
<script >


    export default{
    data() {
        return {
            post: {
                title: "",
                body: "",
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        }
    },
   
}
</script>
    
<style scoped>
    form{
        display: flex;
        flex-direction: column;
    }
    .createPostButton{
        align-self: flex-end;
        margin-top: 15px;
    }
</style>