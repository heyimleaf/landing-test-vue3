<template>
  <navbar-header />
  <yellow-hero />
  <features-section />
  <newsletter />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarHeader from "./components/NavbarHeader.vue";
import YellowHero from "./components/YellowHero.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import Newsletter from "./components/Newsletter.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    NavbarHeader,
    YellowHero,
    FeaturesSection,
    Newsletter,
    Footer,
  },
})
export default class App extends Vue {}
</script>
