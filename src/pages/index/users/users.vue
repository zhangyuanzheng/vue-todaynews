<template>
   <div id="users">
    <mt-header title="用户">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
   </div> 
</template>


<script>
export default {
  name: "users",
  data() {
    return {
       isfresh:false,
    };
  },
   created() {
      this.isfresh = true;
  },
  watch:{
    isfresh(){
      this.$root.Bus.$emit("selChange", "nav_user");
    }
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#users {
 width:100%;
 height:100%;
 background: #fff;
}

</style>
