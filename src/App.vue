<template>
    <div id="app-structure">
        <TopNavigation />
        <RouterView />
        <FooterVue />
    </div>
</template>

<script setup>
// import router modules
import { RouterView } from "vue-router";

// import components
import TopNavigation from './components/Utils/TopNavigation/TopNavigation.vue';
import FooterVue from './components/Utils/Footer/Footer.vue';
import HomeView from './views/HomeView.vue';
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* app structure */
#app-structure{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}
</style>