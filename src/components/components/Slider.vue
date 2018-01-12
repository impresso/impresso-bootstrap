<template lang="html">
  <div>

    <section>
      <h6>Year slider</h6>

      <vue-slider min="1750" max="2000" v-model="sliderValue"></vue-slider>

    </section>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  components: {
    vueSlider,
  },
  data() {
    return {
//      min: -6942499200, //"1750-01-01",
//      max: 946684800, //"2000-01-01",
//      sliderValue: [-4942499200, 846684800],
      smin: 1750, //"1750-01-01",
      smax: 2000, //"2000-01-01",
      sliderValue: [1850, 1950],
    };
  },
};
</script>

<style scoped lang="scss">
  .vue-slider-component .vue-slider-dot {
    background-color: black;
    border: 2px solid white;
    box-shadow: 0;
  }
</style>
