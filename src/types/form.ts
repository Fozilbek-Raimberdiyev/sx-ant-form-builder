export interface FormField {
  type: 'input' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'date' | 'file'
  label: string
  isRequired: number
  gridCol: string
  api: string
}
