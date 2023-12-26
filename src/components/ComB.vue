<script>
import router from '../router';

export default {
   data() {
      return {
         text: null,
      }
   },
   methods: {
      push() {
         console.log(this.text);
         this.$router.push({
            name: 'routerprops',
            params: {
               propText: this.text
            }
         })
      }
   }
}
</script>

<template>
   <h2>com-b</h2>
   <input type="text" v-model="text">
   <button type="button" @click="push">傳送</button>
</template>

<style></style>