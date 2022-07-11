<script>
   import {
     ref
   } from 'vue'
   export default {
     setup() {
      let menu = ref(false)
      const changeMenu = () => {
        if (menu.value) {
          menu.value = false
        } else {
          menu.value = true
        }

      }
       return {
        menu,
        changeMenu
       }
     },
   
   
   }
</script>
<template>
   <div v-if="menu" class="overlay w-screen h-screen block fixed z-50 p-4 mt-3 bg-black">
    <div class="hidden lg:flex items-center justify-end px-8">
         <div class="flex items-center">
             <i @click="changeMenu()" class="text-white fa-solid fa-xmark text-5xl cursor-pointer hover:text-indigo-500 transition-all"></i>
         </div>
      </div>
      <div class="flex flex-col mt-5 px-8">
      <router-link to="/" class="text-white hover:text-indigo-500 font-light transition-all" >Home</router-link>
       <router-link to="/welcome" class="text-white hover:text-indigo-500 font-light transition-all">No dash</router-link>
     </div>
         </div>

   <header class="relative p-4 z-0">
      <!-- Mobile header -->
      <div class="flex lg:hidden items-center justify-between px-8">
         <div><img class="max-w-full w-16 h-auto" src="../assets/brand_fs_bw-2022 (1).png"></div>
         <div class="flex items-center">
            <i @click="changeMenu()" class="text-white fa-solid fa-bars text-4xl cursor-pointer hover:text-indigo-500 transition-all"></i>
         </div>
      </div>
      <!-- Default header -->
    <div class="hidden lg:flex items-center justify-between px-8">
         <div><img class="max-w-full w-16 h-auto" src="../assets/brand_fs_bw-2022 (1).png"></div>
         <div class="flex items-center">
             <i @click="changeMenu()" class="text-white fa-solid fa-bars text-4xl cursor-pointer hover:text-indigo-500 transition-all"></i>
         </div>
      </div>
   </header>
</template>