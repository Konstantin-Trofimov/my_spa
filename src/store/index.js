import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dataLimit: 24,
		categorySize: 6,
		data: [],
		categories: [],
	},
	mutations: {
		SET_DATA(state, data) {
			state.data = data
		},
		SET_CATEGORIES(state) {
			const size = this.state.categorySize
			const subarray = []

			for (let i = 0; i < Math.ceil(state.data.length / size); i++) {
				subarray[i] = state.data.slice((i * size), (i * size) + size)
			}
			state.categories = subarray
		}
	},
	actions: {
		async FEATCH_DATA_TO_API(ctx) {
			const limit = this.state.dataLimit
			const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
			const data = await res.json()
			
			ctx.commit('SET_DATA', data)
			return data
		},
		SORT_DATA({
			commit
		}) {
			commit('SET_CATEGORIES')
		},
	},
	getters: {
		GET_DATA(state) {
			return state.data
		},
		GET_CATEGORIES(state) {
			return state.categories
		}
	}
})
