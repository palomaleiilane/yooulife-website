import Vue from 'vue'

export default {
	namespaced: true,

	state: {
		pages: {
			'home': {},
			'solutions': {},
			'apps': {},
			'clientes': {},
			'planos': {},
			'sobredobra2': {},
			'sobredobra3': {},
			'sobredobra4': {}
		}
	},

	getters: {
		getHome(state) {
			return state.pages['home']
		},
		getClientes(state) {
			return state.pages['clientes']
		},
		getSolutions(state) {
			return state.pages['solutions']
		},
		getApps(state) {
			return state.pages['apps']
		},
		getPlanos(state) {
			return state.pages['planos']
		},
		getSobreDobra2(state) {
			return state.pages['sobredobra2']
		},
		getSobreDobra3(state) {
			return state.pages['sobredobra3']
		},
		getSobreDobra4(state) {
			return state.pages['sobredobra4']
		}
	},

	mutations: {
		set(state, payload) {
			// Organize generic data
			let page = {
				...payload,
				...payload.acf,
				title: payload.title.rendered,
				content: payload.content.rendered,
				excerpt: payload.excerpt.rendered
			}

			// Organize pages data
			switch (page.slug) {

				case 'solutions':
					if (page.items)
						page.items = page.items.map(
							item => ({
								...item,
								icon: item.icon ? item.icon.url : undefined
							})
						)
					break

				case 'apps':
					if (page.items)
						page.items = page.items.map(
							item => ({
								...item,
								brands: [
									item.first_brand.url
								]
							})
						)
					break
				
				case 'squad':
					let features = {}

					if (page.features)
			            page.features.forEach(feature => {
			              features[feature.category] = feature.items.map(
			                item => ({
			                  ...item,
			                  image: item.image ? item.image.url : undefined
			                })
			              )
			            })

						page.features = features
					break

					}
			Vue.set(state.pages, page.slug, page)
		}
	},

	actions: {
		fetch({ state, commit }) {
			return new Promise((resolve, reject) => {
				Vue.http.get('pages')
					.then(response => {
						// Set pages
						response.body.forEach(page =>
							commit('set', page)
						)
						// Return pages
						return resolve(state.pages)
					})
			})
		}
	}
}
