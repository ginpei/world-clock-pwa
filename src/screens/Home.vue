<template lang="pug">
  div.Home
    HomeHeader
    SpiralClock(:now="now" :length="100" :longLength="120")
    TimeSlider
</template>

<script lang="ts">
import Vue from 'vue';
import HomeHeader from '@/components/HomeHeader.vue';
import SpiralClock from '@/components/SpiralClock/Clock.vue';
import TimeSlider from '@/components/TimeSlider.vue';

export default Vue.extend({
  components: {
    HomeHeader,
    SpiralClock,
    TimeSlider,
  },

  data() {
    return {
      now: new Date(),
      tmTick: 0,
    };
  },

  mounted() {
    this.tmTick = setInterval(() => this.tick(), 100);
  },

  destroyed() {
    clearInterval(this.tmTick);
    this.tmTick = 0;
  },

  methods: {
    tick() {
      this.now = new Date();
    },
  },
});
</script>

<style lang="sass" scoped>
.Home
  border: 1px solid #ccc
  width: 300px
</style>
