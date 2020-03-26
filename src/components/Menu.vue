<template>
<v-list-item link>
  <v-list-item-action>
    <v-icon>{{icon}}</v-icon>
  </v-list-item-action>
  <v-list-item-content>
    <!-- <a
      href="/watermeter"
      target="_blank"
    >
      <v-list-item-title>Water Meter</v-list-item-title>
    </a> -->
    <router-link :to="route">{{title}}</router-link>
  </v-list-item-content>
</v-list-item>
</template>

<script>
export default {
    name: 'Menu',
    data: function () {
      return {
        title: 'Water Meter',
        icon: 'mdi-view-dashboard',
        route: '/watermeter'
      }
    },
}
</script>