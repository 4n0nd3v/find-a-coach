<template>
  <TheHeader />
  <main class="page-wrapper">
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style >
body {
  font-family: 'roboto';
}

.page-wrapper {
  margin: 30px auto;
  width: 50%;
}
</style>