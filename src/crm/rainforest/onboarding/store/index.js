import actions from './action';
import state from './state';
import getters from './getters';
import mutations from './mutations'

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
}
