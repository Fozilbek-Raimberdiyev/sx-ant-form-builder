import { type FormField } from '@/types/form'

export function generateFormState(formFields: FormField[]) {
  if (formFields[0].api) {
    return `
  const formRef = ref(null)
  const formState = reactive({
   ${formFields.map((field) => `${field.api}: '',`).join('\n')} \n
  })
  `
  }
  return ''
}

export function generateValidation(formFields: FormField[]) {
  return ` \n import type { Rule } from 'ant-design-vue/es/form' \n
  const rules:Record<string, Rule[]> = {
    ${formFields
      .filter((field) => field.isRequired)
      .map(
        (field) =>
          `${field.api}: [{ required: true, message: 'Please input ${field.label}', trigger: 'change' }],`,
      )
      .join('\n')}
  }
  `
}
export function generateFunctions() {
  return `
    async function handleSubmit() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    formRef.value.validate()
  } catch (e) {
    console.error('Form submission failed:', e)
  }
}

const handleReset = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  formRef.value.resetFields()
}

    `
}

export function generateTemplate(formFields: FormField[]) {
  return `
    <Form
      @submit="handleSubmit"
      ref="formRef"
      :model="formState"
      :rules
      class="flex flex-col gap-6"
    >
      <div class="grid grid-cols-12 gap-6">
        ${formFields
          .map(
            (field) => `\n <!-- ${field.api} --> \n
        <div class="${field.gridCol}">
          <FormItem name="${field.api}">
            <label class="text-sm font-medium text-[#181818] mb-2 inline-block">${field.label}
              ${field.isRequired ? '<BaseRequiredLabel></BaseRequiredLabel>' : ''}
            </label>
            <Input v-model.number="formState.${field.api}"></Input>
          </FormItem>
        </div>
        `,
          )
          .join('\n')}
</div>
</Form>
  `
}

export function generateSFC(script: string, template: string) {
  return `
    <script setup lang="ts">
    ${script} \n
    </script> \n
    
    <template>
    ${template}
    </template>
    `
}
