import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap";
import "./assets/styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMobileAlt,
  faLemon,
  faFolder,
  faCode,
  faEnvelope,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

library.add(
  faMobileAlt,
  faLemon,
  faFolder,
  faCode,
  faEnvelope,
  faFlag,
  faWindows,
  faApple,
  faAndroid
);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
