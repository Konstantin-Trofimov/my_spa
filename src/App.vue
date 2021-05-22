<template>
	<v-app
		id="app"
		class="mx-auto overflow-hidden"
		height="100%"
		width="100%"
	>
		<v-navbar></v-navbar>
		<router-view/>
	</v-app>
</template>

<script>

import vNavbar from './components/layouts/v-navbar'

export default {
		name: 'App',
		components: {
			vNavbar,
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

	* {
		font-family: 'Roboto', sans-serif;
	}
</style>

