import Vue from 'vue'
import VueResource from 'vue-resource'
// import VueGtm from 'vue-gtm'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import './stylesheets/fontfaces.scss'

Vue.mixin({
	data: () => ({
		publicPath: process.env.BASE_URL
	}),
})

// Vue.use(VueGtm, {
// 	id: 'GTM-56SMKNT',
// 	enabled: true,
// 	debug: true,
// 	vueRouter: router
// })

Vue.use(VueI18n)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.root = process.env.API_URL + '/wp-json/wp/v2'



new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
