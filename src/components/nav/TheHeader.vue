<template>
  <header>
    <router-link to="/">
      <p>Find a Coach</p>
    </router-link>
    <div class="button-wrapper">
      <HeaderButton title="All Coaches" page="/coaches"/>
      <HeaderButton title="Requests" page="/requests"/>
    </div>
  </header>
</template>

<script>
import HeaderButton from '../ui/HeaderButton'

export default {
  components: {
    HeaderButton
  }
}
</script>

<style scoped>
header {
  width: 100%;
  background-color: rgb(68, 0, 255);
  height: 75px;
  display: flex;
  justify-content: space-between;

  a, .button-wrapper {
    margin:auto 0
  }

  a {
    margin-left: 10%;
    color: white;
    font-weight: 900;
    font-size: 24px;
    text-decoration: none;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    width: 15%;
    margin-right: 10%;
  }
}
</style>