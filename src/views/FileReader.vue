<script>
export default{
    data() {
        return {
            pic : null
        }
    },
    methods:{
        getImg(e){
            const pic  = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(pic);
            reader.onload = (e) => {
                this.pic = e.target.result;
                console.log(this.pic);
            }
        }
    }
}
</script>

<template>
    <div>
        <h2>file reader</h2>
        <input type="file" @change="getImg">
        <img :src="pic" alt="pic">
    </div>
</template>

<style>
</style>