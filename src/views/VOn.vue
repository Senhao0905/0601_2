<script>
export default{
    data() {
        return {
            str : ""
        }
    },
    methods: {
        call(par){
            console.log(par)
        },
        callChange(){
            console.log(this.str)
        }
    },
    mounted(){
        const account = localStorage.getItem("account");
        const pwd = localStorage.getItem("pwd");
        console.log(account+" 密碼:" + pwd)


    }
}
</script>

<template>
    <h2>v-on : 用在綁事件監聽</h2>
    <button v-on:click="call('64')" type="button">click</button>
    <input type="text" v-model="str" v-on:change = "callChange">
</template>

<style>
</style>