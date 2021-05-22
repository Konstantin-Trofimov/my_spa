<template>
    <div>
        <v-category-list
            v-for="(category, i) in categories"
            :key="i"
            :category="category"
			>
        </v-category-list>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import vCategoryList from './v-category-list'

    export default ({
		name: 'vCatigories',
		components: {
            vCategoryList
		},
		computed: {
			...mapState(['categories']),
           
		},
		methods: {
			...mapActions(['SORT_DATA']),
  		},	
		mounted() {
			this.SORT_DATA()	
		}
	})
</script>