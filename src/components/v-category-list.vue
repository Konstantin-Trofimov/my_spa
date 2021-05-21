<template>
    <v-container>
        <v-item-group>
            <v-row class="my-1">
                <v-col
                    v-for="photo in category"
                    :key="photo.id" 
                    cols="6"
                    sm="2"
                    md="4"
                    lg="2"
                >
                    <v-item>
                        <v-card class="d-flex align-center">   
                            <v-hover v-slot="{ hover }">
                                <v-img
                                    :src="photo.thumbnailUrl"
                                    class="align-end pb-3"
                                    width="150px"
                                    height="150px" 
                                    >
                                    <v-btn
                                        @click="toPhotoInfo(photo.id)"
                                        class="category-item__btn fade-enter-active fade-leave-active"
                                        :class="{ 'show-btn': hover }"
                                        elevation="2"
                                        x-small
                                        >
                                        Подробнее
                                    </v-btn>
                                </v-img>
                            </v-hover>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
    </v-container>
</template>

<script>
    export default ({
		name: 'vCatigory',
        props: {
            category: {
                type: Array
            }
        },
        methods: {
            toPhotoInfo(id) {
                this.$router.push({
                    name: 'photo',
                    query: { id },
                })
            }
        } 
	})
</script>


<style>
	.category-item__btn {
		cursor: pointer;
		opacity: 0;
		transition: all .9s;	
	}
	
	.show-btn {
		opacity: .6;
	}

	.fade-enter-active, .fade-leave-active {
  		transition: opacity .5s;
	}
</style>


 
