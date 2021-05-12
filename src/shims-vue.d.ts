/* eslint-disable */
declare module "*.vue" {
  import VueSlickCarousel from "vue-slick-carousel";
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, VueSlickCarousel, any>;
  export default component;
}
