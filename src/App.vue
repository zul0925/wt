<!--
 * @Author: zul zul0925@qq.com
 * @Date: 2022-12-05 14:32:56
 * @LastEditors: zul zul0925@qq.com
 * @LastEditTime: 2022-12-05 14:44:35
 * @FilePath: \wt\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div class="bg"></div>
  </div>
</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
#app{
    background-image: url("./assets/texture.png");
    background-color: rgb(246, 206, 193);
    width: 100%;
    height: 100vh;
    display: flex;
    .bg{
        background-image: url("./assets/peach-bg.png");
        background-size: contain;
        width: 100%;
        opacity: .2;
        flex: auto;
    }
}
</style>
