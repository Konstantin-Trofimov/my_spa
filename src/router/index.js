import Vue from 'vue'
import VueRouter from 'vue-router'
import vGallery from '../views/v-gallery.vue'
import vPhotoInfo from '../views/v-photo-info.vue'
import vAbout from '../views/v-about.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'gallery',
		component: vGallery
	},
	{
		path: '/about',
		name: 'about',
		component: vAbout
	},
	{
		path: '/photo',
		name: 'photo',
		component: vPhotoInfo
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
