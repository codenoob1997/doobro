<template>
    <div class="navbar">
        <div class="left-title">
          <MainLogo class="left-item hover-effect"/>
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
import doobros from '@/components/doobros'
import discord from '@/components/discord'
import twitter from '@/components/twitter'
import MainLogo from '@/components/MainLogo'


</script>

<style lang="scss" scoped>
.navbar{
  overflow: hidden;
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
  .left-item{
    float: left;
    align-items: center;
    margin-top: 10px;
    padding-left:16px;
     &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
  }

</style>