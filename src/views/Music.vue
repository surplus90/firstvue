<template>
  <div class="music">
    <h1>My favorite songs</h1>
    <Track/>
  </div>
</template>

<script>
import Track from '@/components/Track.vue'

export default {
  name: 'music',
  components: {
    Track
  }
}
</script>