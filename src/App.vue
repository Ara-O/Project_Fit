<template>
 <navbar></navbar>
  <router-view></router-view>
</template>


<style scoped>
html {
  background: #eaeaea;
}
</style>

<script>
import Navbar from './components/Navbar.vue';
 export default {
  components: {
    Navbar
  }
}
</script>