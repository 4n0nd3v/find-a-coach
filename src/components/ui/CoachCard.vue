<template>
  <section v-if="checkSkills()">
    <p class='name'>{{ coach.name }}</p>
    <p>R$ {{ coach.price }}/hour</p>
    <BaseButton v-for="skill in coach.skills" :key="skill" :skill="skill"> {{ skill.toUpperCase() }}</BaseButton>

    <div class="aditional-info">
      <router-link class="contact" :to="coachContactLink"> Contact </router-link>
      <router-link class="details" :to="coachDetailsLink"> View details</router-link>
    </div>
  </section>
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
      return this.$store.getters['coaches/selectedSkillsList'];
    },
    coachContactLink() {
      return '/coaches/' + this.coach.id + '/contact';
    },
    coachDetailsLink() {
      return '/coaches/' + this.coach.id;
    },
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
  section {
    width: 90%;
    margin: 20px auto;
    height: 120px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 20px 15px;
    position: relative;
  }

  div {
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 15px;
    right: 25px;
    width: 30%;

    button {
      width: 110px;
      height: 40px;
      border: 1px solid rgb(95, 95, 95);
      border-radius: 20px;
      font-size: 14px;
      min-width: 120px;
    }

    button:hover {
      cursor: pointer;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;
    border: 1px solid rgb(95, 95, 95);
    border-radius: 20px;
    font-size: 14px;
    min-width: 120px;
    text-decoration: none;
  }

  .contact {
    color: rgb(53, 0, 53);
    background-color: white;
    font-weight: 700;
    margin-right: 10px;
  }

  .contact:hover {
    background-color: rgba(158, 0, 158, 0.253);
  }

  .details {
    color:white;
    background-color:  rgb(51, 0, 75);
  }

  p {
    margin-top: 10px;
    font-weight: 900;
    
  }

  .name {
    font-size: 22px;
  }
</style>