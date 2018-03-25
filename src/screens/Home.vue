<template lang="pug">
  div.Home
    HomeHeader
    SpiralClock(:now="now" :length="100" :longLength="120")
    TimeSlider
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HomeHeader from '@/components/HomeHeader.vue';
import SpiralClock from '@/components/SpiralClock/Clock.vue';
import TimeSlider from '@/components/TimeSlider.vue';

@Component({
  components: {
    HomeHeader,
    SpiralClock,
    TimeSlider,
  },
})
export default class extends Vue {
  now = new Date();
  tmTick = 0;

  mounted() {
    this.tmTick = setInterval(() => this.tick(), 100);
  }

  destroyed() {
    clearInterval(this.tmTick);
    this.tmTick = 0;
  }

  tick() {
    this.now = new Date();
  }
}
</script>

<style lang="sass" scoped>
.Home
  border: 1px solid #ccc
  width: 300px
</style>
