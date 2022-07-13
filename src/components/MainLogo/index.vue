<template>

    <div class="button" @click="handleMain">
          <img src="@/assets/images/doodles_logo_notext.png" alt="doodlepic">
    </div>
</template>

<script setup>
import {} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const handleMain= function(command){
    router.push('/')
}


</script>

<style lang="scss" scoped>
img{
    height: 46px;
}

</style>