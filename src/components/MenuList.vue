<template>
    <v-list dense>
        <Menu/>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
    name: 'MenuList',
    components:{
      Menu
    }
}
</script>