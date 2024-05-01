<template>
  <BaseCard title="Register as a coach now!">
    <form @submit.prevent="registerCoach">
      <section :class="{invalid: !firstname.isValid}">
        <label for="fistname">First name</label>
        <input type="text" name="firstname" v-model.trim="firstname.val" @blur="clearValidity('firstname')">
      </section>

      <section :class="{invalid: !lastname.isValid}">
        <label for="lastname">Last name</label>
        <input type="text" name="lastname" v-model.trim="lastname.val" @blur="clearValidity('lastname')">
      </section>

      <section :class="{invalid: !description.isValid}">
        <label for="description">Description</label>
        <textarea class="description" type="text" name="description" v-model.trim="description.val" @blur="clearValidity('description')"/>
      </section>

      <section :class="{invalid: !price.isValid}">
        <label for="price">Hourly Rate</label>
        <input type="number" name="price" v-model="price.val" @blur="clearValidity('price')">
      </section>

      <p for="skills">Areas of Expertise</p>

      <section :class="{invalid: !skills.isValid}">
        <div class="skills">
        <div class="check">
          <label for="frontend">Frontend</label>
          <input @click="selectSkill($event)" type="checkbox" name="frontend" value="frontend" v-model="skills.val" @blur="clearValidity('skills')"> 
        </div>

        <div class="check">
          <label for="backend">Backend</label>
          <input @click="selectSkill($event)" type="checkbox" name="backend" value="backend" v-model="skills.val" @blur="clearValidity('skills')"> 
        </div>

        <div class="check">
          <label for="career">Career Development</label>
          <input @click="selectSkill($event)" type="checkbox" name="career" value="career" v-model="skills.val" @blur="clearValidity('skills')">
        </div> 
      </div>
      </section>

      <button type="submit">Register</button>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from '../components/ui/BaseCard';
 export default {
  data() {
    return {
      firstname: {
        val: '',
        isValid: true
      },
      lastname: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      price: {
        val: null,
        isValid: true
      },
      skills: {
        val: [],
        isValid: true
      },
      isFormValid: true
    }
  },
  components: {
    BaseCard
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if(this.firstname.val === '') {
        this.firstname.isValid = false;
        this.isFormValid = false
      }

      if(this.lastname.val === '') {
        this.lastname.isValid = false;
        this.isFormValid = false
      }

      if(this.description.val === '') {
        this.description.isValid = false;
        this.isFormValid = false
      }

      if(this.price.val === null || this.price.val < 0) {
        this.price.isValid = false;
        this.isFormValid = false
      }

      if(this.skills.val.length === 0) {
        this.skills.isValid = false;
        this.isFormValid = false
      }
    },
    async registerCoach() {
      this.isFormValid = true;
      this.validateForm();

      if(!this.isFormValid) {
        return;
      }
      console.log('aqq')
      const coachData = {
        firstname: this.firstname.val,
        lastname: this.lastname.val,
        description: this.description.val,
        price: this.price.val,
        skills: this.skills.val
      }
      
      await fetch('https://find-a-coach-c82ef-default-rtdb.firebaseio.com/coaches.json', {
        method: 'POST',
        body: JSON.stringify(coachData)
      });
    },
    selectSkill(event) {
      const value = event.target.value;
      
      const index = this.skills.val.indexOf(value); 

      if (index === -1) {
        return this.skills.val.push(value);
      }

      this.skills.val.splice(index, 1);
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

    p, label {
      margin-bottom: 5px;
      font-weight: 800;
      font-size: 16px;
    }

    label {
      font-weight: 500;
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
  
  .invalid {
    input, label {
    color: red;
  }

  input {
    border: 1px solid red;
  }
  }

  section {
    display: flex;
    flex-direction: column;
  }
</style>