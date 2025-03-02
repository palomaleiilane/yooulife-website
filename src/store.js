import Vue from 'vue'
import Vuex from 'vuex'
import menu from './storeModules/menu'
import page from './storeModules/page'

Vue.use(Vuex)

// Create Modules object
const modules = {
  menu,
	page,
}

// Dynamically import and namespace Vuex modules
const moduleNames = []

moduleNames.forEach(name => {
  let module = require(`./storeModules/${name}`)

  modules[name] = {
    namespaced: true,
    ...module.default
  }
})

const store = new Vuex.Store({
	modules,
})

export default store
