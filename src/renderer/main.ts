import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify'

import "./style.css";
import '@mdi/font/css/materialdesignicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas) // Include needed solid icons
library.add(far) // Include needed regular icons

const app = createApp(App)
  .use(vuetify)
  .mount('#app')