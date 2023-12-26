<script>
export default {
    data() {
        return {
            account : null ,
            pwd : null
        }
    },
    methods:{
        login(){
            console.log(123)
            localStorage.setItem("account",this.account);
            localStorage.setItem("pwd",this.pwd)

        }
    }
}
</script>

<template>
    <h2>Storage</h2>
    <input type="text" v-model="account">
    <input type="password" v-model="pwd">
    <button type="button" @click="login">登入</button>
</template>

<style></style>