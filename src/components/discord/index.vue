<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleDoodle"
  >
    <div class="button">
          <div class="img">
            discord
          </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          Doodles Official
        </el-dropdown-item>
        <el-dropdown-item>
          Doodles China Community 
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {} from 'vue'
const handleDoobros= function(){
    alert("doobros")
}


</script>

<style lang="scss" scoped>
  .img{
    width: 162px;
    height: 36px;
    text-align: center;
  }

</style>