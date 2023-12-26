<script>
import { RouterLink , RouterView} from "vue-router";

</script>

<template>
   <h2>Router</h2>
   <p>現在路由 : {{this.$route.path}}</p>
   <RouterLink to="/router/com-a">元件A</RouterLink>
   <RouterLink to="/router/com-b">元件B</RouterLink>
   <RouterView/>
</template>

<style>
</style>