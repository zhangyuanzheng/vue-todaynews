<template>
   <div id="search">
    <mt-header title="搜索">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
   </div> 
</template>


<script>
export default {
  name: "search",
  data() {
    return {};
  },
  
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#search {
 width:100%;
 height:100%;
 background: #fff;
}

</style>
