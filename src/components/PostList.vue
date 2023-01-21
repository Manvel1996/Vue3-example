<template>
    <div v-if="posts.length > 0">
        <h3>Posts List</h3>
        <TransitionGroup name="list">
            <PostItem 
                :post="post"
                v-for="post in posts"
                :key="post.id"
                @removePost="$emit('removePost',post)"
            />
        </TransitionGroup>
    </div>    
    <h2 v-else style="color: red">Posts list is empty</h2>
  
</template>
    
<script >
import { TransitionGroup } from 'vue';
import PostItem from './PostItem.vue';

    export default{
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    components: { PostItem, TransitionGroup }
}
</script>
    
<style scoped>
    .list-move,.list-enter-active,.list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,.list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>