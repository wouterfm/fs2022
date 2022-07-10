<script>
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      let x = "Moi"
        x = "Moi eem"
      const asd = () => {
        x = "Moi eem"
      }
      return {
        asd,
        x
      }
    },


  }
</script>

<template>
  <header class="relative z-15 p-2">
    <!-- Mobile header -->
    <div class="flex sm:hidden justify-evenly items-center">
      <div><button @click="asd()" class="btn btn--primary">DEMO</button></div>
      <div><img class="w-56 h-auto" src="../assets/brand_fs_bw-2022 (1).png"></div>
      <div><button @click="asd()" class="btn btn--primary">DEMO</button></div>
    </div>
    <!-- Default header -->
    <div class="hidden sm:flex justify-between items-center">
       /<router-link to="/welcome" class="text-white hover:text-indigo-500 font-light">No dash</router-link>
         /<router-link to="/welcome" class="text-white hover:text-indigo-500 font-light">No dash</router-link>
           /<router-link to="/welcome" class="text-white hover:text-indigo-500 font-light">No dash</router-link>
      <div><img class="relative max-w-full w-56 h-auto" src="../assets/brand_fs_bw-2022 (1).png"></div>
       /<router-link to="/welcome" class="text-white hover:text-indigo-500 font-light">No dash</router-link>
    </div>
  </header>
</template>