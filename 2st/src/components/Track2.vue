<template>
  <div class="track">
      <div>
          <select name="" id="">
              <option value="id">id</option>
              <option value="artist">artist</option>
          </select>
        <input type="text" placeholder="Search Artist" @keyup.enter="submit">
        <label class="btn ml-10">asc
            <input type="radio" name="sort" checked>
            <span class="checkmark"></span>
        </label>
        <label class="btn ml-10">desc
            <input type="radio" name="sort">
            <span class="checkmark"></span>
        </label>
      </div>
    <ul v-for="item in search" :key="item.id">
      <li>{{ item.title }} ({{ item.artist }})</li>
    </ul>
  </div>
</template>

<script>
/**
 * 
 * select box 값 + 검색어 + 정렬 순서를 적용 필터 및 정렬 적용 
 * 
 * 이벤트 거는 방법 
 * https://kr.vuejs.org/v2/guide/events.html
 * 
 * v-on 은 @ 로 대체 됨 
 * 
 * 데이터 소팅 힌트 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * 
 * 소팅하고을 asc 로 했을때 desc 하는 방법 
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * 
 */
export default {
  name: 'Track',
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.ml-10{
    margin-left: 10px;
}

/* Customize the label (the btn) */
.btn {
  display: inline-block;
  position: relative;
  padding-left: 35px;
//   margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.btn input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.btn:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.btn input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.btn input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.btn .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
