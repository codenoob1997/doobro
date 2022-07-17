<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleLink"
  >
    <div class="button">
      <SvgIcon icon="cart"/>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="opensea">
          Opensea
        </el-dropdown-item>
        <el-dropdown-item command="looksrare">
          LooksRare
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {} from 'vue'
import SvgIcon from '@/components/SvgIcon'
const handleLink = function(command){
  if(command==='opensea'){
    window.open("https://opensea.io/collection/doodles-official")
  }else if(command==='looksrare'){
    window.open("https://looksrare.org/collections/0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e?queryID=0bfca652e61eee3e5e33b080ac3364d5")
  }
}



</script>

<style lang="scss" scoped>
  .img{
    width: 162px;
    height: 36px;
    text-align: center;
  }

</style>