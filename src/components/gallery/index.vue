<template>
         <div class="demo-image__lazy">
            <div class="img-container"  v-for="item in store.getters.showList" :key="item['name']">
              <el-image :src="item['image']" lazy />
              <small>{{item.name}}</small>
            </div>
         </div>
</template>

<script setup>
import { watch } from 'vue'
import {useStore} from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
.demo-image__lazy {
  margin: 0px;
  padding: 0px;
  height: 400px;
  overflow: auto;
}
.img-container {
  float: left;
  text-align: center;
  height: 200px;
  width: 200px;
  overflow:hidden;
}
.el-image{
  height: 175px;
  width: 175px;
}
small{
  display: block;
  text-align: center;
}

</style>