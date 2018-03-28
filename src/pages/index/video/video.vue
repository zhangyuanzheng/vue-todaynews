<template>
   <div id="video">
    <mt-header title="视频">
        
    </mt-header>
   </div> 
</template>


<script>
export default {
  name: "video",
  data() {
    return {
       isfresh: false
    };
  },
  created(){
    this.isfresh = true;
  },
  watch: {
    isfresh() {
      this.$root.Bus.$emit("selChange", "nav_video");
    }
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#video {
 width:100%;
 height:100%;
 background: #fff;

}

</style>
