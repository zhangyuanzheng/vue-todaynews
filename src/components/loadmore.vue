<template>
  <div class="loadmore">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore" :maxDistance="maxDistance" :autoFill='auto'> 
        <div class="topTips animated" :class='finish?"fadeInDown":"fadeOut"' v-if='showTips'>
            <span>为您推荐了{{length}}条新闻</span> 
            <!-- <span>没用最新的内容了</span> 
            <span>网络请求失败,请检查网络</span>  -->
        </div>
        <ul  v-infinite-scroll="loadBottom" infinite-scroll-disabled="loading" infinite-scroll-distance="10" :id='this.id'>
          <li v-for="(item,index) in newslist" :key='index' class='lists'>
            <div class='item_box' v-if="item.mode == 1"> 
                <div class="title">{{item.title}}</div>
                <div class='imgs' v-show='item.imgsrc != "" '>
                    <img v-for="(items,idx) in item.imgsrc" :key='idx' :src="items" alt="">
                </div>
                <div class='item_info'>
                  <span class="hot_label" v-show='item.ishot'>热</span>
                  <span class="source">{{item.source}}</span>
                  <span class="reader">{{item.reader}}阅读</span>
                </div>
            </div>
            <div class='item_box mode-2' v-else-if="item.mode == 2"> 
              <div class='left'>
                  <div class="title">{{item.title}}</div>
                  <div class='item_info'>
                    <span class="hot_label" v-show='item.ishot'>热</span>
                    <span class="source">{{item.source}}</span>
                    <span class="reader">{{item.reader}}阅读</span>
                  </div>
              </div>
              <div class='imgs'>
                <img :src="item.imgsrc" alt="">
              </div>
            </div>
            <div class='item_box mode-3' v-else-if="item.mode == 3"> 
                <div class="title">{{item.title}}</div>
                <div class='imgs'>
                  <img :src="item.imgsrc" alt="">
                </div>
                <div class='item_info'>
                  <span class="hot_label" v-show='item.ishot'>热</span>
                  <span class="source">{{item.source}}</span>
                  <span class="reader">{{item.reader}}阅读</span>
                </div>
            </div>
          </li>
        </ul>

        <div class='btmloading'>
          加载中...
        </div>
      </mt-loadmore>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "loadmore",
  props:["sel","type","id","resData"],
  data() {
    return {
      topStatus: "",
      maxDistance: 300,
      finish: false,
      showTips: false,
      newslist: [],
      auto: false,
      loading: false,
      length: 0
    };
  },
 
  methods: {
    ...mapGetters(["newsDetail"]),
    dataloading() {
      if (this.sel == this.type) {
        // console.log('dataloading');
        let news = this.resData.newsLists;
        this.length = news.length;
        // console.log(news);

        setTimeout(() => {
          this.newslist.unshift(...news);
          this.loading = false;
          this.finish = true;
          this.showTips = true;
          this.$refs.loadmore.onTopLoaded();
        }, 2000);
      }
    },
    handleTopChange(status) {
      // console.log(status);
      this.topStatus = status;
    },
    loadTop() {
      // console.log("loadTop");
      //console.log(this.list.unshift('aa'));
      this.dataloading();
    },
    loadBottom() {
      // console.log('loadBottom');
      this.loading = false;
      this.dataloading();
    }
  },
  mounted(){
//    console.log(this.$store.state);
  },
  watch: {
    sel(val) {
      document.getElementById(this.id).innerText=='' && this.dataloading();
    },
    finish(val) {
      if (val) {
        // (new Promise((resolve, reject)=> {
        //     setTimeout(()=>{
        //       this.finish = false;
        //       resolve(this.finish);
        //     }, 1500);
        //   }))
        // .then((data)=>{
        //   console.log("this.finish:"+data);
        // })
        setTimeout(() => {
          this.finish = false;
        }, 1500);
      } else {
        setTimeout(() => {
          this.showTips = false;
        }, 1500);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/style/variable.less";
.loadmore {
  .topTips {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 32px;
    line-height: 34px;
    font-size: 14px;
    color: #2a90d7;
    background: rgba(213, 233, 247, 0.9);
    text-align: center;
  }

  li.lists {
    margin: 0 20px;
    border-bottom: 1px solid #dddddd99;

    div.item_box {
      color: #222;
      font-size: 16px;
      padding: 15px 0;

      div.title {
        margin-bottom: 6px;
      }

      div.imgs {
        text-align: justify;
        margin: 6px auto;
        line-height: 22px;
        img {
          width: 32%;
        }
        img:nth-child(2) {
          margin: 0 1%;
        }
      }
      div.item_info {
        color: #999;
        font-size: 12px;
        line-height: 15px;
        span {
          display: inline-block;
          margin-right: 5px;
        }
        span.hot_label {
          background: @light-blue;
          padding: 0 2px;
          color: #fff;
          border-radius: 4px;
          width: 15px;
          text-align: center;
        }
      }
    }

    div.item_box.mode-2 {
      div.left {
        display: inline-block;
        vertical-align: middle;
        width: 65%;

        div.title {
          padding-right: 5px;
        }
      }

      div.imgs {
        margin: 0;
        overflow: hidden;
        width: 33%;
        display: inline-block;
        vertical-align: middle;
        img {
          width: 100%;
        }
      }
    }

    div.item_box.mode-3 {
      div.imgs {
        img {
          width: 100%;
        }
      }
    }
  }

  .btmloading {
    text-align: center;
    margin: 10px auto;
  }
}
</style>
