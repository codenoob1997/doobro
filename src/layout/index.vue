<template>
<div class="app-wrapper">
    <div class="fixed-header">
        <Navbar/>
    </div>
    <div class="main">
        <app-main></app-main>
    </div>
</div>
</template>

<script setup>
import {} from 'vue'
import Navbar from './components/Navbar'

</script>

<style lang="scss" scoped>
html,body{
    height: 100%;
}
.app-wrapper{
    position:relative;
    height: 100%;
    width: 100%;
    background-color: #A4A4F4;
}
.fixed-header{
    position: fixed;
    top:0;
    right: 0;
    z-index: 9;
    width: 100%;
}
</style>