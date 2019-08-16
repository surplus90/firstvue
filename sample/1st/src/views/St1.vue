<template>
  <div class="music">
    <h1>search</h1>
    <search-list :items="items" sort='desc'></search-list>
  </div>
</template>

<script>
import SearchList from '@/components/SearchList.vue'

export default {
    name: 'music',
    data(){
        return {
            items: [
                {
                    albumId: 1,
                    id: 1,
                    thumbnailUrl: "",
                    title: "",
                    url: "",
                },
            ]
        }
    },
    created() {
        console.log("created::",this);
        this.$http.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
            console.log(response.data);
            this.items = response.data.splice(0,100);
        });
    }, 
    components: {
        SearchList
    }
}
</script>