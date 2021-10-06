<template>
   <div class="grid grid-cols-2 py-4 bg-black">
    <div> 
      <span class="text-white text-2xls ml-5">aysood</span>
    </div>
    <div class="grid justify-end">
      <ul class="grid grid-flow-col" >
        <li>
          <router-link class="text-white mr-5 hover:bg-red-500" to="/">Home</router-link>
        </li>
       
        <li>
          <router-link class="text-white mr-5  hover:bg-red-500" to="/contact">contact</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>