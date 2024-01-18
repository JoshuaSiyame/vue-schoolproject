// import create app instance
import { createApp } from "vue";

// import router
import router from "./router"

// import fontawesome modules
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// import app component
import App from "./App.vue";

// import all components css files
import "./components/Utils/TopNavigation/TopNavigation.css"
import "./components/Utils/Footer/Footer.css";
import "./components/HomeComponents/Home.css";
import "./components/HomeComponents/LandingSection/LandingSection.css"

// configure fontawesome icons
library.add(fas);

// app instance
const app = createApp(App);

// configure router
app.use(router)

// app configuration
app.component("fa", FontAwesomeIcon);
app.mount("#app");
