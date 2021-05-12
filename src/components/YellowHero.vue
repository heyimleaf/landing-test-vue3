<template>
  <section class="yellow-hero">
    <div class="container pt-5">
      <div class="row">
        <div class="col-12 col-lg-6 order-2 content-hero">
          <h1>Inspire your inspiration</h1>

          <h2>
            Simple to use for your app, products showcase and your inspiration
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
            venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu
            et eros porta lobortis sit
          </p>
          <i class="fas fa-address-card"></i>
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
  </section>
</template>
