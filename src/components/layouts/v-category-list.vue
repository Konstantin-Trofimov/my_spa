<template>
    <v-container>
        <v-item-group>
            <v-row class="my-1">
                <v-col
                    v-for="item in category"
                    :key="item.id" 
                    cols="12"
                    xs="6"
                    sm="4"
                    md="2"
                    lg="2"
                >
                    <v-item>
                        <v-card class="d-flex align-center">   
                            <v-hover v-slot="{ hover }">
                                <v-img
                                    :src="item.thumbnailUrl"
                                    class="align-end pb-3"
                                    width="150px"
                                    height="150px" 
                                    >
                                    <v-btn
                                        @click="toItemInfo(+item.id)"
                                        class="category-item__btn font-weight-bold pa-3"
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
                type: Array,
                default: () => []
            }
        },
        methods: {
            toItemInfo(id) {
                this.$router.push({
                    name: 'card',
                    query: { id },
                })
            },
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
		opacity: .7 ;
	}
</style>


 
