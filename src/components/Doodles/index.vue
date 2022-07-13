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
        <el-dropdown-item>
          Introduction
        </el-dropdown-item>
        <el-dropdown-item>
          SpaceDoodles
        </el-dropdown-item>
        <el-dropdown-item>
          Doodles2
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {} from 'vue'
const handleDoodle= function(){
    alert("doodles")
}


</script>

<style lang="scss" scoped>
  img{
    width: 162px;
    height: 36px;
  }

</style>