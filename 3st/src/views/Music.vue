<template>
  <div class="music">
    <h1>My favorite songs</h1>
    <Track/>
  </div>
</template>

<script>
import Track from '@/components/Table.vue'

export default {
  name: 'music',
  components: {
    Track
  }
}
</script>