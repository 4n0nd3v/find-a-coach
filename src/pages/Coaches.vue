<template>
  <BaseCard title="Find Your Coach">
    <input type="checkbox" name="frontend" value="frontend" @click="selectSkill($event)"/>
    <label for="frontend">Frontend</label>

    <input type="checkbox" name="backend" value="backend" @click="selectSkill($event)"/>
    <label for="backend">Backend</label>

    <input type="checkbox" name="career" value="career" @click="selectSkill($event)"/>
    <label for="career">Career</label>
  </BaseCard>

  <BaseCard>
    <button> Refresh </button>
    <CoachCard v-for="coach in coaches" :coach="coach" :key="coach.id"/>
  </BaseCard>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue';
import CoachCard from '../components/ui/CoachCard.vue';

export default {
  computed: {
    coaches() {
      return this.$store.getters.coachesList;
    }
  },
  components: {
    BaseCard,
    CoachCard
  },
  methods: {
    selectSkill(event) {
      this.$store.dispatch('setSkill', event.target.value);
    }
  },
}
</script>

<style scoped>
  input { 
    margin-left: 20px;
    margin-right: 7px;
  }
  button {
    border: 1px solid rgb(54, 0, 54);
    color: rgb(54, 0, 54);
    border-radius: 16px;
    width: 100px;
    height: 35px;
    margin-left: 20px;
  }
</style>