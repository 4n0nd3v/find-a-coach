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
    <div class="card-wrapper">
      <button @click="fetchCoaches()"> Refresh </button>
      <router-link to="/register" class="register">Register as a coach</router-link>
    </div>
    <CoachCard v-for="coach in coaches" :coach="coach" :key="coach.id"/>
  </BaseCard>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue';
import CoachCard from '../components/ui/CoachCard.vue';

export default {
  computed: {
    coaches() {
      return this.$store.getters['coaches/coachesList'];
    }
  },
  components: {
    BaseCard,
    CoachCard
  },
  methods: {
    selectSkill(event) {
      this.$store.dispatch('coaches/setSkill', event.target.value);
    },
    async fetchCoaches() {
      try {
        const response = await fetch('https://find-a-coach-c82ef-default-rtdb.firebaseio.com/coaches.json', {
          'method': 'GET'
        });

        response.json().then((data) => {
          const results = [];
          
          for(const id in data) {
            results.push({
              id: id,
              name: data[id].lastname ? data[id].firstname + data[id].lastname : data[id].name,
              price: data[id].price,
              skills: data[id].skills,
            })
          }
          this.$store.dispatch('coaches/setCoaches', results);
        });
      } catch (error) {
        console.log(error);
      }
    }
}
}
</script>

<style scoped>
  input { 
    margin-left: 20px;
    margin-right: 7px;
  }

  .card-wrapper {
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button, a {
    background-color: white;
    border: 1px solid rgb(0, 0, 0);
    color: rgb(85, 0, 85);
    font-weight: 500;
    border-radius: 12px;
    width: 100px;
    height: 35px;
    box-shadow: 2px 2px 5px rgba(139, 139, 139, 0.281);
  }

  button {
    margin-left: 25px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-decoration: none;
    margin-right: 25px;
    font-weight: 400;
    box-shadow: 2px 2px 5px rgba(139, 139, 139, 0.281);
    min-width: fit-content;
    padding: 0 10px;
  }

  button:hover, a:hover {
    cursor: pointer;
    background-color: rgba(158, 0, 158, 0.253);
  } 

  .register {
    background-color: rgb(61, 0, 110);
    color: white;
  }

  .register:hover {
    background-color: rgb(92, 0, 92);
    
  }
</style>