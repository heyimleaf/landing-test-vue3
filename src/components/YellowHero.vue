<template>
  <section class="yellow-hero">
    <div class="container pt-5">
      <VueSlickCarousel :dots="true" v-bind="heroYellow">
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
                {{ item.description }}
              </p>

              <div class="icons-aside">
                <fa :icon="['fab', 'apple']" />
                <fa :icon="['fab', 'android']" />
                <fa :icon="['fab', 'windows']" />
              </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-2 hero-img">
              <img src="../assets/images/ipad-white.png" alt="" />
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>
/
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class YellowHero extends Vue {
  contentSliders = [
    {
      title: "lorem",
      subtitle: "ipsum",
      content: "lorem ipsum dot",
    },

    {
      title: "lorem",
      subtitle: "ipsum",
      content: "lorem ipsum dot",
    },

    {
      title: "lorem",
      subtitle: "ipsum",
      content: "lorem ipsum dot",
    },

    {
      title: "lorem",
      subtitle: "ipsum",
      content: "lorem ipsum dot",
    },
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
