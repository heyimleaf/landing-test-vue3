<template>
  <section class="yellow-hero">
    <div class="container pt-5">
      <VueSlickCarousel :dots="true">
        <div
          class="item-yellow"
          v-for="(item, key) in contentSliders"
          :key="key"
        >
          <div class="row">
            <div class="col-12 col-lg-6 order-2 content-hero">
              <h1>{{ item.title }}</h1>

              <h2>
                {{ item.subtitle }}
              </h2>

              <p>
                {{ item.content }}
              </p>

              <div class="icons-aside">
                <fa :icon="['fab', 'apple']" />
                <fa :icon="['fab', 'android']" />
                <fa :icon="['fab', 'windows']" />
              </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-2 hero-img">
              <img :src="item.image" />
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class YellowHero extends Vue {
  contentSliders = [
    {
      title: "Inspire your inspiration",
      subtitle:
        "Simple to use for your app, products showcase and your inspiration",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit ",
      image: require("../assets/images/ipad-white.png"),
    },

    //   {
    //   title: "Inspire your inspiration",
    //   subtitle:
    //     "Simple to use for your app, products showcase and your inspiration",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit ",
    //   image: require("../assets/images/ipad-white.png"),
    // },

    //   {
    //   title: "Inspire your inspiration",
    //   subtitle:
    //     "Simple to use for your app, products showcase and your inspiration",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit ",
    //   image: require("../assets/images/ipad-white.png"),
    // },
  ];

  heroYellow = {
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    centerMode: true,
    infinite: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          infinite: false,
          centerMode: true,
          dots: true,
          arrows: true,
        },
      },
    ],
  };
}
</script>
