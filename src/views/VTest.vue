<script>
import { mapActions } from 'pinia';
import indexStore from '../../stores/indexStore';
export default {
    data() {
        return {
            text: "v-test"
        }
    },
    methods: {
        ...mapActions(indexStore, ["updateLocation"])
    },
    mounted() {
        this.updateLocation(2)
    }
}
</script>

<template>
    <h1>v-text</h1>
    <p>{{ text }}</p>
    <p v-text="text"></p>
</template>

<style></style>