<template>
<svg class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName"/>
</svg>
</template>

<script setup>
import {} from 'vue'
import {defineProps,computed} from 'vue'
const props = defineProps({
    icon:{
        type:String,
        required:true
    },
    className:{
        type:String,
        default:''
    }
})
const iconName = computed(() => `#icon-${props.icon}`)

</script>

<style lang="scss" scoped>
.svg-icon{
    width: 50px;
    height: 50px;
    overflow: hidden;
}
</style>