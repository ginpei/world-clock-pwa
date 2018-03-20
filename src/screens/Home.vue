<template lang="pug">
  div.Home
    HomeHeader
    SpiralClock(:now="now" :length="100" :longLength="120")
    TimeSlider
</template>

<script>
import HomeHeader from '@/components/HomeHeader';
import SpiralClock from '@/components/SpiralClock/Clock';
import TimeSlider from '@/components/TimeSlider';

export default {
  components: {
    HomeHeader,
    SpiralClock,
    TimeSlider,
  },

  data() {
    return {
      now: new Date(),
    };
  },

  mounted() {
    this.startedAt = new Date();
    this.tmTick = setInterval(() => this.tick(), 100);
  },

  destroyed() {
    clearInterval(this.tmTick);
    this.tmTick = null;
  },

  methods: {
    tick() {
      this.now = new Date();
    },
  },
};
</script>

<style lang="sass" scoped>
.Home
  border: 1px solid #ccc
  width: 300px
</style>
