<script setup>
import { ref, computed, onMounted } from 'vue' 
// const projectName = ref("Tokyo Trip ") 
// const projectDate = ref("2024-04-30")
const selectedClassIndex = ref(0)
const members = ["AAA", "BBB", "CCC", "DDD"]
const selectedMembers = ref([])
const totalPrice = ref(0)
const classSelected = ref(false)
const today = ref('');

onMounted(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    today.value = `${year}-${month}-${day}`;
});

const equalPrice = computed(() => {
  let equal = totalPrice.value / selectedMembers.value.length
  return equal
})

function selectButton(index) {
    selectedClassIndex.value = index
}


</script>

<template>
    <h2>Item Of Account</h2>
    <div class="section">
        <p class="title">群組</p>
        <div class="styledSelect">
            <select name="" id="" class="select">
                <option value="" v-for="i in 3">Project {{ i }}</option>
            </select>
        </div>
    </div>
    <div class="section classBtnArea">
        <button class="classBtn" :class="{checked: selectedClassIndex === 0}" @click="selectButton(0)">
            <div class="iconBG">
                <font-awesome-icon :icon="['fas', 'bed']" />
            </div>
            <span class="className">住宿</span>
        </button>
        <button class="classBtn" :class="{checked: selectedClassIndex === 1}" @click="selectButton(1)">
            <div class="iconBG">
                <font-awesome-icon :icon="['fas', 'utensils']" />
            </div>
            <span class="className">飲食</span>
        </button>
        <button class="classBtn" :class="{checked: selectedClassIndex == 2}" @click="selectButton(2)">
            <div class="iconBG">
                <font-awesome-icon :icon="['fas', 'plane']" />
            </div>
            <span class="className">機票</span>
        </button>
        <button class="classBtn" :class="{checked: selectedClassIndex === 3}" @click="selectButton(3)">
            <div class="iconBG">
                <font-awesome-icon :icon="['fas', 'train-subway']" />
            </div>
            <span class="className">交通</span>
        </button>
        <button class="classBtn" :class="{checked: selectedClassIndex === 4}" @click="selectButton(4)">
            <div class="iconBG">
                <font-awesome-icon :icon="['fas', 'ticket']" />
            </div>
            <span class="className">票券</span>
        </button>
        
    </div>


    <div class="flex">

        <div class="section">
            <p class="title">品項</p>
            <input type="text" name="" id="" class="inputText">
            <!-- <div class="flex">
                <div class="itemClass">
                    <font-awesome-icon :icon="['fas', 'bed']" />
                </div>
            </div> -->
        </div>
        <div class="section">
            <p class="title">總金額</p>
            <input type="number" name="" id="" class="inputText" v-model.lazy="totalPrice">
        </div>
    </div>
    <div class="flex">
        <div class="section">
            <p class="title">付款人</p>
            <div class="styledSelect">
                <select name="" id="" class="select">
                    <option value="" v-for="member in members">Member {{ member }}</option>
                </select>
            </div>
        </div>
        <div class="section">
            <p class="title">時間</p>
            <input type="date" name="" id="" class="inputText" v-model="today">
        </div>
    </div>

   
    <div class="section">
        <p class="title">幫誰付款</p>
        <label class="checkBoxLabel" v-for="member in members">
            <input type="checkbox" name="checkMember" :value="member" v-model="selectedMembers" />
            <span class="label-text">{{ member }}</span>
        </label>
    </div>
    <ul class="memberPriceList">
        <li class="memberPrice" v-for="member in selectedMembers">
            <img src="../assets/test.jpg" alt="" class="memberIcon">
            <span class="memberName">{{ member }}</span>
            <input type="number" name="" id="" class="inputText" v-model.lazy="equalPrice">
            <span>NTD</span>
        </li>
    </ul>
    <div class="section">
        <p class="title">備註</p>
        <textarea name="" id=""></textarea>
    </div>


    <div class="section text-center">
        <button class="fontBtn">Save</button>
    </div>
    
</template>

