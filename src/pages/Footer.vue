<script setup>

</script>

<template>
    <div class="container">
        <font-awesome-icon class="footerIcon" :icon="['fas', 'house']" />
        <font-awesome-icon class="footerIcon" :icon="['fas', 'magnifying-glass']" />
        <font-awesome-icon class="footerIcon" :icon="['fas', 'plus']" />
        <font-awesome-icon class="footerIcon" :icon="['fas', 'envelope']" />
        <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
        <font-awesome-icon class="footerIcon" :icon="['fas', 'user-large']" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
<style>
.footerIcon.svg-inline--fa {
    height: 1.8em;
}
</style>