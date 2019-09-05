<template>
  <div class="hello">
    {{checkArr}}
    <table class="text-center">
      <colgroup>
        <col width="10px"/>
      </colgroup>
      <thead>
        <th>check</th>
        <th>option</th>
        <th>title</th>
        <th>thumbnailUrl</th>
      </thead>
      <tbody>
        <tr v-for="item in inData" :key="item.id">
          <!-- 방법 1 배열로 따로 받는 방법 -->
          <td><input type="checkbox" :value="item" v-model="checkArr"></td>
          <!-- 방법 2 내부 속성으로 확인하는 방법 -->
          <!-- <td><input type="checkbox" v-model="item.checked"></td> -->
          <td>{{item.selectData}}
          <!-- <select v-model="item.selectData">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select> -->
          <select name="test" v-model="item.selectData">
            <template v-for="opt in item.option">
              <optgroup v-if="Array.isArray(opt)" label="optionGroup" :key="`opt_${opt}`">
                  <option v-for="opt2 in opt" :value="opt2" :key="opt2">{{opt2}}</option>
              </optgroup>
              <option v-else :value="opt" :key="`opt_${opt}`">{{opt}}</option>
            </template>
          </select>
          </td>
          <td>{{item.title}}</td>
          <td><img :src="item.thumbnailUrl"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan="4" class="text-center">tfoot</td></tr>
      </tfoot>
    </table>
    <button @click="reload">다시 랜더링</button>
    <button @click="submit">값 체크</button>
  </div>
</template>

<script>

export default {
  name: 'TableSample',
  mixins: [],
  data () {
    return {
      inData:[
        // {
        //   "albumId": 1,
        //   "id": 1,
        //   "title": "accusamus beatae ad facilis cum similique qui sunt",
        //   "url": "https://via.placeholder.com/600/92c952",
        //   "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        //   "option":[1,2,[3,4,5]],
        //   "selectData":'1',
        //   "checked":false
        // },
        // {
        //   "albumId": 1,
        //   "id": 2,
        //   "title": "reprehenderit est deserunt velit ipsam",
        //   "url": "https://via.placeholder.com/600/771796",
        //   "thumbnailUrl": "https://via.placeholder.com/150/771796",
        //   "option":[1,2,[3,4,5]],
        //   "selectData":'1',
        //   "checked":false
        // },
        // {
        //   "albumId": 1,
        //   "id": 3,
        //   "title": "officia porro iure quia iusto qui ipsa ut modi",
        //   "url": "https://via.placeholder.com/600/24f355",
        //   "thumbnailUrl": "https://via.placeholder.com/150/24f355",
        //   "option":[1,2,[3,4,5]],
        //   "selectData":'1',
        //   "checked":false
        // },
        // {
        //   "albumId": 1,
        //   "id": 4,
        //   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        //   "url": "https://via.placeholder.com/600/d32776",
        //   "thumbnailUrl": "https://via.placeholder.com/150/d32776",
        //   "option":[1,2,[3,4,5]],
        //   "selectData":'1',
        //   "checked":false
        // },
        // {
        //   "albumId": 1,
        //   "id": 5,
        //   "title": "natus nisi omnis corporis facere molestiae rerum in",
        //   "url": "https://via.placeholder.com/600/f66b97",
        //   "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
        //   "option":[1,2,[3,4,5]],
        //   "selectData":'1',
        //   "checked":false
        // },
      ],
      checkArr:[],
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    // sample () { return '' } // 예제 입니다. 삭제 하셔도 됩니다. 
  },
  components: {},
  watch: {
    data:function (val, oldval) {
      // this 가 vue 객체 부모에서  props 로 넘겨주는 데이터 가 변경되면 
      // 내부의 변수에 적용한다. 이 방법을 안쓰고 싶다면 props 데이터를 그대로 사용 한다. 
      console.log('props::data::',val)
      // 데이터 다시 설정 
      this.setData(val);
    },
    checkArr:(val, oldval)=>{
        // this 가 undefined
      console.log('checkArr::',val)
    }
  },
  created () {
    // 데이터 관련 호출 및 처리를 수행 
    console.log('TableSample::created::',this.data);

    // 화면 제어용 VM 생성
    // this.data.map(v=>v.selectData='1');
    // this.data.map(v=>v.checked = false);

    // props 데이터를 내부 변수로 연결
    // props 데이터를 연결시 데이터가 바뀌었는데 화면이 랜더링 되지 않는 경우가 있다.
    // 이미 옵저버가 연결된 객체에 위에서 처럼  추가 속성을 넣고 아래 처럼 연결하면 옵저버가 제대로 연결되지 않는다. 
    // this.inData = this.data.slice(0,5);
    // this.inData.push(...this.data.slice(0,5));
    // this.inData.push(...this.data.map(v=>{
    //     v.checked = false; 
    //     v.selectData='1'; 
    //     v.option=[1,2,[3,4,5]];
    //     return v;
    // }));
    this.setData(this.data);
    
    // 이미 옵저버가 생긴 상태에서는 추가적인 옵션은 옵저버가 되지 않는다. 
    // 그래서 복사체로 만들어 다시 넣어야만 제대로 옵저버가 연결된다. 
    // 그래서 api 로 받아서 넣는 경우는 제대로 옵저버가 연결될 가능성이 높다.
    // this.inData.push(...JSON.parse(JSON.stringify(this.data.slice(0,5))));
    // setTimeout(_=>this.$forceUpdate(),3000)//화면 강제 랜더링 
  },
  mounted () {
    // 태그 관련 처리
  },
  methods: {
    // 함수 선언
    setData(data){
        this.inData.push(...data.map(v=>{
            v.checked = false; 
            v.selectData='1'; 
            v.option=[1,2,[3,4,5]];
            return v;
        }));
    },
    submit(){
      console.log('selectData::',this.inData.filter(v=>v.selectData != 1))
      console.log('checked::',this.inData.filter(v=>v.checked))
      console.log('checkArr::',this.checkArr)
    },
    reload(){
      this.$forceUpdate();
    }
  },
  beforeDestroy () {
    // 콤포넌트 해제 되기 전에 처리 할일 정의
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table{
  border: 1px solid gray;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  margin : 20px 10px;
  thead {
    th{
      padding: 10px;
      font-weight: bold;
      vertical-align: top;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
      background: #eee;
    }
  }
  tbody{
    tr {
      td{
        padding: 10px;
        vertical-align: top;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
.text-center{
  text-align: center;
}
</style>
