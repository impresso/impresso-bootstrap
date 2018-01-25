<template lang="html">
  <div>
    <h6>Year slider</h6>
    <vue-slider v-bind:min="1750" v-bind:max="2000" v-model="dateRange"></vue-slider>
    <b-row>
      <b-col>
          <b-form-group label="Start date">
            <b-form-input v-model:value="dateRange[0]" type="number"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="End date">
            <b-form-input v-model:value="dateRange[1]" type="number"></b-form-input>
          </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
  components: {
    'vue-slider': VueSlider,
  },
  data() {
    return {
      smin: 1750, // "1750-01-01",
      smax: 2000, // "2000-01-01",
      dateRange: [1850, 1950],
    };
  },
};
</script>

<style scoped lang="scss">

</style>
