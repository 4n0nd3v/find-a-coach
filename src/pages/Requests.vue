<template>
  <div v-if="requests.length !== 0">
    <BaseCard v-for="request of requests" :key="request.id" class="request">
      <h1>{{ request.userEmail }}</h1>
      <p >{{ request.message }}</p>
  </BaseCard>
  </div>
</template>

<script>
import BaseCard from '../components/ui/BaseCard';
export default {
  computed: {
    requests() {
      console.log( this.$store.getters['requests/getRequests']);
      return this.$store.getters['requests/getRequests'];
    }
  },
  components: {
    BaseCard
  }
}
</script>

<style scoped>
  .request {
    h1{
      margin: 15px 20px;
      font-size: 16px;
      font-weight: 700;
    }

    p {
      font-weight: 400;
      margin: 20px;
    }
  }
</style>