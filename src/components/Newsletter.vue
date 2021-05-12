<template>
  <section id="newsletter">
    <div class="container">
      <div class="row">
        <h3>Keep in touch with us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
          venenatis.
        </p>
        <div class="form-news">
          <div class="row">
            <div class="col-12 col-lg-9 pb-3">
              <input
                type="mail"
                class="form-control"
                placeholder="Enter your e-mail to update"
                required
              />
            </div>
            <div class="col-12 col-lg-3 pb-3">
              <button type="submit" class="btn btn-primary w-100">
                submit
              </button>
            </div>
          </div>
          <div class="col-12 m-auto">
            <div class="icons-news">
              <a target="_blank" href="#">
                <fa :icon="['fab', 'facebook']" />
              </a>
              <a target="_blank" href="#">
                <fa :icon="['fab', 'twitter']" />
              </a>
              <a target="_blank" href="#">
                <fa :icon="['fab', 'google-plus']" />
              </a>
              <a target="_blank" href="#">
                <fa :icon="['fab', 'pinterest']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
