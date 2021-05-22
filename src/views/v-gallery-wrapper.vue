<template>
	<div class="text-center">
    	<v-loader
			class="loader"
			v-if="isLoading"
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
	import vLoader from '../components/tools/v-loader'
	import vCategories from '../components/layouts/v-categories'
	
  
	export default {
		name: 'vGalleryWrapper',
		components: {
			vLoader,
			vCategories
		},
		props: {
			isLoading: {
				type: Boolean
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