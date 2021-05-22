import Vue from 'vue'
import VueRouter from 'vue-router'
import vGalleryWrapper from '../views/v-gallery-wrapper'
import vItemCardInfo from '../views/v-item-card-info'
import vAbout from '../views/v-about'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'gallery',
		component: vGalleryWrapper
	},
	{
		path: '/about',
		name: 'about',
		component: vAbout
	},
	{
		path: '/card',
		name: 'card',
		component: vItemCardInfo
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
