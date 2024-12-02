import { registerPlugins } from '@/plugins'

import App from './App.vue'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})

registerPlugins(app)

app.mount('#app')
