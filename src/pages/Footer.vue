<script setup>

</script>

<template>
    <div class="container">
        <font-awesome-icon class="footerIcon" :icon="['fas', 'house']" />
        <font-awesome-icon class="footerIcon" :icon="['fas', 'magnifying-glass']" />
        <div class="add"><font-awesome-icon class="footerIcon" :icon="['fas', 'plus']" /></div>
        <font-awesome-icon class="footerIcon" :icon="['fas', 'envelope']" />
        <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
        <font-awesome-icon class="footerIcon" :icon="['fas', 'user-large']" />
    </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
.container {
    background-color: $color-white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .svg-inline--fa {
        height: 1.6em;
    }
    .add {
        background-color: $color-primary;
        border-radius: 50%;
        width: 4em;
        height: 4em;
        text-align: center;
        line-height: 4em;
        padding-top: 5px;
        box-sizing: border-box;
        padding-right: 1px;
        color: $color-white;
        transform: scale(1.2) translateY(-12px);
    }
}
</style>