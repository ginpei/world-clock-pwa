<template lang="pug">
  div.SpiralClock
    svg(width="300" height="300")
      g(transform="translate(150, 150)")
        Board(:longLength="longLength")
        path.hour(:d="hourPath" :transform="hourTransform")
        path.minute(:d="minutePath" :transform="minuteTransform")
        g(:transform="hourTransform")
          Spiral(:settings="spiralSettings")
</template>

<script>
import Board from '@/components/SpiralClock/Board';
import Spiral from '@/components/SpiralClock/Spiral';

export default {
  components: {
    Board,
    Spiral,
  },

  props: [
    'now',
    'length',
    'longLength',
  ],

  computed: {
    spiralSettings() {
      const tzOffset = this.now.getTimezoneOffset();
      // tz  |  deg
      // -12 -> -360
      //   0 ->    0
      //  12 ->  360
      const rotation = 270 + (tzOffset / 2);

      return {
        rotation,
        radius: this.length,
        gap: 20,
        rounds: 2,
        resolution: 60,
      };
    },

    hourPath() {
      const width = 10;
      return `M 0 ${width} l 0 ${-this.length - width}`;
    },

    hourTransform() {
      return `rotate(${this.hourRotation})`;
    },

    hourRotation() {
      const hProgress = (this.now.getHours() % 12) / 12;
      const mProgress = this.now.getMinutes() / 60;
      const rotate = 360 * (hProgress + (mProgress / 12));
      return rotate;
    },

    minutePath() {
      const width = 10;
      return `M 0 ${width} l 0 ${-this.longLength - width}`;
    },

    minuteTransform() {
      const mProgress = this.now.getMinutes() / 60;
      const rotate = 360 * mProgress;
      return `rotate(${rotate})`;
    },
  },
};
</script>

<style lang="sass" scoped>
.SpiralClock

.hour
  stroke: #333
  stroke-width: 10px

.minute
  stroke: #333
  stroke-width: 2px
</style>
