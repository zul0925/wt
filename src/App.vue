<!--
 * @Author: zul zul0925@qq.com
 * @Date: 2022-12-05 14:32:56
 * @LastEditors: zul zul0925@qq.com
 * @LastEditTime: 2022-12-07 17:26:39
 * @FilePath: \wt\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div class="bg">
    </div>
    <div v-if="false" class="main">
      <div class="target-days">
        XXXX：
      </div>
      <!-- <div class="start-tex">Our Story Began In "2022-09-11 21:24:00"</div> -->
      <div class="count-down">
        <div class="count-down-block">{{days}} <span>DAYS</span> </div>
        <div class="colon">:</div>
        <div class="count-down-block">{{hours}} <span>HOURS</span> </div>
        <div class="colon">:</div>
        <div class="count-down-block">{{minutes}} <span>MINUTES</span> </div>
        <div class="colon">:</div>
        <div class="count-down-block">{{seconds}} <span>SECONDS</span> </div>
      </div>
      <div class="count-down inverted">
        <div class="count-down-block">{{days}} <span>DAYS</span> </div>
        <div class="colon">:</div>
        <div class="count-down-block">{{hours}} <span>HOURS</span> </div>
        <div class="colon">:</div>
        <div class="count-down-block">{{minutes}} <span>MINUTES</span> </div>
        <div class="colon">:</div>
        <div class="count-down-block">{{seconds}} <span>SECONDS</span> </div>
      </div>
    </div>
    <div class="phone">
      <div class="phone-screen">
        <div class="phone-header">
          <div class="header-time">
            16:29
          </div>
          <div class="header-black"></div>
          <div class="header-right">
            <i class="iconfont signal">&#xe956;</i>
            <i class="iconfont wifi">&#xe76c;</i>
            <i class="iconfont battery">&#xe638;</i>
          </div>
        </div>
        <div class="wechat">
          <div class="wechat-top">
            <div class="wechat-back"><i class="iconfont">&#xe710;</i></div>
            <div class="wechat-name">储文婷</div>
            <div class="wechat-more"><i class="iconfont">&#xe61f;</i></div>
          </div>
          <div class="wechat-content">
            <div class="msg-sys">8月27日 11:07</div>
            <div class="msg-r">
              <div class="msg-r-content">祖磊</div>
              <div class="msg-r-avatar"></div>
            </div>
            <div class="msg-sys">以上是打招呼的内容</div>
            <div class="msg-sys">8月27日 16:57</div>
            <div class="msg-l">
              <div class="msg-l-avatar"></div>
              <div class="msg-l-content">我通过了你的朋友验证请求，现在我们可以开始聊天了</div>
            </div>
            <div class="msg-l">
              <div class="msg-l-avatar"></div>
              <div class="msg-l-content">你好，网易安徽储文婷~</div>
            </div>
          </div>
          <div class="wechat-bottom">
            <div class="wechat-voice"><i class="iconfont">&#xe888;</i></div>
            <div class="wechat-input"></div>
            <div class="wechat-emoji"><i class="iconfont">&#xe60b;</i></div>
            <div class="wechat-add"><i class="iconfont">&#xe726;</i></div>
            <div class="wechat-safe-line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      interval:null,
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
      // day100:
    }
  },
  methods:{
    initCountDown(){
      // let date = new Date("2022-12-19 00:00:00")
      let dateStart = new Date("2022-09-11 21:00:00").getTime()
      let dateTarget = new Date(-(-dateStart) + 100*24*60*60*1000).getTime()
      let dateNow = new Date().getTime()
      this.days = Math.floor((dateTarget - dateNow)/86400000)
      this.hours = Math.floor(((dateTarget - dateNow)%86400000)/3600000)
      this.minutes = Math.floor((((dateTarget - dateNow)%86400000)%3600000)/60000)
      this.seconds = Math.floor(((((dateTarget - dateNow)%86400000)%3600000)%60000)/1000)
    }
  },
  created(){
    this.initCountDown()
    this.interval = setInterval(()=>{
      this.initCountDown()
    },1000)
  },
  beforeDestroy(){
    clearInterval(this.interval)
  }
}
</script>
<style lang="scss">

