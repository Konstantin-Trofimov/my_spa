<template>
    <v-card
        class="mt-10 mx-5"
        height="80%"
    >
        <v-card-text>
            <div>ID</div>
            <p class="text-h3 ml-1 font-weight-bold deep-orange--text">  
                {{ itemData.id }}
            </p>

            <div>Title</div>
            <p class="display-1 ml-1 text--primary">
               {{ itemData.title }}
            </p>
            
            <div>Link</div>
            <a 
                class="headline ml-1 blue-grey--text font-weight-medium"
                :href="itemData.url"
            >
                {{ itemData.url }}
            </a>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
 
    export default {
        name: 'vItemCardInfo',
        methods: {
           ...mapActions(['FEATCH_DATA_TO_API']),
        },
        computed: {
            ...mapGetters([
                'GET_DATA'
            ]),
            itemData() {
                let result = {}
                let vm = this
                
                this.GET_DATA.map(function(item) {
                    if (item.id == vm.$route.query.id) {
                        result = item
                    }
                })
                return result
            }
        },
        mounted() {
           this.FEATCH_DATA_TO_API()
        }  
    }
</script>