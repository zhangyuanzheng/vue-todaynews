<template>
   <div id="collect">
    <mt-header title="收藏">
        <div slot="right">
            <mt-button icon="more"></mt-button>
        </div>
    </mt-header>
   </div> 
</template>


<script>
export default {
  name: "collect",
  data() {
    return {
      isfresh: false
    };
  },
  created() {
    this.isfresh = true;
  },
  watch: {
    isfresh() {
      this.$root.Bus.$emit("selChange", "nav_collection");
    }
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#collect {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
