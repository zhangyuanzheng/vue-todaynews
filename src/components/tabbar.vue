<template>
   <div id="tabbar">
      <mt-tabbar v-model="selected" fixed>  
        <mt-tab-item :id="item.id" v-for="(item, index) in tabbarList" :key="index">  
          <img slot="icon" :src=' selected == item.id ? item.actSrc : item.src'>  
          {{item.name}}  
        </mt-tab-item>  
    </mt-tabbar>  
   </div> 
</template>


<script>


export default {  
  name: 'tabBar',  
  data() {  
    return {  
      selected: 'nav_index',
      tabbarList:[
        {
          id:'nav_index',
          name:'首页', 
          src:require('../assets/images/fonts/首页.png'), 
          actSrc:require('../assets/images/fonts/首页-1.png'), 
        },
        {
          id:'nav_video',
          name:'视频', 
          src:require('../assets/images/fonts/视频.png'), 
          actSrc:require('../assets/images/fonts/视频-1.png'), 
        },
        {
          id:'nav_collection',
          name:'收藏', 
          src:require('../assets/images/fonts/收藏.png'), 
          actSrc:require('../assets/images/fonts/收藏-1.png'), 
        },
        {
          id:'nav_user',
          name:'我的', 
          src:require('../assets/images/fonts/我的.png'), 
          actSrc:require('../assets/images/fonts/我的-1.png'), 
        }
       ]
    };  
  }  
};  
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 #tabbar{
   .mint-tabbar > .mint-tab-item.is-selected{
     background:none;
   }
   .mint-tabbar.is-fixed{
     z-index: 10000;
   }
 }
</style>
