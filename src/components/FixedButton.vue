<template>
  <div class="fixed-button">
    <LayoutTwoTone></LayoutTwoTone>
    <!-- <span class="text-xs">Form Builder</span> -->
  </div>
</template>

<script setup lang="ts">
import { LayoutTwoTone } from '@ant-design/icons-vue'
</script>

<style scoped>
.fixed-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #1890ff;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
