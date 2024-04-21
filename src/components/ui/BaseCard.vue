<template>
  <div>
    <p class="title">{{ title ?? null }}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ["title"]
  }
</script>

<style scoped>
  div {
    width: 90%;
    min-height: 100px;
    border: 1px solid rgb(190, 190, 190);
    border-radius: 8px;
    box-shadow: -2px 1px 4px rgba(194, 194, 194, 0.705);
    margin-top: 30px;
  }

  .title {
    margin: 20px;
    font-size: 24px;
    font-weight: 900;
  }
</style>
