<template>
  <section id="features">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center content-feature">
          <h3>Tinyone features</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
            venenatis.
          </p>
        </div>
        <div
          class="col-12 col-lg-4 box-item"
          v-for="(item, key) in boxesFeatures"
          :key="key"
        >
          <div class="row">
            <div class="col-4">
              <div class="icon-aside text-center">
                <fa :icon="item.icon" />
              </div>
            </div>
            <div class="col-8 box-content">
              <h4>{{ item.title }}</h4>
              <p>
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class FeaturesSection extends Vue {
  boxesFeatures = [
    {
      icon: "mobile-alt",
      title: "Fully Responsive",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },

    {
      icon: "lemon",
      title: "Fully Layered PSD",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },

    {
      icon: "folder",
      title: "Font Awesome Icons",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },
    {
      icon: "code",
      title: "HTML5 & CSS3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },
    {
      icon: "envelope",
      title: "Email Template",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },
    {
      icon: "bookmark",
      title: "Free to download",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },
  ];
}
</script>
