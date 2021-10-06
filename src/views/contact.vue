<template>
<Header/>
<div class="flex flex-col justify-center items-center mt-20">


  <a-form ref="formRef"
    :model="formState"
    :rules="rules" layout="vertical" >
    
 <a-form-item has-feedback ref="email" name="email" label="email" >
      <a-input v-model:value="formState.email" class="styleinput"   placeholder="input placeholder" />
    </a-form-item>
    
     
  <a-radio-group class="mt-5" v-model:value="value">
    <a-radio  :value="1">Option A</a-radio>
    <a-radio  :value="2">Option b</a-radio>
   
  </a-radio-group>
  <div class="mt-10 ">
 <a-button type="primary" class="w-full uppercase py-6 text-white text-base"  @click="onSubmit">submit</a-button>
  </div>
 
  </a-form>
  </div>
</template>
<script lang="ts">
import Header from "./Header.vue"
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import {defineComponent,ref,reactive,UnwrapRef,toRaw} from "vue"
import {FormState} from "./Contact"
export default defineComponent( {
  
name:'contact',
components:{
Header
},

setup(){
   const formRef = ref();
      const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
      emai:''
    });
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<FormState>) => {
          console.log('error', error);
        });
    };
const value = ref<number>(1);
   const rules = {
      email: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
     
    };
       return {
       value,
       rules,
       formState,
       onSubmit,
       formRef
      
    };
} 

})
</script>

<style >
.styleinput{
  width:300px
}
</style>