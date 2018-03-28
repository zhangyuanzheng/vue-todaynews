<template>
   <div id="home">
        <div class='fixed'>
          <header>
            <div class="top_bar">
                <div class="logo" ></div>
                <div class="search" @click.stop="$router.push('/search')">
                    <div class="hot_topic">{{hot_topic}}</div>
                </div>
            </div>
          </header>
          <nav-bar :sel='selected' @on-select-change='onSelectChange' :resData='news' ></nav-bar>
        </div>
        
        <div class='container' >
          <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item :id="item.id" v-for="(item,index) in news" :key='index'  >
                <load-more  :sel='selected' :type='item.id' :id ="'s'+index" :resData="news[item.id-1]"></load-more>
            </mt-tab-container-item>
          </mt-tab-container>
        </div> 

      <!-- <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight" mode="in-out"> -->
      <transition name='slide' mode="in-out">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </transition>
        
   </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import navBar from "@/components/navbar";
import loadMore from "@/components/loadmore";

export default {
  name: "home",
  components: { navBar, loadMore },
  data() {
    return {
      hot_topic: "庆祝两会顺利召开",
      selected: 1,
      isfresh: false,
      transitionName: "slide-right"
    };
  },
  created() {
    this.isfresh = true
    this.$store.dispatch('getNews')
    // this.$http.get("/api/news").then(
    //   res => {
    //     //可用post请求，this.$http.post('api/news',{'userId':123})
    //     this.resData.push(...res.data);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  },
  computed :{
    ...mapState([
      "news"
      ]),
  },
  methods: {
    ...mapActions([
      'getNews' 
      ]),
    onSelectChange(val) {
      this.selected = val;
      // console.log(this.selected)
    }
  },
  watch: {
    isfresh() {
      this.$root.Bus.$emit("selChange", "nav_index");
    },
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../../assets/style/variable.less";
#home {
  position: relative;
  header {
    width: 100%;
    background-color: @light-blue;
    padding: 10px 20px;

    .top_bar {
      display: flex;
      flex: 1;
      justify-content: space-between;
      line-height: 30px;
      height: 30px;

      .logo {
        width: 32%;
        height: 30px;
        background: url(../../../assets/images/fonts/logo.png) no-repeat 0
          center;
        background-size: contain;
      }
      .search {
        width: 62%;
        background: #fff url(../../../assets/images/fonts/搜索.png) no-repeat 2%
          center;
        background-size: contain;
        border-radius: 20px;

        .hot_topic {
          width: 76%;
          margin-left: 18%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #999;
        }
      }
    }
  }
  .container {
    width: 100%;
    padding-top: 92px;
    padding-bottom: 55px;
    height: 100vh;
    overflow-x: auto;

    // .mint-tab-container {
    //   overflow-x: auto;
    //   height: 100%;

    //   .mint-tab-container-wrap {
    //     height: 100%;
    //     overflow-x: auto;

    //     .mint-tab-container-item {
    //       height: 100%;
    //       overflow-x: auto;
    //     }
    //   }
    // }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }
  .slide-enter-active {
    opacity: 1;
  }
  .slide-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-enter,
  .slide-leave {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
}
</style>
