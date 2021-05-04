import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.css'
import Toaster from '@meforma/vue-toaster';

const firebaseConfig = {
    apiKey: "AIzaSyDUWYzK043A7yo28uqVSJmPS_0QRay5uSo",
    authDomain: "marathons-737f9.firebaseapp.com",
    projectId: "marathons-737f9",
    storageBucket: "marathons-737f9.appspot.com",
    messagingSenderId: "1026432260468",
    appId: "1:1026432260468:web:b77d62c039be907e327421"
};

// firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(store)
    .use(router)
    .use(Toaster, {
        position: 'bottom-right',
        duration: 2000
    })
    .mount('#app')