#app{
    background-image: url("./assets/texture.png");
    background-color: rgb(246, 206, 193);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .phone{
      width: 434px;
      height: 916px;
      background-color: #000;
      position: relative;
      border-radius: 50px;
      z-index: 1;
      .phone-screen{
        width: 414px;
        height: 896px;
        background-color: rgb(245,245,245);
        margin: 10px;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        .wechat{
          flex: auto;
          display: flex;
          flex-direction: column;
          .wechat-top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:10px;
            border-bottom: .5px solid #E7E7E7;
            i{
              font-size: 20px;
            }
          }
          .wechat-content{
            padding: 10px;
            flex: auto;
            .msg-sys{
              font-size: 12px;
              margin: 10px 0;
              color: #888;
              text-align: center;
            }
            .msg-l{
              display: flex;
              margin: 10px 0;
              .msg-l-avatar{
                width: 40px;
                height: 40px;
                border: 1px solid #888;
                margin-right:12px;
                background-color: #ddd;
              }
              .msg-l-content{
                min-height: 40px;
                max-width: 280px;
                background-color: #fff;
                border-radius: 4px;
                padding: 10px 12px;
                position: relative;
                &::after{
                  position: absolute;
                  left: -16px;
                  top: 12px;
                  content: "";
                  border-top: 8px solid transparent;
                  border-right: 8px solid #fff;
                  border-left: 8px solid transparent;
                  border-bottom: 8px solid transparent;
                }
              }
            }
            .msg-r{
              margin: 10px 0;
              display: flex;
              justify-content: flex-end;
              .msg-r-avatar{
                width: 40px;
                height: 40px;
                border: 1px solid #888;
                background-color: #ddd;
                margin-left:12px;
              }
              .msg-r-content{
                min-height: 40px;
                max-width: 280px;
                background-color: #89D961;
                border-radius: 4px;
                padding: 10px 12px;
                position: relative;
                &::after{
                  position: absolute;
                  right: -16px;
                  top: 12px;
                  content: "";
                  border-top: 8px solid transparent;
                  border-right: 8px solid transparent;
                  border-left: 8px solid #89D961;
                  border-bottom: 8px solid transparent;
                }
              }
            }
          }
          .wechat-bottom{
            position: relative;
            height: 80px;
            display: flex;
            padding-top: 10px;
            border-top: .5px solid #E7E7E7;
            .wechat-input{
              height: 40px;
              width: 300px;
              background:#fff;
              border-radius: 8px;
            }
            .wechat-voice,.wechat-emoji,.wechat-add{
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              i{
                font-size: 24px;
              }
            }
            .wechat-safe-line{
              width: 200px;
              height: 4px;
              border-radius: 2px;
              position: absolute;
              bottom: 10px;
              left: 107px;
              background-color: #000;
            }
          }
        }
        .phone-header{
          display: flex;
          align-items: baseline;
          .header-time,.header-right{
            width: 107px;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          .header-time{
            font-size: 18px;
            font-weight: 600;
            padding-left: 10px;
          }
          .header-right{
            .battery{
              font-size: 28px;
            }
            .wifi{
              font-size: 20px;
            }
            .signal{
              font-size: 20px;
            }
            padding-right: 20px;
          }
          .header-black{
            width: 200px;
            height: 30px;
            border-radius:  0 0 20px 20px;
            background-color: #000;
          }
        }
      }
    }
    .main{
      position: relative;
      padding-top: 20%;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .count-down{
        display: flex;
        font-size: 44px;
        .count-down-block{
          margin:0 8px;
          color: rgb(235, 80, 126);
          display: flex;
          flex-direction: column;
          align-items: center;
          // width: 80px;
          height: 80px;
          border-radius: 10px;
          flex: auto;
          span{
            font-size: 16px;
          }
        }
        .colon{
          color: rgb(231, 124, 142);
        }
        &.inverted{
          .count-down-block{
            transform: rotateX(180deg);
            color: transparent;
            text-shadow: 0 0 12px rgb(235, 80, 126);
          }
          .colon{
            color:transparent;
            transform: rotateX(180deg);
            text-shadow: 0 0 12px rgb(231, 124, 142);
          }
        }
      }
      .target-days{
        font-size: 40px;
        color: white;
        text-align: center;
      }
    }
    .bg{
        background-image: url("./assets/peach-bg.png");
        background-size: contain;
        width: 100%;
        opacity: .2;
        flex: auto;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 3814268 */
  src: url('//at.alicdn.com/t/c/font_3814268_pb9lz3g3f4r.woff2?t=1670402684314') format('woff2'),
       url('//at.alicdn.com/t/c/font_3814268_pb9lz3g3f4r.woff?t=1670402684314') format('woff'),
       url('//at.alicdn.com/t/c/font_3814268_pb9lz3g3f4r.ttf?t=1670402684314') format('truetype');
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
