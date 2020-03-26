<template>
<div>
    <Counter/>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <!-- <DevicesTable/> -->
</div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import DevicesTable from '@/components/DevicesTable.vue'
export default {
  name: 'Home',
  components: {
    Counter,
    DevicesTable
  }
}
</script>