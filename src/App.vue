<template>
	<v-app
		id="app"
		class="mx-auto overflow-hidden"
		height="100%"
		width="100%"
	>
		<v-navbar></v-navbar>
		<router-view :loading="loading"/>
	</v-app>
</template>

<script>

import vNavbar from './components/v-navbar'
import {mapActions} from 'vuex';

export default {
		name: 'App',
		components: {
			vNavbar,
		},
		data: () => ({
			loading: true
		}),
		methods: {
			...mapActions(['SET_DATA']),
		},
		mounted() {
			this.SET_DATA(24).then((response) => {
					if (response) {
						setTimeout(()=> {
						this.loading = false
					}, 500)
				}
			})
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

	* {
		font-family: 'Roboto', sans-serif;
	}
</style>

