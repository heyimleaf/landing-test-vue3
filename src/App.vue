<template>
  <navbar-header />
  <yellow-hero />
  <features-section />
  <newsletter />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavbarHeader from "./components/NavbarHeader.vue";
import YellowHero from "./components/YellowHero.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import Newsletter from "./components/Newsletter.vue";

@Options({
  components: {
    NavbarHeader,
    YellowHero,
    FeaturesSection,
    Newsletter,
  },
})
export default class App extends Vue {}
</script>
