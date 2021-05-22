<template>
	<v-app
		id="app"
		class="mx-auto overflow-hidden"
		height="100%"
		width="100%"
	>
		<v-navbar></v-navbar>
		<router-view :isLoading="isLoading"/>
	</v-app>
</template>

<script>

import vNavbar from './components/layouts/v-navbar'
import { mapActions } from 'vuex';

export default {
		name: 'App',
		components: {
			vNavbar,
		},
		data: () => ({
			isLoading: true,
			loadingDelay: 500
		}),
		methods: {
			...mapActions(['FEATCH_DATA_TO_API']),		
		},
		mounted() {
			this.FEATCH_DATA_TO_API().then(response => {
					if (response) {
						setTimeout(()=> {
						this.isLoading = false
					}, 
					this.loadingDelay)
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

