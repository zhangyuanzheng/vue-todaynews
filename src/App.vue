<template>
  <div id="app">
    <transition name="router-fade" mode="in-out">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
        return {
           
        }
  },
   
}
</script>

<style <style lang="less" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .router-fade-enter-active, .router-fade-leave-active {
	  transform: translateX(-200%);
    -webkit-transform: translateX(-200%);
	}
	.router-fade-enter, .router-fade-leave-active {
	   transition: all 1s ease;
    -webkit-transition: all 1s ease;
	}
}
</style>
