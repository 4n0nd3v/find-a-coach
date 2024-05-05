<template>
  <BaseCard class="request">
    <h1>Requests Received</h1>
    <section v-if="requests.length !== 0">
      <div v-for="request of requests" :key="request.id">
        <p class="mail">teste@.com</p>
        <p> erquest reste</p>
      </div>
    </section>
    <h2 v-else>No requests yet!</h2>
  </BaseCard>
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
      text-align: center;
      margin: 40px 0;
      font-size: 24px;
      font-weight: 700;
    }

    h2 {
      margin: 30px;
      text-align: center;
      font-size: 16px;
    }

    div {
      margin: 20px auto;
      width: 80%;
      border: 1px solid rgb(218, 218, 218);
    }

    div:last-child{
      margin-bottom: 50px;
    }

    p {
      margin: 15px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    .mail {
      margin-bottom: -5px;
      color: rgb(60, 0, 128);
      font-weight: 700;
    }
  }
</style>