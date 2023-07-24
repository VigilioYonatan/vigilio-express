
import "./assets/css/index.css";

import { createApp, defineAsyncComponent } from "vue";
const a: any = "hgola";
console.log(a);

for (const el of document.getElementsByClassName("vue-app")) {
    const app = createApp({
        components: {
            Counter:defineAsyncComponent(()=>import("./components/Counter.vue")) ,
        },
    });
    app.mount(el);
}
