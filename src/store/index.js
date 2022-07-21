import { createStore } from 'vuex'
import web3 from './modules/web3'
import getters  from './getters'

export default createStore({
  getters,
  modules:{
    web3
  }
})
