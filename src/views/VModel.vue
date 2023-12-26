<script >
import { mapActions } from 'pinia';
import indexStore from '../../stores/indexStore';
export default {
  data() {
    return {
      text: null,
      meals: [],
      drink: ""
    }

  },
  methods: {
    ...mapActions(indexStore, ["updateLocation"])
  },
  mounted() {
    this.updateLocation(1)
  }
}
</script>

<template>
  <h2>Input:text</h2>
  <p>{{ text }}</p>
  <!-- 修飾符 -->
  <small>v-model.lazy</small>
  <input type="text" v-model.lazy="text">
  <br>
  <small>v-model.trim</small>
  <input type="text" v-model.trim="text">
  <br>
  <!-- 輸入自動轉int -->
  <small>v-model.number</small>
  <input min="0" type="number" v-model.lazy="text">

  <hr>
  <h2>input:checkbox </h2>
  <p>{{ meals }}</p>
  <div class="checkboxgroup">
    <input type="checkbox" name="" id="breakfast" value="早餐" v-model="meals">
    <label for="breakfast">早餐</label>
  </div>
  <div class="checkboxgroup">
    <input type="checkbox" name="" id="lunch" value="午餐" v-model="meals">
    <label for="lunch">午餐</label>
  </div>
  <div class="checkboxgroup">
    <input type="checkbox" name="" id="dinner" value="晚餐" v-model="meals">
    <label for="dinner">晚餐</label>
  </div>
  <hr>
  <h2>input:radio</h2>
  <p>{{ drink }}</p>
  <div class="radiogroup">
    <input type="radio" name="drink" id="milktea" value="奶茶" v-model="drink">
    <label for="milktea">奶茶</label>

    <input type="radio" name="drink" id="greentea" value="綠茶" v-model="drink">
    <label for="greentea">綠茶</label>

    <input type="radio" name="drink" id="blacktea" value="紅茶" v-model="drink">
    <label for="blacktea">紅茶</label>
  </div>
</template>
