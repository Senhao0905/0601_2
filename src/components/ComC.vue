<script>
import ComDView from "../components/ComD.vue"
export default {
    components: {

        ComDView

    }
}
</script>

<template>
    <div class="comc">
        <h2>元件c</h2>
        <ComDView />
    </div>
</template>

<style lang="scss" scoped>
.comc {
    width: 50vw;
    height: 50vh;
    border: 1px black solid;
    text-align: center;

}
</style>