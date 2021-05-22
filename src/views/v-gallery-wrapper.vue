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
	import { mapActions } from 'vuex';
  
	export default {
		name: 'vGalleryWrapper',
		components: {
			vLoader,
			vCategories
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
					}, this.loadingDelay)
				}
			})
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