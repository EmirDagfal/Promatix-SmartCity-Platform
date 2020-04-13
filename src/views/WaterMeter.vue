<template>
<div>
    <Counter/>
    <Login/>
    <!-- <DevicesTable/> -->
</div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import DevicesTable from '@/components/DevicesTable.vue'
import Login from '@/components/Login.vue'
export default {
  name: 'Home',
  components: {
    Counter,
    DevicesTable,
    Login
  }
}
</script>