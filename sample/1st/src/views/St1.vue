<template>
  <div class="music">
    <h1>search</h1>
    <search-list></search-list>
  </div>
</template>

<script>
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'music',
  components: {
    SearchList
  }
}
</script>