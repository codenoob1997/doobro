<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleDoodle"
  >
    <div class="button">
          <img src="@/assets/images/doodles-text-color.png" alt="doodlepic">
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command='introduction'>
          Introduction
        </el-dropdown-item >
        <el-dropdown-item command='spacedoodle'>
          SpaceDoodles
        </el-dropdown-item>
        <el-dropdown-item command='doodles2'>
          Doodles2
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const handleDoodle= function(command){
    const path = `/doodles/${command}`
    router.push(path)
}


</script>

<style lang="scss" scoped>
  img{
    width: 162px;
    height: 36px;
  }

</style>