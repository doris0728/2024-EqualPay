<script setup>
import { ref } from 'vue' 

const projectName = ref("Tokyo Trip ")
const projectDate = ref("2024-04-30")
// const notification = ref(true)


</script>

<template>
    <h2>Project List</h2>
    <div class="paginationBtns">
        <button class="btnProgress check">進行中</button>
        <button class="btnProgress">已結算</button>
    </div>
    <ul class="projectList">
        <li v-for="i in 10" class="project">
            <img src="../assets/test.jpg" alt="" class="projectImage">
            <div class="projectInfo">
                <p class="projectName">{{ projectName }}</p>
                <p class="projectDate">{{ projectDate }}</p>
                
            </div>
            <div class="members">
                <div class="member" v-for="i in 3">
                    <img src="../assets/test.jpg" alt="" class="memberIcon">
                </div>
                <div class="memberMore">
                    <font-awesome-icon :icon="['fas', 'ellipsis']" />
                </div>
            </div>
            <!-- <button class="notify" :class="notification ? 'on' : ''" @click="notification = notification ? false : true" :notification>
                <font-awesome-icon :icon="['far', 'bell']" />
            </button> -->
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import "../src/style.scss";
    h2 {
        padding: 10px 15px 0 15px;
    }

    .paginationBtns{
        padding: 0 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .btnProgress {
        flex: 1;
        padding: 8px 12px;
        margin: 0 10px;
        font-size: 1em;
        border: 1px solid $color-primary;
        color: $color-primary;
        background-color: $color-white;
        border-radius: 5px;
    }
    .btnProgress.check {
        color: $color-white;
        background-color: $color-primary;
    }

    .projectList {
        padding: 0 15px;
        li{
            margin: 20px 0;
            padding: 15px;
            background-color: $color-white;
            border-radius: 10px;
        }
    }

    .project {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .projectImage {
        width: 5em;
        height: 5em;
        border-radius: 50%;
    }

    .projectInfo {
        flex: 1;
        padding: 0 20px;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            margin: 3px 0;
        }
    }

    .projectName {
        font-size: 1.3em;
    }

    .projectDate{
        font-size: 1em;
        color: $color-gray-01;
    }
    
    .notify {
        background-color: $color-gray-01;
        padding: 6px 8px;
        border-radius: 5px;
        border: 0px solid #fff;
        svg {
            color: $color-white;
        }
    }

    .notify.on{
        background-color: $color-primary;
    }

    .members {
        display: flex;
        align-items: center;
    }

    .member{
        width: 1.5em;
        display: inline-block;
    }

    .memberIcon {
        border: 3px solid $color-white;
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }
    .memberMore {
        display: inline-block;
        padding-left: 1em;
        svg{
            font-size: 14px;
            color: $color-gray-01;
        }
    }

</style>
