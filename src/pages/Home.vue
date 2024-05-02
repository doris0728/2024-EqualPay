<script setup>
import { ref } from 'vue' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const projectName = ref("Tokyo Trip")
</script>

<template>
    <div class="banner">
        <h2>EqualPay</h2>
        <img class="profile" src="../assets/profile.png" />
    </div>
    <div class="container">
        <h1>Welcome to EqualPay</h1>
        <button>Overview</button>
        <div class="notifyDiv">
            <div class="notify">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'heart']" />
                </div>
                <div class="message">
                    <span class="username">doris0728</span>
                    <span>joined your group</span>
                </div>
                <div class="img">
                    <button>Accept</button>
                </div>
            </div>
            <div class="notify">
                <div class="icon">
                    <img src="../assets/profile.png">
                </div>
                <div class="message">
                    <span class="username">doris0728</span>
                    <span>joined group</span>
                </div>
                <div class="img">
                    <img src="../assets/test.jpg">
                </div>
            </div>
        </div>
        <div class="project">
            <h2>Recent Project</h2>
            <ul class="projectList">
                <li v-for="i in 2" class="group">
                    <img src="../assets/test.jpg" alt="" class="groupImage">
                    <div class="groupInfo">
                        <h3 class="projectName">{{ projectName }}</h3>
                        <FontAwesomeIcon :icon="faEnvelope" />
                    </div>
                    <input type="button">
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../style.scss';
.banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-white;
    padding: 3px 20px;
    .profile {
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
}
.container {
    padding: 3px 20px;
    button {
        background-color: $color-primary;
        color: $color-white;
        border: none;
        padding: 7px 25px;
        border-radius: 5px;
        font-size: 1rem;
    }
    .notifyDiv {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .notify {
        display: flex;
        gap: 10px;
        /* justify-content: space-between; */
        align-items: center;
        background-color: $color-white;
        padding: 10px;
        border-radius: 8px;
        .icon {
            width: 40px;
            text-align: center;
            font-size: 25px;
            flex-basis: 40px;
            img {
                width: 35px;
                height: 35px;
                border-radius: 10px;
            }
        }
        .message {
            flex: 1;
            color: $color-gray-01;
            .username {
                text-decoration: underline;
                margin-right: 0.5em;
            }
        }
        .img {
            flex-basis: 45px;
            img {
                width: 45px;
                height: 45px;
                border-radius: 10px;
            }
            button {
                font-size: 0.8rem;
                padding: 7px 15px;
            }
        }
    }
}

/*  */
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
