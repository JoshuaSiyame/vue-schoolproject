<template>
    <header id="top-header">
        <nav id="top-navigation">
            <ol id="top-menu">
                <li class="top-menu-item">
                    <fa icon="bars" class="top-menu-item-icon"/>
                </li>
            </ol>
        </nav>
        <div id="top-main-menu-container">
            <ol id="top-main-menu">
                <li class="top-main-menu-item">
                    <RouterLink to="/" class="top-main-menu-item-link">Home</RouterLink>
                </li>
                <li class="top-main-menu-item">
                    <RouterLink to="/about" class="top-main-menu-item-link">About</RouterLink>
                </li>
                <li class="top-main-menu-item">
                    <RouterLink to="/contact" class="top-main-menu-item-link">Contact</RouterLink>
                </li>
            </ol>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style scoped>

</style>