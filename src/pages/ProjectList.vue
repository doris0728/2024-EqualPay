<script setup>
import { ref } from 'vue' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const projectName = ref("Tokyo Trip")
</script>

<template>
    <h2>Project List</h2>
    <ul class="projectList">
        <li v-for="i in 5" class="group">
            <img src="../assets/test.jpg" alt="" class="groupImage">
            <div class="groupInfo">
                <h3 class="projectName">{{ projectName }}</h3>
                <FontAwesomeIcon :icon="faEnvelope" />
            </div>
            <input type="button">
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import "../src/style.scss";
    h2{
        padding: 0 10px;
    }

    .projectList{
        padding: 10px;
        li{
            margin: 20px 0;
            padding: 20px;
            background-color: $color-white;
            border-radius: 10px;
        }
    }

    .group{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .groupImage{
        width: 5em;
        height: 5em;
        border-radius: 50%;
    }

    .groupInfo{
        display: inline-flex;
    }

    .projectName{
        display: inline;
    }


</style>
