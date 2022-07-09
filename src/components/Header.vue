<script>
import { ref } from 'vue'
export default {
  props: {
    pageTitle: String
  },
  setup() {
    return {
    }
  },
 
 
}
</script>

<template>
  <header class="relative z-15">
  <!-- Mobile header -->
  <div class="flex sm:hidden justify-center">
        <div></div>
    <div><img class="h-20 sm:h-20" src="../assets/brand_fs_bw-2022 (1).png"></div>
        <div></div>
  </div>
<!-- Default header -->
    <div class="hidden sm:flex justify-left">
        <div></div>
    <div><img class="h-20 sm:h-20" src="../assets/brand_fs_bw-2022 (1).png"></div>
        <div></div>
  </div>
      </header>
      <!-- /<router-link to="/welcome" class="text-gray-800 hover:text-indigo-500 font-light">No dash</router-link> -->
</template>