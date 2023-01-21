<template>
    <div>
        <h1>Page Posts</h1>
        <MyInput 
            v-model="searchName"    
            placeholder="Search name"
        ></MyInput>
        <div class="appButtons">
            <MyButton
                @click="showDialog"
            >Create Post</MyButton>
            <MySelect
                v-model="selectedSort"
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
        <div class="pageWrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                class="pageNumber"
                :class="{
                    'activePageNumber': page === pageNumber
                }"
                @click="changePageNumber(pageNumber)"
            >{{ pageNumber }}</div>
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
    import axios from 'axios'
    
    export default{
        components:{
            PostListVue,
            PostFormVue,
        },  
        data(){
            return{
                posts:[],
                dialogShow:false,
                isPostLoading:false,
                selectedSort:"",
                searchName:"",
                page: 1,
                limit: 10,
                totalPages:0,
                sortOptions:[
                    {
                        value: 'title',
                        name: 'Name',
                    },
                    {
                        value: 'body',
                        name: 'Body',
                    }
                ]
            }
        },
        methods:{
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
            changePageNumber(pageNumber){
                this.page = pageNumber
            },
           
        },
        mounted(){
            this.fetchPosts();
            const options = {
               
                rootMargin: '0px',
                threshold: 1.0
            }
            const callback = (entries, observer) =>{
                if(entries[0].isIntersecting && this.page < this.totalPages){
                    this.loadMorePosts()
                }
            };
            const observer = new IntersectionObserver(callback, options);
            observer.observe(this.$refs.observer)
        },
        computed:{
         
        },
        watch:{
            selectedSort(newValue){
                this.posts.sort((post1,post2)=>{
                    return post1[newValue]?.localeCompare(post2[newValue])
                })
            },
            // page(){
            //     this.fetchPosts()
            // }
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
    /* .pageWrapper{
        display: flex;
        margin-top: 15px;
    }
    .pageNumber{
        border: 1px solid var(--myColor);
        padding: 10px;
        cursor: pointer;
    }
    .activePageNumber{
        border: 3px solid var(--myColor);
    } */
</style>