<script>
import ChildView from "../components/Child.vue"
export default {
    components: {
        ChildView,

    },
    data() {
        return {
            text: "外層資料",
            account: "udn880905"
        }
    },
    mounted(){
    console.log(this.$route.path)
  }
}
</script>

<template>
    <div>
        <h2>props:元件溝通 父傳子</h2>
        <ChildView :propText="text" :propTitle="account" />
        <ChildView :propText="account" :propTitle="text" />
    </div>
</template>

<style></style>