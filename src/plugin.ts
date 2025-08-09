import type { App } from 'vue'
import SXAntFormBuilder from './App.vue'

export default {
  install(app: App) {
    // Global component sifatida qo‘shamiz
    app.component('SXAntFormBuilder', SXAntFormBuilder)
  },
}
