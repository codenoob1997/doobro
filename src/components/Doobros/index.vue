<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleDoobros"
  >
    <div class="button">
          <div class="img">
            <!-- <SvgIcon i/> -->
            doobros
          </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="introduction">
          Introduction
        </el-dropdown-item>
        <el-dropdown-item command="teaminfo">
          Team Information
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {} from 'vue'
import {useRouter} from 'vue-router'
import SvgIcon from '@/components/SvgIcon'
const router = useRouter()
const handleDoobros= function(command){
    const path = `/doobros/${command}`
    router.push(path)
}


</script>

<style lang="scss" scoped>
  .img{
    width: 162px;
    height: 36px;
    text-align: center;
  }

</style>