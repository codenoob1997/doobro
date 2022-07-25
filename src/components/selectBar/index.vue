<template>
  <el-select v-model="values['background']" placeholder="Select">
    <el-option
      v-for="item in options_map['background']"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
    </el-option>
  </el-select>
    <el-select v-model="values['face']" placeholder="Select">
    <el-option
      v-for="item in options_map['face']"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
    </el-option>
  </el-select>
    <el-select v-model="values['hair']" placeholder="Select">
    <el-option
      v-for="item in options_map['hair']"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
    </el-option>
  </el-select>
    <el-select v-model="values['head']" placeholder="Select">
    <el-option
      v-for="item in options_map['head']"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
    </el-option>
  </el-select>
    <el-select v-model="values['piercing']" placeholder="Select">
    <el-option
      v-for="item in options_map['piercing']"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
    </el-option>
  </el-select>
    <el-select v-model="values['body']" placeholder="Select">
    <el-option
      v-for="item in options_map['body']"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
    </el-option>

  </el-select>
      <button @click="resetFilter">Reset Filter</button>
      <gallery/>
      <div class="resultCount">{{store.getters.showList.length}}</div>
</template>

<script setup>
import { computed, nextTick, reactive, ref, watch } from 'vue'
import {useStore} from 'vuex'
import {compute_objs,compute_trait_value,preprocess,trait_type} from '@/utils/trait';
import gallery from '@/components/gallery'
var json = require('@/assets/json/doodle_metadata.json')
var resetKey=0;
var trait_map = compute_trait_value(json)
var select_value = {}
var showList;
const store = useStore()
const pre = function(map){
    const obj = {}
    for(const key of Object.keys(map)){
        obj[key] = []
        for(const value of Object.values(map[key])){
            const tmp = {}
            tmp['value']=value
            tmp['label']=value
            obj[key].push(tmp)
        }
    }
    return obj

}
const list = preprocess(json)

const options_map = pre(trait_map)
var values = reactive({
    background:'grey',
    head:'green',
    body:'',
    hair:'blue toque',
    piercing:'pearl',
    face:'chill cig'
})
function resetFilter(){
  for(const [key,value] of Object.entries(values)){
    values[key] = ''
  }
}


watch(values,()=>{
  select_value = {}
  for(const [key,value] of Object.entries(values)){
    if(value!==''){
      select_value[key] = value
    }
  }
  showList = compute_objs(select_value,list)
  resetKey+=1
  store.commit("gallery/setShowList",showList)
  console.log("value changed")
},{immediate:true,deep:true})




</script>
<style>
</style>
