<script>
import { ref } from "vue";
export default {
  setup() {
    let menu = ref(false);
    const changeMenu = () => {
      if (menu.value) {
        menu.value = false;
      } else {
        menu.value = true;
      }
    };
    return {
      menu,
      changeMenu,
    };
  },
};
</script>
<template>
  <header
    class="w-100 fixed top-0 bottom-0 left-0 right-0 z-50 block h-12 bg-nav p-0 backdrop-blur-md lg:h-16"
  >
    <div
      class="flex h-full w-full flex-row items-center justify-between p-3 pl-3"
    >
      <div>
        <router-link
          to="/"
          id="logoalt"
          class="logoalt cursor-pointer text-xl font-bold text-light lg:text-3xl"
          >Flagged Studios</router-link
        >
      </div>
      <div class="flex items-center">
        <i
          @click="changeMenu()"
          :class="{
            block: !menu,
            transformUp: !menu,
            hidden: menu,
            transformDown: menu,
          }"
          class="fa-solid fa-bars cursor-pointer text-3xl text-textPrimary transition-all hover:text-primary lg:text-5xl"
        ></i>
        <i
          @click="changeMenu()"
          :class="{
            block: menu,
            transformUp: menu,
            hidden: !menu,
            transformDown: !menu,
          }"
          class="fa-solid fa-xmark cursor-pointer text-4xl text-textPrimary transition-all hover:text-primary lg:text-6xl"
        ></i>
      </div>
    </div>
  </header>
  <div
    class="w-100 fixed top-0 bottom-0 left-0 right-0 z-40 h-full bg-dark p-0 pt-12 lg:pt-16"
    :class="{ block: menu, hidden: !menu }"
  >
    <div class="flex flex-col px-3 lg:px-8">
      <router-link
        to="/"
        @click="changeMenu()"
        class="slide-in-1 mt-2 cursor-pointer text-3xl font-thin text-textPrimary transition-all hover:text-primary"
        >Home</router-link
      >
      <router-link
        to="/jingles-branding"
        @click="changeMenu()"
        class="slide-in-2 mt-2 cursor-pointer text-3xl font-thin text-textPrimary transition-all hover:text-primary"
        >Jingles & Branding</router-link
      >
      <router-link
        to="/get-in-touch"
        @click="changeMenu()"
        class="slide-in-3 mt-2 cursor-pointer text-3xl font-thin text-textPrimary transition-all hover:text-primary"
        >Get in touch</router-link
      >
      <router-link
        to="/about"
        @click="changeMenu()"
        class="slide-in-4 mt-2 cursor-pointer text-3xl font-thin text-textPrimary transition-all hover:text-primary"
        >About</router-link
      >
    </div>
  </div>
</template>
