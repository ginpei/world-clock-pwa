<template lang="pug">
  div
    p
      label
        | Radius:
        input(v-model="radius" type="range" min="50" max="150")
        span.value {{radius}}
      br
      label
        | Gap:
        input(v-model="gap" type="range" min="2" max="150")
        span.value {{gap}}
      br
      label
        | Rounds:
        input(v-model="rounds" type="range" min="1" max="20")
        span.value {{rounds}}
      br
      label
        | Rotation:
        input(v-model="rotation" type="range" min="0" max="360")
        span.value {{rotation}}
      br
      label
        | Resolution:
        input(v-model="resolution" type="range" min="3" max="60")
        span.value {{resolution}}

    svg(width="300" height="300")
      g(transform="translate(150, 150)")
        circle(:r="radius" fill="tomato" fill-opacity="0.1")
        path(:d="rulerD" stroke="skyblue")
        Spiral(:settings="spiralSettings")
</template>

<script>
import Spiral from '@/components/Spiral';

export default {
  name: 'HelloWorld',

  components: {
    Spiral,
  },

  data() {
    return {
      radius: 100,
      gap: 30,
      rounds: 2,
      rotation: 0,
      resolution: 60,
    };
  },

  computed: {
    spiralSettings() {
      return {
        radius: this.radius,
        gap: this.gap,
        rounds: this.rounds,
        rotation: this.rotation,
        resolution: this.resolution,
      };
    },

    rulerD() {
      return 'M 0 0 l 100 0 M 10 -5 l 0 10 M 20 -5 l 0 10 M 30 -5 l 0 10' +
        ' M 40 -5 l 0 10 M 50 -5 l 0 10 M 60 -5 l 0 10 M 70 -5 l 0 10' +
        ' M 80 -5 l 0 10 M 90 -5 l 0 10 M 100 -5 l 0 10';
    },
  },
};
</script>

<style lang="sass" scoped>
label
  display: inline-block
  text-align: right
  width: 300px

input
  // width: 150px;

.value
  display: inline-block;
  width: 40px
</style>
