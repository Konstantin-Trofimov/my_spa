<template>
	<div class="text-center">
    	<v-loader
			class="loader"
			v-if="loading"
		>
		</v-loader>

		<v-categories
			class="mt-3"
			v-else
		>
		</v-categories>	
  	</div>
</template>   

<script>
	import vLoader from '../components/v-loader'
	import vCategories from '../components/v-categories'
  
	export default {
		name: 'Gallery',
		components: {
			vLoader,
			vCategories
		},
		props: {
			loading: {
				typeof: Boolean,
				default() {
					true
				}
			}
		}
	}
</script>

<style>
	.loader {
		padding-top: 10rem;
	}

	.galery {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>