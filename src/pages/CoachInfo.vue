<template>
  <BaseCard class="coach-card" :title="coach.name">
    <p>{{ coach.price }}$/hour</p>
  </BaseCard>
  <router-view></router-view>

  <BaseCard title="Interested? Reach out now!">
    <BaseButton class="details">Contact</BaseButton>
  </BaseCard>

  <BaseCard class="skill">
    <BaseButton v-for="skill in coach.skills" :key="skill" :skill="skill"> {{ skill.toUpperCase() }}</BaseButton>
    <p> {{ coach.description ?? "Coach doesn't have a description yet!" }}</p>
  </BaseCard>
</template>

<style></style>

<script>
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'

  export default {
    props: ['id'],
    components: {
      BaseCard,
      BaseButton
    },
    data() {
      return {
        coach: null
      }
    },
    created() {
      this.coach = this.$store.getters['coaches/coachesList'].find((coach) => coach.id === this.id)
      console.log(this.coach)
    }
  }
</script>

<style scoped>
  .coach-card {
    p {
      margin-left: 20px;
      font-weight: 700;
    }

  }

  .details {
    color:white;
    background-color:  rgb(51, 0, 75);
    font-weight: 500;
    margin-left: 15px;
    margin-top: 0;
    width: 90px;
    height: 40px;
    margin-bottom: 20px;
  }
  
  .skill {
    button {
      margin-top: 20px;
      margin-bottom: 15px;
    }

    button:nth-child(1) {
      margin-left: 20px;
    }

    p {
      margin-left: 25px;
      font-weight: 600;
    }
  }
</style>