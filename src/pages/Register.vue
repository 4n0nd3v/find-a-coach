<template>
  <BaseCard title="Register as a coach now!">
    <form @submit.prevent="registerCoach()">
      <label for="fistname">First name</label>
      <input type="text" name="firstname" v-model="firstname">

      <label for="lastname">Last name</label>
      <input type="text" name="lastname" v-model="lastname">

      <label for="description">Description</label>
      <textarea class="description" type="text" name="description" v-model="description" />

      <label for="price">Hourly Rate</label>
      <input type="number" name="price" v-model="price">

      <p for="skills">Areas of Expertise</p>

      <div class="skills">
        <div class="check">
          <label for="frontend">Frontend</label>
          <input @click="selectSkill($event)" type="checkbox" name="frontend" value="frontend" v-model="skills"> 
        </div>

        <div class="check">
          <label for="backend">Backend</label>
          <input @click="selectSkill($event)" type="checkbox" name="backend" value="backend" v-model="skills"> 
        </div>

        <div class="check">
          <label for="career">Career Development</label>
          <input @click="selectSkill($event)" type="checkbox" name="carreer" value="career" v-model="skills">
        </div> 
      </div>

      <button type="submit">Register</button>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from '../components/ui/BaseCard';
 export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      description: null,
      price: null,
      skills: []
    }
  },
  components: {
    BaseCard
  },
  methods: {
    async registerCoach() {
      const coachData = {
        firstname: this.firstname,
        lastname: this.lastname,
        description: this.description,
        price: this.price,
        skills: this.skills
      }
      
      await fetch('https://find-a-coach-c82ef-default-rtdb.firebaseio.com/coaches.json', {
        method: 'POST',
        body: JSON.stringify(coachData)
      });
    },
    selectSkill(event) {
      const value = event.target.value;
      
      const index = this.skills.indexOf(value); 

      if (index === -1) {
        return this.skills.push(value);
      }

      this.skills.splice(index, 1);
    }
  }
 }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 95%;
    margin-bottom: 20px;
    position: relative;

    p {
      margin-bottom: 5px;
      font-weight: 800;
      font-size: 16px;
    }

    input, textarea {
      border: 1px solid rgb(190, 190, 190);
      height: 20px;
      margin-bottom: 15px;
      padding-left: 5px;
    }

    .skills {
      display: flex;
      align-items: start;
      flex-direction: column;
    }

    .check {
      padding-left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        font-weight: 500;
      }

      input {
        margin-top: 15px;
        margin-left: 10px;
      }
    }

    .description {
      min-height: 60px;
      resize: none;
      padding: 5px;
    }

    button {
      position: absolute;
      width: 90px;
      height: 30px;
      bottom: -10px;
      right: 0px;
      border: 1px solid rgb(196, 196, 196);
      border-radius: 12px;
      color: white;
      font-weight: 600;
      background-color: rgb(72, 0, 139);
    }

    button:hover {
      cursor: pointer;
    }
  }
</style>