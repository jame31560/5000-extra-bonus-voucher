import { createApp } from 'vue'
import App from './App.vue'
import antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import './styles/taliwind.css';
import { router } from "./router"

const app = createApp(App)
app.use(router);
app.use(antd);
app.mount('#app');
