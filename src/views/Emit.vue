<script>
import ChildView from "../components/Child.vue"
export default {
    components: {
        ChildView
    },
    methods :{
        getInfo(str){
            this.account = str ;
        }
    },
    data() {
        return {
            account : null,
            value : null
        }
    },
    beforeCreate(){
        
    },
    created(){

    },
    beforeMount(){

    },
    mounted(){
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            this.value = data.results[0].name.last; 
            console.log(this.value);
        })
    },
    beforeUpdate() {
        
    },
    updated(){

    },
    beforeUnmount(){

    },
    unmounted(){

    }
    

}
</script>

<template>
    <div class="group">
        <h2>emit:元件溝通 子傳父</h2>
        <h2>這柿子曾</h2>
        <ChildView :propTitle="'emit練習'" :propText="'this.$emit()'"  v-on:callOutside="getInfo"/>
        <h2></h2>
    </div>
</template>

<style>
.group{
    text-align: center;
}
</style>