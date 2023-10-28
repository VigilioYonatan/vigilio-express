import "vite/modulepreload-polyfill";
import "../css/index.css";
import "@vigilio/sweet/sweet.min.css";
import { createApp, defineAsyncComponent } from "vue";
import Alpine from "alpinejs";
Alpine.start();

// const pinia = createPinia()
for (const el of document.getElementsByClassName("vue-app")) {
	const app = createApp({components:{
		CounterApp:defineAsyncComponent(()=>import("./CounterApp.vue"))
	}})
	app.mount(el)
	
}