<style lang="scss" scoped>
@import "../src/style.scss";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
    h2 {
        padding: 10px 15px 0 15px;
    }
    .text-center {
        text-align: center;;
    }
    .section {
        padding: 5px 15px;
    }
    .flex {
        width: 100%;
        display: flex;
        .section {
            flex: 1;
        }
    }
    .classBtnArea {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .classBtn {
        width: 18%;
        display: flex;
        border: 0px solid $color-primary;
        flex-direction: column;
        align-items: center;
        margin: 5px 0;
        padding: 10px 5px;
        background-color: $color-bg;
        .className {
            margin-top: 5px;
        }
    }
    .iconBG {
        width: 100%;
        box-sizing: border-box;
        border-radius: 15%;
        aspect-ratio: 1; 
        position: relative;
        background-color: $color-gray-01;
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5em;
            color: $color-white;
        }
    }

    .classBtn.checked .iconBG{
        background-color: $color-primary;
    }

    

    // .itemClass{
    //     display: flex;
    //     align-items: center;
    //     padding: 0px 5px;
    //     margin-right: 5px;
    //     box-sizing: border-box;
    //     justify-content: center;
    //     aspect-ratio: 1; 
    //     border-radius: 15%;
    //     background-color: $color-primary;
    //     svg {
    //         color: $color-white;
    //         font-size: .9em;
    //     }
    // }


    .title {
        padding: 10px 0 8px 0;
        margin: 0;
    }
    select {
        width: 100%;
        padding: 0 10px;
        height: 3em;
        border: 0px solid #fff;
        border-radius: 5px;
        appearance: none;
        -webkit-appearance: none;
    }
    .styledSelect {
        position: relative;
    }
    .styledSelect:after {
        content: " ";
        position: absolute;
        pointer-events: none;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
        width: 14px;
        height: 12px;
        background-color: $color-primary;
        clip-path: polygon(8% 17%, 0% 25%, 50% 84%, 100% 25%, 92% 17%, 50% 65%);
    }

    .checkBoxLabel {
        margin-right: 10px;
        line-height: 2em;
        white-space: nowrap;
    }
    .checkBoxLabel input[type='checkbox'] {
        display: none; 
    }
    .checkBoxLabel input[type='checkbox'] + .label-text:before ,label input[type='checkbox']:before{
        content: " ";
        width: 1.2em;
        height: 1.2em;
        display: inline-block;
        margin-right: 10px; 
        background-color: $color-white;
        border: 1px solid $color-primary;
        border-radius: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    .checkBoxLabel input[type='checkbox']:checked + .label-text:before {
        // background-color: $color-primary;
        border: 1px solid $color-primary;
    }
    .checkBoxLabel .label-text {
        position: relative;
    }
    .checkBoxLabel input[type='checkbox']:checked + .label-text:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 4px;
        width: .8em;
        height: .8em;
        background-color: $color-primary;
        // clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        clip-path: polygon(20% 52%, 0% 55%, 50% 100%, 100% 16%, 90% 10%, 45% 80%);
    }

    .checkBoxLabel input[type='checkbox']:disabled + .label-text {
        background-color: $color-gray-01;
    }

    
    .inputText {
        box-sizing: border-box;
        width: 100%;
        padding: 0 15px;
        height: 3em;
        border: 0px solid $color-white;;
        border-radius: 5px;
    }

    .memberPriceList {
        padding: 10px 0;
    }

    .memberPrice {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-bottom: 1px;
        background-color: $color-white;
        .inputText {
            width: 35%;
            background-color: $color-bg;
        }
        span {
            padding: 0 10px;
        }
    }
    .memberName {
        padding: 0 10px;
        flex: 1
    }

    .memberIcon {
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
    }


    .fontBtn {
        width: 100%;
        font-size: 1.1em;
        background-color: $color-primary;
        border: 0px solid $color-primary;
        color: $color-white;
        padding: 8px 16px;
        border-radius: 5px;
    }
    textarea {
        font-size: 1.2em;
        border: 0px solid $color-primary;
        box-sizing: border-box;
        width: 100%;
        padding: 0 10px;
        height: 3.5em;
    }

</style>
