<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleLink"
  >
    <div class="button">
          <div class="img">
            twitter
          </div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command='official'>
          Doodles Official
        </el-dropdown-item>
        <el-dropdown-item command='doobros'>
          Doodles China Community 
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {} from 'vue'
const handleLink= function(command){
    if(command==='official'){
      window.open("https://twitter.com/doodles")
    }else if(command ==='doobros'){
      window.open("https://twitter.com/doobroCN")
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