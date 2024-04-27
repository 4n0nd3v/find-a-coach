export default {
  selectSkill(state, payload) {
    state.skill = payload;
    const index = state.selectedSkills.indexOf(payload);  
    
    if(index === -1) {
      return state.selectedSkills.push(payload);
    } 
    
    state.selectedSkills.splice(index, 1);
  },
  addCoaches(state, payload) {
    state.coaches = payload;
  }
}