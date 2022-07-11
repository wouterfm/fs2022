<script>
  import {ref} from 'vue'
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
     }
   }
</script>
<template>
   <div :class="{ block: menu, hidden: !menu}" class="fixed py-4 px-0 lg:py-3 lg:px-4 z-100 top-0 bottom-0 left-0 right-0 bg-black">
      <div class="flex items-center justify-end px-3 lg:px-8">
         <div class="flex items-center">
            <i @click="changeMenu()" :class="{ transformUp: menu, transformDown: !menu }" class="text-textPrimary hover:text-textPrimaryHover fa-solid fa-xmark text-4xl lg:text-6xl cursor-pointer transition-all"></i>
         </div>
      </div>
      <div class=" flex flex-col px-3 lg:px-8">
         <router-link to="/" @click="changeMenu()" class="slide-in-1 mt-2 text-textPrimary hover:text-primary text-3xl font-thin cursor-pointer  transition-all">Home</router-link>
         <router-link to="/jingles-branding" @click="changeMenu()" class="slide-in-2 mt-2 text-textPrimary hover:text-primary  text-3xl font-thin cursor-pointer transition-all">Jingles & Branding</router-link>
         <router-link to="/get-in-touch" @click="changeMenu()" class="slide-in-3 mt-2 text-textPrimary hover:text-primary text-3xl font-thin cursor-pointer transition-all">Get in touch</router-link>
         <router-link to="/about" @click="changeMenu()" class="slide-in-4 mt-2 text-textPrimary hover:text-primary text-3xl font-thin cursor-pointer transition-all">About</router-link>
      </div>
   </div>
   <div :class="{ block: !menu, hidden: menu}" class="relative py-4 px-0 lg:py-4 lg:px-4 z-0">
      <div class="flex items-center justify-between px-3 lg:px-8">
         <div><router-link to="/" id="logoalt" class="logoalt text-secondary text-2xl lg:text-3xl font-bold cursor-pointer">Flagged Studios</router-link></div>
         <!-- <div><router-link to="/"><img class="max-w-full w-16 lg:w-20 h-auto" src="../assets/brand_fs_bw-2022 (1).png"></router-link></div> -->
        <div class="flex items-center">
            <i @click="changeMenu()" :class="{ transformUp: !menu, transformDown: menu }" class="text-textPrimary hover:text-textPrimaryHover fa-solid fa-bars text-4xl lg:text-5xl cursor-pointer transition-all"></i>
         </div>
      </div>
   </div>
</template>