import { registerPlugins } from '@/plugins'
import './style.css';

import App from './App.vue'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { router } from './router'

const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})

app.use(router)

registerPlugins(app)

app.mount('#app')
