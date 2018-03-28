<template>
  <div id="app">
    <transition :name="transitionName" mode="in-out">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right",
      isBack: true,
    };
  },
  created() {
    console.log("isfresh");
    this.isfresh = true;
  },
  watch: {
    $route(to, from) {
      
      //  console.log(to);
       this.isBack = !this.isBack;
        if (this.isBack) {
          // console.log(this.isBack);
          this.transitionName = "slide-right";
        } else {
          this.transitionName = "slide-left";
        }
     
        
    }
  }
};
</script>

<style <style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition: all 0.3s ease;
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
    transition: all 0.3s ease;
  }
}
</style>
