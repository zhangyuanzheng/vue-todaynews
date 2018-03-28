<template>
   <div id="index">
         
      <!-- <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="in-out"> -->
        <transition name='fade'>
        <keep-alive>
            <router-view class="animated"></router-view>
        </keep-alive>
      </transition>
       
      <tab-bar></tab-bar>  

    
        
   </div>
</template>

<script>
import tabBar from "@/components/tabbar";

export default {
  name: "index",
  components: { tabBar },
  data() {
    return {};
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/style/variable.less";
#index {
  position: relative;
  height: 100%;

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter,
  .fade-leave {
    opacity: 0;
  }
   .animated{
    -webkit-animation-duration: .1s;
    animation-duration: .1s;
    transition-timing-function: ease-in-out;
  }
}
</style>
