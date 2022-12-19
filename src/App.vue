<!--
 * @Author: zul zul0925@qq.com
 * @Date: 2022-12-05 14:32:56
 * @LastEditors: zul zul0925@qq.com
 * @LastEditTime: 2022-12-19 08:25:52
 * @FilePath: \wt\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div class="bg"></div>
    <audio ref="audioMusic" loop src="./assets/audio/music.mp4"></audio>
    <transition name="fade">
      <div v-if="animationList[0]" class="main">
        <div class="target-days">{{animationEnd?"我们的故事还在继续~":""}}</div>
        <div class="count-down">
          <div class="count-down-block">
            {{days}}
            <span>DAYS</span>
          </div>
          <div class="colon">:</div>
          <div class="count-down-block">
            {{hours}}
            <span>HOURS</span>
          </div>
          <div class="colon">:</div>
          <div class="count-down-block">
            {{minutes}}
            <span>MINUTES</span>
          </div>
          <div class="colon">:</div>
          <div class="count-down-block">
            {{seconds}}
            <span>SECONDS</span>
          </div>
        </div>
        <div class="count-down inverted">
          <div class="count-down-block">
            {{days}}
            <span>DAYS</span>
          </div>
          <div class="colon">:</div>
          <div class="count-down-block">
            {{hours}}
            <span>HOURS</span>
          </div>
          <div class="colon">:</div>
          <div class="count-down-block">
            {{minutes}}
            <span>MINUTES</span>
          </div>
          <div class="colon">:</div>
          <div class="count-down-block">
            {{seconds}}
            <span>SECONDS</span>
          </div>
        </div>
        <div v-if="timesup" @click="startAnimation(true)" class="replay">
          <img src="./assets/peach.png" alt=""/>
        </div>
      </div>
    </transition>
    <!-- 手机 -->
    <transition name="fade">
      <div v-if="animationList[1]" class="phone">
        <div class="phone-screen">
          
    
          <div class="phone-header">
            <div class="header-time">21:24</div>
            <div class="header-black"></div>
            <div class="header-right">
              <i class="iconfont signal">&#xe956;</i>
              <i class="iconfont wifi">&#xe76c;</i>
              <i class="iconfont battery">&#xe638;</i>
            </div>
          </div>
          <transition name="fade">
            <div v-if="showWechat" class="wechat">
              <div class="wechat-top">
                <div class="wechat-back">
                  <i class="iconfont">&#xe710;</i>
                </div>
                <div class="wechat-name">储文婷</div>
                <div class="wechat-more">
                  <i class="iconfont">&#xe61f;</i>
                </div>
              </div>
              <div class="wechat-content">
                <div v-for="(item,index) in msgList" :key="item+index">
                  <transition :name="item.animation">
                    <div
                      v-if="item.type === 'sys' && animationList[item.animationIndex]"
                      class="msg-sys"
                    >{{item.content}}</div>
                    <div v-if="item.type === 'right' && animationList[item.animationIndex]" class="msg-r">
                      <div class="msg-r-content">{{item.content}}</div>
                      <div class="msg-r-avatar"></div>
                    </div>
                    <div v-if="item.type === 'left' && animationList[item.animationIndex]" class="msg-l">
                      <div class="msg-l-avatar"></div>
                      <div class="msg-l-content">{{item.content}}</div>
                    </div>
                    <!-- 旁白 -->
                    <div class="wechat-mask" v-if="item.type === 'white' && animationList[item.animationIndex]">{{item.content}}</div>
                  </transition>
                </div>
              </div>
              <div class="wechat-bottom">
                <div class="wechat-voice">
                  <i class="iconfont">&#xe888;</i>
                </div>
                <div class="wechat-input"></div>
                <div class="wechat-emoji">
                  <i class="iconfont">&#xe60b;</i>
                </div>
                <div class="wechat-add">
                  <i class="iconfont">&#xe726;</i>
                </div>
                <div class="wechat-safe-line"></div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="showImg" class="wechat-img"></div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: null,
      intervalContinue:null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      animationList: [true],
      msgList: [
        {
          avatar: "",
          type: "sys",
          animation: "fade",
          content: "8月27日 11:07",
          animationIndex: 2,
          msgIndex:0,
        },
        {
          avatar: "",
          type: "right",
          animation: "fadeRight",
          content: "祖磊",
          animationIndex: 2,
          msgIndex:1,
        },
        {
          avatar: "",
          type: "sys",
          animation: "fade",
          content: "以上是打招呼的内容",
          animationIndex: 2,
          msgIndex:2,
        },
        {
          avatar: "",
          type: "sys",
          animation: "fade",
          content: "8月27日 16:57",
          animationIndex: 3,
          msgIndex:3,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "我通过了你的朋友验证请求，现在我们可以开始聊天了",
          animationIndex: 3,
          msgIndex:4,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "你好，网易安徽储文婷~",
          animationIndex: 4,
          msgIndex:5,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我们的故事就从这里开始了",
          animationIndex: 5,
          msgIndex:6,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "经过一小段时间了解，我觉得。。。",
          animationIndex: 6,
          msgIndex:7,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我想见你",
          animationIndex: 7,
          msgIndex:8,
        },
        {
          avatar: "",
          type: "sys",
          animation: "fade",
          content: "8月31日 09:32",
          animationIndex: 8,
          msgIndex:9,
        },
        {
          avatar: "",
          type: "right",
          animation: "fadeRight",
          content: "你这周六有空叭",
          animationIndex: 8,
          msgIndex:10,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "暂时没事呀",
          animationIndex: 9,
          msgIndex:11,
        },
        {
          avatar: "",
          type: "right",
          animation: "fadeRight",
          content: "那就暂定周六出来逛逛？",
          animationIndex: 10,
          msgIndex:12,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "嗯嗯 可以",
          animationIndex: 11,
          msgIndex:13,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "然后我就见到了你",
          animationIndex: 12,
          msgIndex:14,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "一个可可爱爱的小女生",
          animationIndex: 13,
          msgIndex:15,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我们一起去吃饭，看电影，看脱口秀",
          animationIndex: 14,
          msgIndex:16,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "晚上两个人沿着滨湖兜着风聊着天",
          animationIndex: 15,
          msgIndex:17,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "不知不觉从滨湖驱车到了巢湖",
          animationIndex: 16,
          msgIndex:18,
        },
        {
          avatar: "",
          type: "right",
          animation: "fadeRight",
          content: "今天感觉咋样 玩的还开心不",
          animationIndex: 17,
          msgIndex:19,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "开心啊",
          animationIndex: 18,
          msgIndex:20,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "散掉一周的所有不开心",
          animationIndex: 19,
          msgIndex:21,
        },
        {
          avatar: "",
          type: "right",
          animation: "fadeRight",
          content: "我感觉兜风挺有意思的",
          animationIndex: 20,
          msgIndex:22,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "就很放松呀 而且今天脱口秀也有意外的收获！是完美的周六了~",
          animationIndex: 21,
          msgIndex:23,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我感觉你应该不讨厌我",
          animationIndex: 22,
          msgIndex:24,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我还想再见你",
          animationIndex: 23,
          msgIndex:25,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "于是第二天",
          animationIndex: 24,
          msgIndex:26,
        },
        {
          avatar: "",
          type: "sys",
          animation: "fade",
          content: "9月4日 12:13",
          animationIndex: 25,
          msgIndex:27,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "唔 先吃个午饭 下午把车送去洗一下 然后也没啥事了",
          animationIndex: 25,
          msgIndex:28,
        },
        {
          avatar: "",
          type: "right",
          animation: "fadeRight",
          content: "那要不要再出来逛逛",
          animationIndex: 26,
          msgIndex:29,
        },
        {
          avatar: "",
          type: "left",
          animation: "fadeLeft",
          content: "可以啊 不过要迟一点点呐",
          animationIndex: 27,
          msgIndex:30,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我觉得我应该是恋爱了",
          animationIndex: 28,
          msgIndex:31,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我开始“处心积虑”",
          animationIndex: 29,
          msgIndex:32,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "订餐厅，订花，安排行程，布置场景，用上了所有我能想到的，在心里预演告白的场景，等待那一天的到来",
          animationIndex: 30,
          msgIndex:33,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "2022.9.11，中秋节的第二天，也是月亮最圆的日子",
          animationIndex: 31,
          msgIndex:34,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "背对着满月，面对着你，捧着花的手微微颤抖，诉说着我的心意",
          animationIndex: 32,
          msgIndex:35,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "幸运的是，你回应了我的感情，用幸福和喜悦驱散了我的不安",
          animationIndex: 33,
          msgIndex:36,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "就这样，我们在一起了",
          animationIndex: 34,
          msgIndex:37,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "之后便是一些幸福的日常",
          animationIndex: 35,
          msgIndex:38,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我带你去了外婆家，就像歌里唱的那样",
          animationIndex: 36,
          msgIndex:39,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我们一起看日出日落，看花海",
          animationIndex: 37,
          msgIndex:40,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "我们一起去了杭州、漫步西湖、漫步南浔古镇",
          animationIndex: 38,
          msgIndex:41,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "重要的不是风景，是陪你看风景的人",
          animationIndex: 39,
          msgIndex:42,
        },
        {
          avatar: "",
          type: "white",
          animation: "fadeUp",
          content: "未来还长，我们的故事还在继续",
          animationIndex: 40,
          msgIndex:43,
        },
      ],
      showImg: false,
      showWechat:true,
      animationEnd:false,
      played:false,
      timesup:false
    };
  },
  methods: {
    play(){
      if(this.played) return
      this.played = true
      this.$refs.audioMusic.load()
      this.$refs.audioMusic.play()
    },
    /**
     * @description: 动画流程
     * @return {*}
     */    
    async startAnimation() {
      if(!this.timesup) return
      this.play()
      await this.animationHandler(0, 2,false);
      await this.animationHandler(1, 2); //手机
      await this.animationHandler(2, 2);
      await this.animationHandler(3, 2);
      await this.animationHandler(4, 2);
      await this.animationHandler([ 2, 3, 4], 2, false);
      await this.animationHandler(5,2)
      await this.animationHandler(5,2,false)
      await this.animationHandler(6,2)
      await this.animationHandler(6,2,false)
      await this.animationHandler(7,2)
      await this.animationHandler(7,2,false)
      await this.animationHandler(8,2)
      await this.animationHandler(9,2)
      await this.animationHandler(10,2)
      await this.animationHandler(11,2)
      await this.animationHandler([ 8, 9, 10,11], 2, false);
      await this.animationHandler(12,2)
      await this.animationHandler(12,2,false)
      await this.animationHandler(13,2)
      await this.animationHandler(13,2,false)
      await this.animationHandler(14,2)
      await this.animationHandler(14,2,false)
      await this.animationHandler(15,2)
      await this.animationHandler(15,2,false)
      await this.animationHandler(16,2)
      await this.animationHandler(16,2,false)
      await this.animationHandler(17,2)
      await this.animationHandler(18,2)
      await this.animationHandler(19,2)
      await this.animationHandler(20,2)
      await this.animationHandler(21,2)
      await this.animationHandler([17,18,19,20,21],2,false)
      await this.animationHandler(22,2)
      await this.animationHandler(22,2,false)
      await this.animationHandler(23,2)
      await this.animationHandler(23,2,false)
      await this.animationHandler(24,2)
      await this.animationHandler(24,2,false)
      await this.animationHandler(25,2)
      await this.animationHandler(26,2)
      await this.animationHandler(27,2)
      await this.animationHandler([25,26,27],2,false)
      await this.animationHandler(28,2)
      await this.animationHandler(28,2,false)
      await this.animationHandler(29,2)
      await this.animationHandler(29,2,false)
      await this.animationHandler(30,2)
      await this.animationHandler(30,5,false)
      await this.animationHandler(31,2)
      await this.animationHandler(31,5,false)
      await this.animationHandler(32,2)
      await this.animationHandler(32,5,false)
      await this.animationHandler(33,2)
      await this.animationHandler(33,4,false)
      await this.animationHandler(34,2)
      await this.animationHandler(34,3,false)
      await this.animationHandler(35,2)
      await this.animationHandler(35,3,false)
      await this.animationHandler(36,2)
      await this.animationHandler(36,3,false)
      await this.animationHandler(37,2)
      await this.animationHandler(37,3,false)
      await this.animationHandler(38,2)
      await this.animationHandler(38,3,false)
      await this.animationHandler(39,2)
      await this.animationHandler(39,3,false)
      await this.animationHandler(40,2)
      await this.animationHandler(40,5,false)
      await this.animationHandler(1,1,false)
      await this.animationHandler(0, 1,true);
      clearInterval(this.interval);
      this.animationEnd = true
      this.intervalContinue = setInterval(() => {
        this.initContinue()
      }, 1000);


    },
    /**
     * @description: 动画控制
     * @param {Array|Number} animationIndex - 需要操作的事件的下标
     * @param {Number} sec - 延迟的秒数（秒）
     * @param {Boolean} flag - 显示or消失
     * @return {*}
     */

    animationHandler(animationIndex = [], sec = 2, flag = true) {
      return new Promise(resolve => {
        setTimeout(() => {
          if (Array.isArray(animationIndex)) {
            animationIndex.forEach(item => {
              let count = item - this.animationList.length + 1
              if(count > 0){
                let countArray = new Array(count).fill(false)
                this.animationList = this.animationList.concat(countArray)
                this.animationList.splice(item, 1, flag);
              }else{
                this.animationList.splice(item, 1, flag);
              }
            });
          } else {
            let count = animationIndex - this.animationList.length + 1
            if(count > 0){
              let countArray = new Array(count).fill(false)
              this.animationList = this.animationList.concat(countArray)
              this.animationList.splice(animationIndex, 1, flag);
            }else{
              this.animationList.splice(animationIndex, 1, flag);
            }
          }
          resolve();
        }, sec * 1000);
      });
    },
    /**
     * @description: 延迟
     * @param {Number} sec - 延迟的秒数（秒）
     * @return {*}
     */
    sleep(sec){
      return new Promise(resolve=>{
        setTimeout(() => {
          resolve()
        }, sec*1000);
      })
    },  
    /**
     * @description:开始倒计时
     * @return {*}
     */

    initCountDown() {
      // let date = new Date("2022-12-19 00:00:00")
      let dateStart = new Date("2022-09-11 21:24:00").getTime();
      let dateTarget = new Date(
        -(-dateStart) + 99 * 24 * 60 * 60 * 1000
      ).getTime();
      let dateNow = new Date().getTime();
      if((dateTarget - dateNow)< 0){
        this.timesup = true
        return
      }
      this.days = Math.floor((dateTarget - dateNow) / 86400000);
      this.hours = Math.floor(((dateTarget - dateNow) % 86400000) / 3600000);
      this.minutes = Math.floor(
        (((dateTarget - dateNow) % 86400000) % 3600000) / 60000
      );
      this.seconds = Math.floor(
        ((((dateTarget - dateNow) % 86400000) % 3600000) % 60000) / 1000
      );
      if(this.days == 0 && this.hours ==0 && this.minutes ==0 && this.seconds ==0){
        clearInterval(this.interval)
        this.startAnimation();
      }
    },
    initContinue(){
      let dateStart = new Date("2022-09-11 21:24:00").getTime();
      let dateNow = new Date().getTime();
      this.days = Math.floor((dateNow - dateStart) / 86400000);
      this.hours = Math.floor(((dateNow - dateStart) % 86400000) / 3600000);
      this.minutes = Math.floor(
        (((dateNow - dateStart) % 86400000) % 3600000) / 60000
      );
      this.seconds = Math.floor(
        ((((dateNow - dateStart) % 86400000) % 3600000) % 60000) / 1000
      );
    }
  },
  async created() {
    this.initCountDown();
    this.interval = setInterval(() => {
      this.initCountDown();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    clearInterval(this.initContinue)
  }
};
</script>
<style lang="scss">
@keyframes fadenum{
   100%{transform:rotate(360deg);}
}
#app {
  background-image: url("./assets/texture.png");
  background-color: rgb(246, 206, 193);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .phone {
    overflow: hidden;
    width: 434px;
    height: calc(100vh - 20px);
    background-color: #000;
    position: relative;
    border-radius: 50px;
    z-index: 1;
    .phone-screen {
      width: 414px;
      height: calc(100vh - 40px);
      background-color: rgb(245, 245, 245);
      margin: 10px;
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .wechat {
        flex: auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: rgb(245, 245, 245);
        .wechat-mask{
          margin: 60% auto 0;
          text-align: center;
          font-weight: 600;
          font-size: 20px;
        }
        .wechat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          border-bottom: 0.5px solid #e7e7e7;
          i {
            font-size: 20px;
          }
        }
        .wechat-content {
          padding: 10px;
          flex: auto;
          overflow-y: auto;
          scroll-behavior: smooth;
          &::-webkit-scrollbar {
            display: none; /* Chrome Safari */
          }
          .msg-sys {
            font-size: 12px;
            margin: 10px 0;
            color: #888;
            text-align: center;
          }
          .msg-l {
            display: flex;
            margin: 10px 0;
            .msg-l-avatar {
              width: 40px;
              height: 40px;
              border: 1px solid #888;
              margin-right: 12px;
              background-color: #ddd;
            }
            .msg-l-content {
              min-height: 40px;
              max-width: 280px;
              background-color: #fff;
              border-radius: 4px;
              padding: 10px 12px;
              position: relative;
              &::after {
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
          .msg-r {
            margin: 10px 0;
            display: flex;
            justify-content: flex-end;
            .msg-r-avatar {
              width: 40px;
              height: 40px;
              border: 1px solid #888;
              background-color: #ddd;
              margin-left: 12px;
            }
            .msg-r-content {
              min-height: 40px;
              max-width: 280px;
              background-color: #89d961;
              border-radius: 4px;
              padding: 10px 12px;
              position: relative;
              &::after {
                position: absolute;
                right: -16px;
                top: 12px;
                content: "";
                border-top: 8px solid transparent;
                border-right: 8px solid transparent;
                border-left: 8px solid #89d961;
                border-bottom: 8px solid transparent;
              }
            }
          }
        }
        .wechat-bottom {
          position: relative;
          height: 80px;
          display: flex;
          padding-top: 10px;
          border-top: 0.5px solid #e7e7e7;
          .wechat-input {
            height: 40px;
            width: 300px;
            background: #fff;
            border-radius: 8px;
          }
          .wechat-voice,
          .wechat-emoji,
          .wechat-add {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
              font-size: 24px;
            }
          }
          .wechat-safe-line {
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
      .wechat-img{
        flex: auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: rgba(20, 20, 20,.6);
      }
      .phone-header {
        display: flex;
        align-items: baseline;
        .header-time,
        .header-right {
          width: 107px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .header-time {
          font-size: 18px;
          font-weight: 600;
          padding-left: 10px;
        }
        .header-right {
          .battery {
            font-size: 28px;
          }
          .wifi {
            font-size: 20px;
          }
          .signal {
            font-size: 20px;
          }
          padding-right: 20px;
        }
        .header-black {
          width: 200px;
          height: 30px;
          border-radius: 0 0 20px 20px;
          background-color: #000;
        }
      }
    }
  }
  .main {
    position: relative;
    padding-top: 15%;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .replay{
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      background: rgba($color: #000000, $alpha: .3);
      animation: fadenum 3s infinite linear;
      cursor: pointer;
      img{
        width: 60px;
      }
    }
    .count-down {
      display: flex;
      font-size: 44px;
      .count-down-block {
        margin: 0 8px;
        color: rgb(235, 80, 126);
        display: flex;
        flex-direction: column;
        align-items: center;
        // width: 80px;
        height: 80px;
        border-radius: 10px;
        flex: auto;
        span {
          font-size: 16px;
        }
      }
      .colon {
        color: rgb(231, 124, 142);
      }
      &.inverted {
        .count-down-block {
          transform: rotateX(180deg);
          color: transparent;
          text-shadow: 0 0 12px rgb(235, 80, 126);
        }
        .colon {
          color: transparent;
          transform: rotateX(180deg);
          text-shadow: 0 0 12px rgb(231, 124, 142);
        }
      }
    }
    .target-days {
      font-size: 30px;
      color: rgb(235, 80, 126);
      text-align: center;
      width: 100%;
      height: 52px;
      margin-bottom: 20px;
    }
  }
  .bg {
    background-image: url("./assets/peach-bg.png");
    background-size: contain;
    width: 100%;
    opacity: 0.2;
    flex: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 3814268 */
  src: url("//at.alicdn.com/t/c/font_3814268_pb9lz3g3f4r.woff2?t=1670402684314")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3814268_pb9lz3g3f4r.woff?t=1670402684314")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3814268_pb9lz3g3f4r.ttf?t=1670402684314")
      format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
