import { createApp } from 'vue'
// import App from './App.vue'

createApp({
  data() {
    return {
      message: 'hello vue'
    }
  },
  mounted() {
    console.log('mounted')
  }
}).mount('#app')