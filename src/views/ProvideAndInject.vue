<script>
import ComCView from "../components/ComC.vue"

export default{
    components :{
        ComCView         
    },
    data() {
        return {
            text:"一陸向下"
        }
    },
    provide(){
        return{
            injectText :this.text
        }
    }
}
</script>


<template>
    <h2>ProvideAndInject</h2>
    <ComCView />
    
    
</template>

<style>
</style>