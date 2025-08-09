<script setup lang="ts">
import { Input, Select, FormItem, Button } from 'ant-design-vue'
import { PlusOutlined, CloseOutlined, FormOutlined } from '@ant-design/icons-vue'
import { fieldTypeOptions, gridColOptions, requiredOptions } from '@/mock/options'
import {
  checkboxImport,
  datePickerImport,
  inputImport,
  radioImport,
  selectImport,
  uploadImport,
} from '@/utils/import.util'
import { ref } from 'vue'
import { type FormField } from '@/types/form'
import {
  generateFormState,
  generateFunctions,
  generateSFC,
  generateTemplate,
  generateValidation,
} from '@/utils/generate.util'
const isGenerated = ref(false)
const formTitle = ref('')
const formFields = ref<FormField[]>([
  {
    type: 'input',
    label: '',
    isRequired: 0,
    gridCol: 'lg:col-span-12 col-span-12',
    api: '',
  },
])

function generateForm() {
  let contentScriptString = `\n import {Form, FormItem} from 'ant-design-vue';\n  import { reactive, ref } from 'vue' \n
 `
  let contentTemplateString = ``
  for (const field of formFields.value) {
    switch (field.type) {
      case 'input':
        if (!contentScriptString.includes(inputImport())) {
          contentScriptString += inputImport()
        }
        break
      case 'select':
        if (!contentScriptString.includes(selectImport())) {
          contentScriptString += selectImport()
        }
        break
      case 'checkbox':
        if (!contentScriptString.includes(checkboxImport())) {
          contentScriptString += checkboxImport()
        }
        break
      case 'radio':
        if (!contentScriptString.includes(radioImport())) {
          contentScriptString += radioImport()
        }
        break
      case 'date':
        if (!contentScriptString.includes(datePickerImport())) {
          contentScriptString += datePickerImport()
        }
        break
      case 'file':
        if (!contentScriptString.includes(uploadImport())) {
          contentScriptString += uploadImport()
        }
        break
    }
  }
  contentScriptString += generateFormState(formFields.value)
  contentScriptString += generateValidation(formFields.value)
  contentScriptString += generateFunctions()
  contentTemplateString += generateTemplate(formFields.value, formTitle.value)
  isGenerated.value = true
  return generateSFC(contentScriptString, contentTemplateString)
}

function copyToClipboard() {
  const textArea = document.createElement('textarea')
  textArea.value = generateForm()
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}
</script>
<template>
  <form @submit.prevent="generateForm">
    <div class="grid grid-cols-12 2xl:gap-6 gap-4">
      <!-- nameUz -->
      <div class="lg:col-span-6 col-span-12">
        <FormItem>
          <label for="formtitle">Form title</label>
          <Input
            v-model:value="formTitle"
            size="large"
            id="formtitle"
            class="mt-2"
            placeholder="Form title"
          ></Input>
        </FormItem>
      </div>
      <!-- dynamic fields -->
      <div
        class="grid grid-cols-12 items-center gap-4 col-span-12"
        v-for="(field, index) in formFields"
        :key="index"
      >
        <div class="col-span-11 grid grid-cols-12 gap-4">
          <!-- field api  -->
          <FormItem class="col-span-3">
            <label for="api">Field api</label>
            <Input
              size="large"
              v-model:value="field.api"
              id="api"
              class="mt-2"
              placeholder="Field  api"
            ></Input>
          </FormItem>
          <!-- field type -->
          <FormItem class="col-span-2">
            <label for="fieldtype">Field type</label>
            <Select
              size="large"
              :options="fieldTypeOptions"
              v-model:value="field.type"
              id="fieldtype"
              class="mt-2"
              placeholder="Field type"
            ></Select>
          </FormItem>
          <!-- field title -->
          <FormItem class="col-span-3">
            <label for="fieldtitle">Field label</label>
            <Input
              size="large"
              v-model:value="field.label"
              id="fieldtitle"
              class="mt-2"
              placeholder="Field title"
            ></Input>
          </FormItem>
          <!-- isRequired -->
          <FormItem class="col-span-2">
            <label for="required">Required</label>
            <Select
              size="large"
              :options="requiredOptions"
              v-model:value="field.isRequired"
              id="required"
              class="mt-2"
              placeholder="Required"
            ></Select>
          </FormItem>
          <!-- Grid col -->
          <FormItem class="col-span-2">
            <label for="gridcol">Grid column</label>
            <Select
              size="large"
              :options="gridColOptions"
              v-model:value="field.gridCol"
              id="gridcol"
              class="mt-2"
              placeholder="Grid column"
            ></Select>
          </FormItem>
        </div>
        <!-- add field -->
        <div class="col-span-1 flex items-center justify-center">
          <button
            v-if="index === formFields.length - 1"
            type="button"
            class="cursor-pointer"
            @click="
              formFields.push({
                type: 'input',
                label: '',
                isRequired: 0,
                gridCol: 'lg:col-span-12 col-span-12',
                api: '',
              })
            "
          >
            <PlusOutlined></PlusOutlined>
          </button>
          <!-- remove field -->
          <button v-else type="button" class="cursor-pointer" @click="formFields.splice(index, 1)">
            <CloseOutlined></CloseOutlined>
          </button>
        </div>
      </div>
    </div>
    <!-- generate form -->
    <div class="flex items-center justify-end">
      <Button
        class="submit-btn"
        html-type="submit"
        size="large"
        type="primary"
        @click="generateForm"
      >
        <FormOutlined class="self-center"></FormOutlined>
        <span class=""> Generate form </span>
      </Button>
    </div>
  </form>
  <!-- generated form code -->
  <div v-if="isGenerated" class="mt-4 bg-gray-100 p-4 rounded text-sm font-mono relative">
    <div class="absolute top-2 right-2 text-xs text-gray-500">
      <span class="cursor-pointer" @click="copyToClipboard">Copy</span>
    </div>
    <pre id="formCode">
        <code>
          {{ generateForm() }}
        </code>
      </pre>
  </div>
</template>

<style scoped>
@import url('../assets/main.css');
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
.submit-btn {
  background-color: #1890ff;
  border-color: #1890ff;
  margin-top: 10px;
}
</style>
