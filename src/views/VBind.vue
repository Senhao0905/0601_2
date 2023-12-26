<script>
export default {
    data() {
        return {
            imgUrl: "https://pic.baike.soso.com/ugc/baikepic2/0/20230301220343-378572191_jpeg_563_616_167264.jpg/300",
            redBoo: false,
            lgBoo: false,
            classArr:[]

        }
    }
}
</script>

<template>
    <h2>v-bind</h2>
    <img v-bind:src="imgUrl" alt="img">
    <!--    簡寫 v-bind 去掉留下 :    -->
    <!-- <img :src="imgUrl" alt="img">  -->
    <!-- 標籤 -->
    <!-- v-bind 加在屬性上 做綁定  -->
    <h2>v-bind:class</h2>
    <div>
        <input type="checkbox" id="red" value="true" v-model="redBoo">
        <label for="red">紅色</label>
    </div>
    <div>
        <input type="checkbox" id="lg" value="true" v-model="lgBoo">
        <label for="lg">放大</label>
    </div>
    <!-- class 判斷式 成立才加入CLASS  -->
    <p v-bind:class="{ red: redBoo, lg: lgBoo }">無人島</p>
    <!-- v-bind:class[] -->
    <div>
        <input type="checkbox" id="red2" value="red" v-model="classArr">
        <label for="red2">紅色</label>
    </div>
    <div>
        <input type="checkbox" id="lg2" value="lg" v-model="classArr">
        <label for="lg2">放大</label>
    </div>
    <!-- class 判斷式 成立才加入CLASS  -->
    <p v-bind:class="classArr">無人島</p>
</template>

<style>
.red {
    color: red;
}

.lg {
    font-size: 4rem;
}
</style>