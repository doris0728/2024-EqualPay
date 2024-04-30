<script setup>
import Footer from './pages/Footer.vue'
</script>

<template>
    <!-- <router-link to="/">Go to Home</router-link> -->
    <div class="main">
        <div class="routeContainer">
            <router-view />
        </div>
        <Footer class="footer"/>
    </div>
    
</template>

<style lang="scss" scoped>
    .main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        .routeContainer {
            flex: 1;
            overflow-y: auto;
        }
        .footer {
            flex-basis: 70px;
        }
    }
</style>
