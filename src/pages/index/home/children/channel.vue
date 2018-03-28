<template>
   <div id="channel">
    <mt-header title="频道管理">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
   </div> 
</template>


<script>
export default {
  name: "channel",
  data() {
    return {};
  },
  
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#channel {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
 
</style>
