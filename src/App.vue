<script setup lang="ts">
import { ref } from 'vue'
import FixedButton from './components/FixedButton.vue'
import { Modal, Input, Select } from 'ant-design-vue'
import FormBuilder from './components/FormBuilder.vue'
const isVisible = ref(false)
</script>

<template>
  <div>
    <FixedButton @click="isVisible = true"></FixedButton>
    <Modal footer="" title="Form Builder" width="90%" v-model:open="isVisible">
      <FormBuilder></FormBuilder>
    </Modal>
  </div>
</template>

<style scoped></style>
