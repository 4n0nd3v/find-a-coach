import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      coaches: [
        {
          id: 1,
          name: 'Cunha',
          price: 39,
          skills: ['frontend', 'backend']

        },
        {
          id: 2,
          name: 'Rafael',
          price: 39,
          skills: ['frontend', 'backend', 'career']

        },
        {
          id: 3,
          name: 'Mello',
          price: 39,
          skills: ['career']
        }
      ],
      selectedSkills: [],
    }
  },
  getters: {
    coachesList (state) {
      return state.coaches;
    },
    selectedSkillsList(state){
      return state.selectedSkills;
    },
  },
  actions: {
    setSkill(context, payload) {
      context.commit('selectSkill', payload);
    },
    unsetSkill(context, payload) {
      context.commit('removeSkill', payload);
    }
  },
  mutations: {
    selectSkill(state, payload) {
      state.skill = payload;
      const index = state.selectedSkills.indexOf(payload);  
      
      if(index === -1) {
        return state.selectedSkills.push(payload);
      } 
      
      state.selectedSkills.splice(index, 1);
    }
  }
});

export default store;