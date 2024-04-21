<template>
  <button :class="[
    type === 'front' ? 'front' : null,
    type === 'back' ? 'back' : null,
    type === 'career' ? 'career' : null
  ]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['skill'],
    computed: {
      type() {
        if(this.skill === 'frontend') {
          return 'front';
        }

        if(this.skill === 'backend') {
          return 'back';
        }

        if(this.skill === 'career') {
          return 'career';
        }

        return null;
      }
    }
  }
</script>

<style scoped>
   button {
    width: 120px;
    margin: 10px 10px 0 0;
    height: 30px;
    color: white;
    border-radius: 16px;
    border: none;
  }

  button:hover{
    cursor: default;
  }
  
  .front {
    background-color: rgb(78, 0, 141);;
  }

  .back {
    background-color: rgb(112, 0, 112);;
  }

  .career {
    background-color: rgb(182, 0, 121);;
  }
</style>