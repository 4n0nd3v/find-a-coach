export default {
  setSkill(context, payload) {
    context.commit('selectSkill', payload);
  },
  unsetSkill(context, payload) {
    context.commit('removeSkill', payload);
  },
  setCoaches(context, payload) {
    context.commit('addCoaches', payload);
  }
}
