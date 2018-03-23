<template>
  <div id="navbar" >
    <mt-navbar v-model="mysel">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">视频</mt-tab-item>
        <mt-tab-item id="3">热点</mt-tab-item>
        <mt-tab-item id="4">社会</mt-tab-item>
        <mt-tab-item id="5">娱乐</mt-tab-item>
        <mt-tab-item id="6">军事</mt-tab-item>
        <mt-tab-item id="7">科技</mt-tab-item>
    </mt-navbar>
    <div class='moreBtn'>
      <i> <img src='../assets/images/fonts/shadow.png' />  </i> 
      
    </div> 
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props:['sel'],
  data(){
    return{
      mysel:this.sel
    }
  },
  watch:{
    sel(val){
        this.mysel = val;
        console.log(val)
    },
    mysel(val){
        this.$emit("on-select-change",val);//③组件内对myResult变更后向外部发送事件通知
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #navbar{
    position: relative;
    overflow: hidden;

    ::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: -webkit-linear-gradient(top, transparent, transparent 40%, #ddd 40%);
      background-size: 100% 1px;
      background-position: bottom;
      background-repeat: no-repeat;
    }

    .mint-navbar::-webkit-scrollbar{
        display: none;
        width: 0;
        height: 0;
    }

    .mint-navbar{
      background: #f4f5f6;
      margin-right: 46px;
      overflow-x: auto;


      .mint-tab-item{
        padding: 14px 10px;
        white-space: nowrap;
      
        .mint-tab-item-label{
          font-size:15px;
        }
      }

      }
    }

    .moreBtn{
      position: absolute;
      right:0;
      top:0;
      width:46px;
      height:44px;
      background: #f4f5f6 url('../assets/images/fonts/加号.png') no-repeat center center;
      background-size: 75%;

      img{
        width: 9px;
        margin-left:-9px;
      }

     

    }
</style>
