<template>
  <div class="track">
      <div>
          <select name="" id="">
              <option value="volvo">item</option>
          </select>
        <input type="text" placeholder="Search Artist" @keyup.enter="submit">
      </div>
        <table class="table">
            <caption>데이터 caption</caption> 
            <thead>
                <tr>
                    <th>Library <span>▲</span><span>▼</span></th>
                    <th>Library <span>▲</span><span>▼</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Market Share</td>
                    <td>Market Share</td>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"><em>데이터 갯수</em></td> 
                    </tr>
                </tfoot>
        </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      searchType: "",
      tmpItems: [],
      items: [
        {
          "id": 1,
          "artist": "10cm",
          "title": "pet"
        },
        {
          "id": 2,
          "artist": "10cm",
          "title": "쓰담쓰담"
        },
        {
          "id": 3,
          "artist": "10cm",
          "title": "봄이 좋냐??"
        },
        {
          "id": 4,
          "artist": "10cm",
          "title": "폰서트"
        },
        {
          "id": 5,
          "artist": "10cm",
          "title": "pet"
        },
        {
          "id": 6,
          "artist": "Calvin Harris",
          "title": "One Kiss"
        },
        {
          "id": 7,
          "artist": "Panic! At The Disco",
          "title": "High Hopes"
        },
        {
          "id": 8,
          "artist": "Lukas Graham",
          "title": "Love Someone"
        },
        {
          "id": 9,
          "artist": "Lukas Graham",
          "title": "You're Not There"
        },
        {
          "id": 10,
          "artist": "Calvin Harris",
          "title": "Promises"
        }
      ]
    }
  },
  methods: {
    submit(e) {
      this.searchType = e.target.value;
    }
  },
  mounted() {
    this.tmpItems.push(...this.items);
  },
  computed: {
    search() {
      return this.tmpItems.filter(key=>key.artist.startsWith(this.searchType));
    }
  }
}
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}

.table{
    width: 100%;
}
</style>
