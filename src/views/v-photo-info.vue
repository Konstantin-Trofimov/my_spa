<template>
    <v-card
        :photo="photoData"
        class="mt-10 mx-5"
        height="80%"
    >
        <v-card-text>
            <div>id</div>
            <p class="text-h3 font-weight-bold deep-orange--text">  
                {{ photoInfo.id }}
            </p>

            <div>Title</div>
            <p class="display-1 text--primary">
               {{ photoInfo.title }}
            </p>
            
            <div>Link</div>
            <a 
                class="headline blue-grey--text font-weight-medium"
                :href="photoInfo.url"
            >
                {{ photoInfo.url }}
            </a>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
 
    export default {
        name: 'PhotoInfo',
        data() {
            return {
                photoData: {},
            }
        },
        methods: {
           ...mapActions(['SET_DATA']),
        },
        computed: {
            ...mapGetters([
                'DATA'
            ]),
            photoInfo() {
                let result = {}
                let vm = this
                this.DATA.map(function(photo) {
                    if (+photo.id == vm.$route.query.id) {
                        result = photo
                    }
                })
                return result
            }
        },
        mounted() {
           this.SET_DATA(24)
        }  
    }
</script>