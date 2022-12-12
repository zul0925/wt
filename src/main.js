/*
 * @Author: zul zul0925@qq.com
 * @Date: 2022-12-05 14:32:56
 * @LastEditors: zul zul0925@qq.com
 * @LastEditTime: 2022-12-12 14:27:32
 * @FilePath: \wt\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('vue2-animate/dist/vue2-animate.min.css')
// import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
