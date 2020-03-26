<template>
    
        <v-row justify="center">
        <!-- Card -->
        <v-card
        class="text-center"
        max-width="290">
            <v-card-title>{{title}}</v-card-title>
            <h1>{{number}}</h1>
            <v-card-text>{{message}}</v-card-text>
            
            

            <v-btn class="ma-2" @click="increment">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn class="ma-2" @click="reset">
                <v-icon>mdi-restore</v-icon>
            </v-btn>
            <v-btn class="ma-2" @click.stop="dialog = true">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </v-card>

        <!-- Dialog -->
        <v-dialog
        v-model="dialog"
        max-width="290"
        >
            <v-card>
                <v-card-title class="headline">{{dialogTitle}}</v-card-title>

                <v-card-text>{{dialogText}}</v-card-text>

                <v-card-actions>
                    
                    <v-text-field type="number" v-model="numberToUpdate"></v-text-field>
                    
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false">
                        Cancel
                    </v-btn>
                    <v-btn text @click="setCounter()">
                        Accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        </v-row>
    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Counter',
    data: function () {
        return {
            title: 'Contador',
            message: 'Contador de pulsos de medidor',
            dialogText: 'El valor del contador debe ser entero positivo',
            dialogTitle: 'Establecer valor',
            dialog: false,
            numberToUpdate: 0
        }
    },
    computed: {
        // ...mapState(['number']),
        ...mapGetters('counter', ['number'])
    },
    methods: {
        ...mapMutations('counter', ['increment', 'reset', 'set']),
        setCounter(){
            console.log(this.numberToUpdate)
            this.dialog = false
            this.set(this.numberToUpdate)
        },
    }
}
</script>