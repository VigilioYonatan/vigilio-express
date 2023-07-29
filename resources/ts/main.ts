import { createApp, defineAsyncComponent } from "vue";
import "../css/index.css";

// const pinia = createPinia()
for (const el of document.getElementsByClassName("vue-app")) {
	const app = createApp({components:{
		CounterApp:defineAsyncComponent(()=>import("./CounterApp.vue"))
	}})
	app.mount(el)
	
}