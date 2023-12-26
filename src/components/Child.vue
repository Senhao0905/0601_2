<script>
export default{
    data() {
        return {
            inputValue : ""
        }
    },
    components :{

    },
    methods: {
        push(){
            console.log(this.inputValue)
            //     帶入的參數:1.執行的方法 2. 方法帶入的參數    
            this.$emit("callOutside",this.inputValue)
        }
    },
    // 接收資料的接口
    props :["propText","propTitle"]
    
}
</script>

<template>
    <div class="child">
        <h2>{{propTitle}}</h2>
        <h2>{{ propText }}</h2>
        <input type="text" v-model="inputValue">
        <button type="button" v-on:click="push">送出</button>
    </div>
    
</template>

<style lang="scss" scoped>
.child{
    border :1px black solid;
    padding: 2rem;
    text-align: center; 
}
</style>