<template>
<div>
 <Header/>
 <div class="flex mt-5">
   <div class="border ml-3 p-5 border-solid border-black" v-for='post in posts' :key='post.id'>
  <h3>{{post.name}} </h3>  
      <h3>{{post.username}} </h3>  
    </div>
 </div>
 <a-form layout="vertical">
 <div class="flex flex-col justify-center items-center mt-10">
<a-form-item
         
            class="font-normal"
            label="search"
            has-feedback
          >
            <a-select class="select-Input" v-model:value="formState.search" show-search placeholder="انتخاب کنید">
              <a-select-option
                v-model="formState.search"
                :key="post.id"
                v-for="post in posts"
                :value="post.name"
              >{{post.name}}</a-select-option>
            </a-select>
          </a-form-item>
 </div>

 

 </a-form>
 
 <div class="flex items-center justify-center mt-20">
   <a-pagination v-model:current="current" :total="20" show-less-items >
<template>
       <div class="flex mt-5">
   <div class="border ml-3 p-5 border-solid border-black" v-for='post in posts' :key='post.id'>
  <h3>{{post.city}} </h3>  
      <h3>{{post.zipcode}} </h3>  
    </div>
 </div>
</template>
     </a-pagination>
 </div>


</div>
</template>
<script lang="ts" >
import {computed,defineComponent,ref,reactive,UnwrapRef} from "vue"
import {useStore} from "vuex"
import Header from "./Header.vue"
import { formState} from "./Home"
export default defineComponent( {
  name: 'Home',
  components:{Header},
setup(){
  const store=useStore()
    const posts = computed(() => store.state.posts);
store.dispatch("getPosts");
const formState:UnwrapRef<formState>=reactive({
  search:''
})
return{
  posts,current: ref(2),formState
}
}  
})
</script>
<style scoped>
.select-Input{
  width:300px
}
</style>