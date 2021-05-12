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
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faAndroid,
  faFacebook,
  faTwitter,
  faGooglePlus,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

library.add(
  faMobileAlt,
  faLemon,
  faFolder,
  faCode,
  faEnvelope,
  faBookmark,
  faWindows,
  faApple,
  faAndroid,
  faFacebook,
  faTwitter,
  faGooglePlus,
  faPinterest
);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
