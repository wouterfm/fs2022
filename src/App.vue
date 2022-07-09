<script>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
    components: {
Header
    },
    setup() {
return {
}
  }
}
</script>

<template>
<Header />
<router-view />
</template>
