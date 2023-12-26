<script>
import ModalView from "../components/Modal.vue"
export default{
    components :{
        ModalView
    },
    data() {
        return {
            isShow:false,
            text : ""
        }
    },
    methods :{
        
    }
    
}

</script>

<template>
    <div>
        <h2>slot</h2>
        <input type="text" v-model="text">
        <button type="button" @click="switchModal">click</button>
        <ModalView v-if="isShow" @switchModal="switchModal">
            <h2>{{text}}</h2>
        </ModalView>
    </div>
</template>

<style>
</style>