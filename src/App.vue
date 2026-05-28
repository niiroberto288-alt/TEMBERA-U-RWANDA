<script setup>
// import Home from './components/views/home.vue';
import NavBar from './components/NavBar.vue';
import router from './router/index.js';
import Footer from './components/footer.vue';
</script>
<template>
  <NavBar/>
  <RouterView/>
  <Footer/>
  <!-- <Home/> -->
</template>