<template>
    <div class="navbar">
        <div class="left-title">

        </div>
        <div class="right-menu">
            <doodles class="right-menu-item hover-effect"/>
        </div>
    </div>
</template>

<script setup>
import {} from 'vue'
import Doodles from '@/components/Doodles'


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
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }

</style>