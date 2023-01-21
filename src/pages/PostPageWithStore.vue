<template>
    <div>
        <h1>Page Posts</h1>
        <MyInput 
            :model-value="searchName"
            @update:model-value= "setSearchName"  
            placeholder="Search name"
        ></MyInput>
        <div class="appButtons">
            <MyButton
                @click="showDialog"
            >Create Post</MyButton>
            <MySelect
                :model-value = "setSelectedSort"
                @update:model-value= "setSelectedSort" 
                :options="sortOptions"
            ></MySelect>
        </div>
       

        <MyDialog v-model:show="dialogShow">
            <PostFormVue
                @create="createPost"
            />
        </MyDialog>
       
        <PostListVue 
            v-if="!isPostLoading"
            :posts="sortedAndSearchPosts"
            @removePost="removePost"
        />
        <div v-else-if="isPostLoading" class="loadingDiv">
            <MyLoading>
                <h3 >Posts is Loading</h3>
            </MyLoading>
        </div>
        <div 
            class="observer"
            v-intersection="loadMorePosts"   
        ></div>
    </div>
</template>
    
<script >
    import PostFormVue from '../components/PostForm.vue';
    import PostListVue from '../components/PostList.vue';
  
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
    
    export default{
        components:{
            PostListVue,
            PostFormVue,
        },  
        data(){
            return{
                dialogShow:false,
            }
        },
        methods:{
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchName: 'post/setSearchName',
                setSelectedSort: 'post/setSelectedSort'
            }),
            ...mapActions({
                loadMorePosts: 'post/loadMorePosts',
                fetchPosts: 'post/fetchPosts'
            }),
            createPost(post){
                this.posts.push(post)
                this.dialogShow = false
            },
            removePost(post){
                this.posts = this.posts.filter(p=>p.id !== post.id)
            },
            showDialog(){
                this.dialogShow = true
            },
        },
        mounted(){
            this.fetchPosts();
        },
        computed:{
            ...mapState({
                posts: state => state.post.posts,
                isPostLoading: state => state.post.isPostLoading,
                selectedSort:state=> state.post.selectedSort,
                searchName:state=> state.post.searchName,
                page:state=> state.post.page,
                limit:state=> state.post.limit,
                totalPages:state=> state.post.totalPages,
                sortOptions:state=> state.post.sortOptions, 
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts',
                sortedAndSearchPosts: 'post/sortedAndSearchPosts',
            })
        },
        watch:{

        }
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
    .appButtons{
        display: flex;
        justify-content: space-between;
        margin-block: 10px;
    }
    .loadingDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>