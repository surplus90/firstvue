<template>
  <div class="music">
    <h1>My favorite songs</h1>
    <Table/>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'music',
  components: {
    Table
  }
}
</script>