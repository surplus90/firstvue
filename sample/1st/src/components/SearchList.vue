<template>
  <div class="track">
    <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row align-v="center" class="w-50 m-auto">
            <b-col cols="12" class="sticky-top mt-3 mb-3">
                result :: {{search.length}}
                <b-input-group>
                    <b-dropdown slot="append" :text="dropdownListType" variant="outline-info">
                        <b-dropdown-item v-for="(list, index) in dropdownList" :key="index" @click="dropdownListClick(list, $event)">{{list}}</b-dropdown-item>
                    </b-dropdown>
                    <b-form-input v-model="searchValue"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols="12" class="">
                 <b-card
                    :title="item.title"
                    :img-src="item.thumbnailUrl"
                    :img-alt="item.title"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="m-auto"
                    v-for="item in search" :key="item.id"
                >
                    <b-card-text>
                    {{item}}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

/**
* @module SearchList
* @author 
* @version 0.1
* @since 2019년 08월 03일
* @vue-data {string} searchValue - 검색할 input 값 
* @vue-data {string} dropdownListType - 드롭다운 에서 클릭해서 설정한 데이터 키값 
* @vue-data {string} items - Rest api 로 받아온 데이터 객체 
* @vue-computed {string} dropdownList - api 로 받아온 데이터 객체의 키값을 반환 한다. 
* @vue-computed {string} search - dropdownListType 값과 searchValue 값으로 데이터를 필터링 한다. 
* @description Rest api 로 받아온 엘범 정보를 표시하고 키값과 검색어로 실시간 필터링 하는 컴포넌트
*/
export default {
  name: 'SearchList',
  data() {
    return {
        searchValue:"",
        dropdownListType:"",
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
    // this.axios.get(api).then((response) => {
    //     console.log(response.data)
    // });
    
    this.$http.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
        console.log(response.data);
        this.items = response.data.splice(0,100);
    });
  },    
  methods: {
    /**
     * @author greenandsnow@gmail.com
     * @since 2019년 08월 03일
     * @event {click} - 드롭다운 클릭시 호출된다. 
     * @param {string} - 드롭다운 클릭시 받아오는 데이터로 this.items 의 키값 이다. 
     * @param {Event} type - 이벤트 객체 
     * @description 드롭다운 클릭시 호출되어  dropdownListType 값을 교체 한다
     */
    dropdownListClick(type,event){
        this.dropdownListType = type;
    }
  },
  mounted() {
  },
  computed: {
    dropdownList(){
        return Object.keys(this.items[0]);
    },
    search() {
        if(this.dropdownListType=="" || this.searchType=="") return this.items;
        return this.items.filter(key=>(typeof key[this.dropdownListType] == "string") ? key[this.dropdownListType].startsWith(this.searchValue): key[this.dropdownListType] == this.searchValue);
    }
  }
}
</script>

<style scoped lang="scss">
</style>
