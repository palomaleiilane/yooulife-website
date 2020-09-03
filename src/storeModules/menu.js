import Vue from 'vue'

export default {
	namespaced: true,

	state: {
		menu: []
	},

	getters: {
		getMenu(state) {
			return state.menu
		}
	},

	mutations: {
		setMenu(state, payload) {
			payload.forEach(item => {
				if (item.menu_item_parent != "0") return

				state.menu.push({
					label: item.post_title,
					link: item.url,
					description: item.description,
					classes: item.classes,
					children: payload.filter(child =>
						child.menu_item_parent == item.object_id
					)
					.map(
						child => ({
							label: child.post_title,
							link: child.url,
							description: child.description,
							classes: child.classes,
						})
					)
				})
			})
		}
	},

	actions: {
		fetch({ state, commit }, payload) {
			// Reset menu
			state.menu = []

			return new Promise((resolve, reject) => {
				Vue.http.get('menu')
					.then(response => {
						// Set menu
						commit('setMenu', response.body)

						// Return menu
						return resolve(state.menu)
					})
			})
		}
	}
}
