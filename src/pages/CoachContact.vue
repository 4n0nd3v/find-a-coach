<template>
  <form @submit.prevent="submitForm">
    <div :class="{invalid : !email.isValid }">
      <label>Your E-mail</label>
      <input type="email" v-model.trim="email.val" @blur="resetFieldValidity('email')"/>
    </div>

    <div :class="{invalid : !message.isValid }">
      <label>Message</label>
      <textarea v-model.trim="message.val" @blur="resetFieldValidity('message')"></textarea>
    </div>

    <div class="actions">
      <BaseButton class="submit"> Send</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from '../components/ui/BaseButton'
import router from '../router';

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      isFormValid: true,
      email: {
        val: '',
        isValid: true
      },
      message: {
        val: '',
        isValid: true
      }
    }
  },
  methods: {
    resetFieldValidity(input) {
      this[input].isValid = true;
    },
    checkData() {
      this.isFormValid = true;

      if(this.email.val === '') {
        this.email.isValid = false;
        this.isFormValid = false;
      }

      if(this.message.val === '') {
        this.message.isValid = false;
        this.isFormValid = false;
      }
    },
    submitForm() {
      this.checkData();

      if (!this.isFormValid) {
        return;
      }

      this.$store.dispatch('requests/contactCoach', {
        coachId: this.$route.params.id,
        email: this.email.val,
        message: this.message.val
      })

      router.push('/');
    }
  }
}
</script>

<style scoped>
form {
  margin: auto;
  width: 95%;

  div {
    display: flex;
    flex-direction: column;
    min-height: 60px;

    input {
      padding: 5px;
      
    }

    textarea {
      min-height: 150px;
      padding: 10px;
      resize: none;
    }
    
    label {
      margin-bottom: 5px;
      font-weight: 600;
    }
  
    .submit {
      background-color: rgb(51, 0, 75);
      font-size: 16px;
      font-weight: 600;
      width: 90px;
    }

    .submit:hover {
      cursor: pointer;
    }
  }

  div:last-child{
    margin-top: 10px;
    align-items: flex-end;
  }

  .invalid {
    color: red;

    input, textarea {
      border: 1px solid red;
    }
  }
  
}
</style>
