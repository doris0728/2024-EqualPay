<script setup>
import Footer from './pages/Footer.vue'
</script>

<template>
    <!-- <router-link to="/ProjectList">Go to Home</router-link> -->
    <div class="main">
        <div class="routeContainer">
            <router-view />
        </div>
        <Footer class="footer"/>
    </div>
    
</template>

<style lang="scss" scoped>
@import "./style.scss";
    .main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        .routeContainer {
            flex: 1;
            overflow-y: auto;
            background-color: $color-bg;
        }
        .footer {
            flex-basis: 70px;
            background-color: $color-white;
        }
    }
</style>
