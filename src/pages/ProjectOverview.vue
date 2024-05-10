<script setup>
import { ref } from 'vue' 

const projectName = ref("Tokyo Trip ") 
const projectDate = ref("2024-04-30")

</script>

<template>
    <div class="flex">
        <h2>{{ projectName }}</h2>
        <button class="iconBtn">
            <font-awesome-icon :icon="['fas', 'users']" />
        </button>
    </div>
    <div class="projectImageArea">
        <img src="../assets/test.jpg" alt="" class="projectImage">
        <div class="mask"></div>
        <div class="projectImageFlex">
            <span class="projectDate">2024-04-20</span>
            <button class="fontBtn">結束</button>
        </div>
    </div>

    <p class="areaTitle">清算</p>
    <ul>
        <li class="liquidationItem" v-for="i in 3">
            <img src="../assets/test.jpg" alt="" class="memberIcon">
            <div class="itemMiddle">
                <p class="itemName">Jessie</p>
                <p class="itemPrice">$1000</p>
            </div>
            <font-awesome-icon :icon="['fas', 'right-long']" />
            <div class="itemMiddle">
                <span class="itemName">Chen</span>
            </div>
            <img src="../assets/profile.png" alt="" class="memberIcon">
        </li>
    </ul>
    <p class="areaTitle">交易</p>
    <ul>
        <li class="accountingItem" v-for="i in 3">
            <div class="itemIcon">
                <font-awesome-icon :icon="['fas', 'bed']" />
            </div>
            <div class="itemMiddle">
                <p class="itemName">東京王子大飯店</p>
                <p class="itemDate">2024-04-20 11:20</p>
            </div>
            <div class="itemRight">
                <p class="itemPrice">$20,000</p>
                <p><span class="itemFounder">Jessie</span> 支付</p>
            </div>
        </li>
    </ul>
   
   
    

</template>

<style lang="scss" scoped>
@import "../src/style.scss";
    h2 {
       margin: 8px 0;
    }

    .areaTitle {
        padding: 8px 15px;
        margin: 0;
    }
    .flex {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .projectImageArea {
        position: relative;
        font-size: 0;
    }

    .mask {
        background: linear-gradient(to bottom, $color-white, $color-dark);
        mix-blend-mode: multiply;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
    }

    .projectImageFlex {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        width: 100%;
    }

    .projectDate {
        color: $color-white;
        opacity: .8;
        padding: 10px 15px;
    }

    .projectImage {
        width: 100%;
        aspect-ratio: 2 / 1; 
        object-fit: cover;
        object-position: center;
    }

    .fontBtn, .iconBtn {
        font-size: 1em;
        background-color: $color-primary;
        border: 0px solid $color-primary;
        color: $color-white;
    }
    .fontBtn {
        margin: 10px 15px;
        padding: 3px 10px;
        border-radius: 5px;
    }


    .iconBtn {
        padding: 10px 12px;
        border-radius: 10px;
    }

    .accountingItem, .liquidationItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $color-white;
        border-bottom: 1px solid $color-bg;
        padding: 20px 20px;
        p {
            margin: 3px 0;
        }
    }
    .itemMiddle {
        flex: 1;
        padding: 0 20px;
    }
    .itemRight {
        text-align: right;
        color: $color-gray-01;
    }

    .itemIcon, .memberIcon {
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
    }
    .itemIcon {
        background-color: $color-primary;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            font-size: 18px;
            color: $color-white;
            margin: 0 auto;
            
        }
    }

    .itemName {
        font-size: 1.3em;
    }
    
    .itemDate {
        font-size: 1em;
        color: $color-gray-01;
    }
    .itemPrice {
        font-size: 1.3em;
        color: $color-primary;
        font-weight: bold;
    }
    .itemFounder {
        font-weight: bold;
    }

    .liquidationItem {
        svg {
            color: $color-gray-01;
            font-size: 18px;
        }
    }
    

</style>
