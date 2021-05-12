<template>
  <section id="features">
    <div class="container">
      <div class="row">
        <slick-slide ref="slick" :options="slickFriends">
          <div class="slider-item">
            <div class="col-12 text-center">
              <h3>Tinyone features</h3>
              <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                aspernatur necessitatibus sed, cumque reprehenderit molestiae
                adipisci eligendi quidem sint alias ad dignissimos possimus!
                Maiores in incidunt consectetur? Voluptate, saepe fuga.
              </p>
            </div>
            <div
              class="col-12 col-lg-4 mb-5"
              v-for="item in 6"
              :key="item.index"
            >
              <div class="row">
                <div class="col-3">
                  <div class="icon-aside text-center">
                    <fa :icon="['fas', 'mobile-alt']" />
                  </div>
                </div>
                <div class="col-9 box-content">
                  <h4>Fully Responsive</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vitae eros eget tellus tristique bibendum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </slick-slide>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class FeaturesSection extends Vue {}
</script>
