import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		photos: [],
		categories: []
	},
	mutations: {
		UPLOADING(state, photos) {
			state.photos = photos
		},
		SORT(state) {
			let size = 6
			let subarray = []
			for (let i = 0; i <Math.ceil(state.photos.length/size); i++)	{
				subarray[i] = state.photos.slice((i*size), (i*size) + size)
			}
			state.categories = subarray
		}

	},
	actions: {
		async SET_DATA(ctx, limit) {  
			const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
			const photos = await res.json()
			ctx.commit('UPLOADING', photos)
			return photos 
		},
		SET_CATEGORY({
			commit
		}) {
			commit('SORT')
		},
	},

	getters: {
		DATA(state) {
			return state.photos
		},
		CATEGORIES(state) {
			return state.category
		}
	}
})
