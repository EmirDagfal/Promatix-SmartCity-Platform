<template>
  <v-app id="inspire">
    
    <!-- Estructura principal -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <MenuList/>

    </v-navigation-drawer>

    <v-app-bar
        app
        clipped-left
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        
        <router-link to="/">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </router-link>
    </v-app-bar>

    <v-footer app>
      <span>  Promatix &copy; - 2020  </span>
    </v-footer>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >

      <!-- Aqui van los componentes -->
      
      <!-- Carga automaticamente las rutas -->
      <router-view/>

      </v-container>
    </v-content>

    
  </v-app>
</template>

<script>
// import Home from '@/views/Home.vue'
import MenuList from '@/components/MenuList.vue'

  export default {
    data: function () {
        return {
            title: 'Promatix Telegestion System',
            message: 'Promatix Telegestion System',
            drawer: null,
        }
    },
    props: {
      source: String,
    },
    components: {
      MenuList
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style>
a{
  text-decoration: none;
}
</style>