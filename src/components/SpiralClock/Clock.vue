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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from '@/components/SpiralClock/Board.vue';
import Spiral from '@/components/SpiralClock/Spiral.vue';

@Component({
  components: {
    Board,
    Spiral,
  },

  props: {
    now: Date,
    length: Number,
    longLength: Number,
  },
})
export default class extends Vue {
  now: Date;
  length: number;
  longLength: number;

  get spiralSettings() {
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
  }

  get hourPath() {
    const width = 10;
    return `M 0 ${width} l 0 ${-this.length - width}`;
  }

  get hourTransform() {
    return `rotate(${this.hourRotation})`;
  }

  get hourRotation() {
    const hProgress = (this.now.getHours() % 12) / 12;
    const mProgress = this.now.getMinutes() / 60;
    const rotate = 360 * (hProgress + (mProgress / 12));
    return rotate;
  }

  get minutePath() {
    const width = 10;
    return `M 0 ${width} l 0 ${-this.longLength - width}`;
  }

  get minuteTransform() {
    const mProgress = this.now.getMinutes() / 60;
    const rotate = 360 * mProgress;
    return `rotate(${rotate})`;
  }
}
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
