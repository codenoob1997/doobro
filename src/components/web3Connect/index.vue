<template>

    <div class="button"  @click="handleConnect">
        {{data.text}}
    </div>
</template>

<script setup>
import { computed,reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {connectWallet, mint} from '@/utils/connect'
const router = useRouter()
const store = useStore()
let isConnected = false;
let provider;
const data = reactive({
    text : "Connect"
})

const handleConnect = async function(){
    isConnected = !isConnected;
    data.text = isConnected?'Connected':'Connect';
    provider = await connectWallet()
    store.commit('web3/setProvider',provider)
    router.push('/mint')
}


</script>

<style lang="scss" scoped>
  img{
    width: 162px;
    height: 36px;
  }

</style>