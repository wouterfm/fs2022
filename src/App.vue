<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
Header,
Footer
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
<Footer />
</template>
