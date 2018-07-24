<template lang="html">
  <div>
    <h1>Slider Component</h1>
    <h2>ZoomSlider</h2>
    <br>
    <b-row>
      <b-col>
        <b-form-input v-model:value="zoomLevel" type="number"></b-form-input>
      </b-col>
      <b-col>
        <vue-slider v-model="zoomLevel"
          :min="20"
          :max="100"
          :piecewise=false
          :piecewiseLabel=false
          :interval="10",
          tooltip="hover"
          formatter="ZOOM {value} %"
          :width="1"
          :height="200"
          :dotSize="8"
          direction="vertical">
        </vue-slider>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
  components: {
    // 'zoom-slider': ZoomSlider,
    'vue-slider': VueSlider,
  },
  data() {
    return {
      zoomLevel: 50,
      // data: [
      //   "Fit Page",
      //   "1:1",
      // ],
    };
  },
};
</script>

<style scoped lang="sass">
</style>
