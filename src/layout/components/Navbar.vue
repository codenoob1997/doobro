<template>
    <div class="navbar">
        <div class="left-title">

        </div>
        <div class="right-menu">
            <doodles class="right-menu-item hover-effect"/>
            <doobros class="right-menu-item hover-effect"/>
            <discord class="right-menu-item hover-effect"/>
            <twitter class="right-menu-item hover-effect"/>
        </div>
    </div>
</template>

<script setup>
import {} from 'vue'
import Doodles from '@/components/Doodles'
import Doobros from '@/components/Doobros'
import discord from '@/components/discord'
import twitter from '@/components/twitter'


</script>

<style lang="scss" scoped>
.navbar{
    height: 64px;
    background-color: rgba(85,71,173,0.6);
}
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .right-menu-item {
      margin-top: 10px;
      display: inline-block;
      align-items: center;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
  }

</style>