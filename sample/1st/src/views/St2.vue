<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TableSample :data="items"></TableSample>
  </div>
</template>

<script>
import TableSample from '@/components/TableSample.vue'

export default {
    name: 'music',
    data(){
        return {
            items: [
                // {
                //     albumId: 1,
                //     id: 1,
                //     thumbnailUrl: "",
                //     title: "",
                //     url: "",
                // },
            ]
        }
    },
    created() {
        console.log("created::",this);
        this.$http.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
            console.log("created::api::",response.data);
            this.items.push(...response.data.splice(0,5));
        });
    }, 
    components: {
        TableSample
    }
}
</script>