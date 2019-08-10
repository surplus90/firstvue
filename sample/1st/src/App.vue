<template>
  <div id="app">
    <div id="nav">
      <router-link to="/1st">1st</router-link> |
      <router-link to="/2st">2st</router-link> |
      <router-link to="/3st">3st</router-link>
    </div>

    <transition 
    :name="transition.name" 
    :mode="transition.mode"
    >
        <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return{
            transition:{
                name:"slide-right",
                // mode:"out-in",//out-in, in-out, 없음 세가지 동작이 있다. 
            }
        }
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            console.log("beforeEach::",to, from);
            // 라우터 이동에 따라서 애니메이션 방향을 바꾼다. 
            // 좌 -> 우 이동시 slide-right, 우 -> 좌 이동시 slide-left 로 애니메이션 교체 
            this.transition.name = ((parseInt(to.path.replace("/","")) - parseInt(from.path.replace("/","")) > 0 )) ? "slide-right" : "slide-left";
            next();
        })
    },  
    methods: {
    },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style>
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
    transition: transform 0.5s;
    /* // transition: transform .5s; */
    /* position: absolute !important; */
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }

  .slide-right-leave-to {
    transform: translateX(-100vw)
  }

  .slide-right-enter {
    transform: translateX(100vw)
  }

  .slide-left-leave-to {
    transform: translateX(100vw)
  }

  .slide-left-enter {
    transform: translateX(-100vw)
  }
</style>