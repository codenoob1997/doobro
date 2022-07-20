<template>
<div class="main">
    <button @click="handleMint()">mint</button>
</div>
</template>

<script setup>
import {toRaw} from 'vue'
import {useStore} from 'vuex'
import {mint} from '@/utils/connect'
const store = useStore()
const handleMint = function(){
    let provider = toRaw(store.state.web3.provider)
    mint(provider)
}


</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    background-color: white;
}
</style>