<script>
export default{
    inject:["injectText"]
}
</script>

<template>
    <div class="comd">
        <h2>元件d</h2>
        <p>{{ injectText }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .comd{
        width: 50%;
        height: 50%;
        border: 1px black solid;
        text-align: center;
        margin: 0 auto;

    }
</style>