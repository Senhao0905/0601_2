<script>
export default {
   data() {
      return {
         point: 0,
         money: 0,
         
      }
   },
   methods: {
      clickCookie() {
         this.point += 1;

      }
   },
   // 只要監控的變數有更動 方法就會執行一次
   watch: {
      point() {
         this.money = this.point * 10;
      }
   },
   // 會產生一個專門拿來渲染的變數 純粹顯示用
   computed: {
      // 一個(顯示用)的變數
      usd(){
         // return 是他的變數
         return (this.money / 30.7).toFixed(2);

      }
   },
}
</script>

<template>
   <h2>watch & computed</h2>
   <span>分數 : {{ point }}</span>
   <span>金錢(NT) : {{ money }}</span>
   <span>美金(USD) : {{ usd }}</span>

   <div class="cookie" v-on:click="clickCookie">
      <div class="choco choco1"></div>
      <div class="choco choco2"></div>
      <div class="choco choco3"></div>
   </div>
</template>

<style lang="scss" scoped>
.cookie {
   width: 100px;
   height: 100px;
   background-color: #9f8c6f;
   border-radius: 50px;
   position: relative;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      scale: 1.05;
   }

   .choco {
      width: 10px;
      height: 10px;
      background-color: #3c2e2a;
      border-radius: 5px;
      position: absolute;

   }

   .choco1 {
      top: 20px;
      left: 30px;
   }

   .choco2 {
      top: 40px;
      left: 50px;
   }

   .choco3 {
      top: 60px;
      left: 80px;
   }

}
</style>