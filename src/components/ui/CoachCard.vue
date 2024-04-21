<template>
  <div v-if="checkSkills()">
    <p class='name'>{{ coach.name }}</p>
    <p>R$ {{ coach.price }}/hour</p>
    <BaseButton v-for="skill in coach.skills" :key="skill" :skill="skill"> {{ skill.toUpperCase() }}</BaseButton>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  props: ['coach'],
  components: {
    BaseButton
  },
  computed: {
    skills() {
      return this.$store.getters.selectedSkillsList;
    }
  },
  methods: {
    checkSkills() {
      for(const skill of this.skills) {
        for(const coachSkill of this.coach.skills) {
          if(skill === coachSkill) {
            return true;
          }
        }
      }
      return false;
    }

  }
}
</script>

<style scoped>
  div {
    width: 90%;
    margin: 20px auto;
    height: 140px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 20px 15px;
  }

  p {
    margin-top: 10px;
    font-weight: 900;
    
  }

  .name {
    font-size: 22px;
  }
</style>