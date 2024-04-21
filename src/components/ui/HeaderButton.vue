<template>
  <button>
    <slot>
      <router-link :to="page"> {{ title }}</router-link>
    </slot>
  </button>
</template>

<script>
export default {
  props: ['title', 'page']
}
</script>

<style scoped>
  button {
    height: 50px;
    width: 120px;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid rgb(253, 204, 71);
  }

  a {
    color: rgb(253, 204, 71);
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
  }
</style>