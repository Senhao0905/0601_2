<script>
import { RouterLink } from "vue-router";
import { mapStores, mapActions, mapState } from "pinia";
import indexStore from "../../stores/indexStore.js";
export default {
    methods: {
        switchPage() {
            this.$router.push("/");
        },
        // 淺層拷貝   1.自己的資料 2.要取用的方法
        // mapActions => pinia:actions
        ...mapActions(indexStore, ["updateLocation"])


    },
    computed: {
        // mapState => pinia:state , getters
        ...mapState(indexStore, ["location", "getLocation"])
    }
}
</script>


<template>
    <header>
        <button type="button" @click="switchPage">click</button>
        <RouterLink class="link" :class="{ local: location === 1 }" to="/vModel">v-model</RouterLink>
        <RouterLink class="link" :class="{ local: location === 2 }" to="/">v-test</RouterLink>
        <RouterLink class="link" to="/v-for">v-for</RouterLink>
        <RouterLink class="link" to="/v-if-v-show">v-if-v-show</RouterLink>
        <RouterLink class="link" to="/v-bind">v-bind</RouterLink>
        <RouterLink class="link" to="/v-on">v-on</RouterLink>
        <RouterLink class="link" to="/props">props</RouterLink>
        <RouterLink class="link" to="/emit">emit</RouterLink>
        <RouterLink class="link" to="/watch-computed">watch & computed</RouterLink>
        <RouterLink class="link" to="/router">router</RouterLink>
        <RouterLink class="link" to="/routerprops/">routerprops</RouterLink>
        <RouterLink class="link" to="/provideAndInject">provideAndInject</RouterLink>
        <RouterLink class="link" to="/slot">slot</RouterLink>
        <RouterLink class="link" to="/filereader">filereader</RouterLink>
        <RouterLink class="link" to="/storage">storage</RouterLink>

        <p>{{ location }}</p>
        <p>{{ getLocation }}</p>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100vw;
    padding: 1.5rem 4rem;
    background-color: #41b782;
    font-size: 2rem;

    .link {
        text-decoration: none;
        color: white;
        cursor: pointer;
        transition: 0.9s;
        margin: 0 1rem;

        &:hover {
            color: #186c46;   
        }
    

    }
}

.local {
    color: #41b782;
    background-color: white;
    border-radius: 6px;
    padding: 4px 6px;
}
</style>