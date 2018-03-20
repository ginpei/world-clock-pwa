<template lang="pug">
  g.Board
    circle.boardBack(:r="longLength")
    path.index(v-for="n in indexes"
      :d="indexPath(n)" :transform="indexTransform(n)")
</template>

<script>
export default {
  props: [
    'longLength',
  ],

  data() {
    return {
      indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },

  methods: {
    indexPath() {
      return `M 0 ${this.longLength - 5} l 0 -5`;
    },

    indexTransform(n) {
      const rotate = 360 * (n / 12);
      return `rotate(${rotate})`;
    },
  },
};
</script>

<style lang="sass" scoped>
.Board

.boardBack
  fill: #eee

.index
  stroke: #999
</style>
