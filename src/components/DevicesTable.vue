<template>
    <v-card>
        <h4>{{info}}</h4>
        <button @click="getApi()">get</button>
    </v-card>
</template>

<script>
    import axios from 'axios'

export default {
    data () {
        return {
            info: null,
        }
    },
    methods:{
        getApi () {
            axios
            .get('https://cors-anywhere.herokuapp.com/mongodb-api-fns2020.herokuapp.com/devices')
            .then(response => {
                this.info = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        }
    },

  }
</script>