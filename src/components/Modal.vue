<script>
export default{
    methods:{
        switchModal(){
            this.$emit("switchModal")
        }
    }
}</script>

<template>
    <div class="container">

        <div class="modal">
            <i class="fa-solid fa-xmark" @click="switchModal"></i>
            <h2>Modal</h2>
            <slot></slot>
        </div>


        <div class="bg"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
        width: 50vw;
        height: 50vh;
        background-color: white;
        border-radius: 0.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        i{
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 16px;
        }
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background-color: black;
        opacity: 0.8;
        z-index: -1;

    }
}
</style>