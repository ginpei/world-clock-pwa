<template lang="pug">
  g.Spiral
    path(:d="d")
</template>

<script>
export default {
  props: [
    'settings',
  ],

  computed: {
    d() {
      const points = this.points;
      const linePoints = points.slice(1).map(point => `L ${point[0]} ${point[1]}`);
      const d = `M ${points[0][0]} ${points[0][1]} ${linePoints.join(' ')}`;
      return d;
    },

    /**
     * @param {object} settings
     * @param {number} settings.radius Maximum radius
     * @param {number} settings.gap Gap between lines
     * @param {number} settings.rounds How many times spiral rounds
     * @param {number} settings.rotation
     * @param {number} settings.resolution
     * @returns {Array} e.g. `[[100,100], [101,102], ...]`
     */
    points() {
      const {
        radius: maxR, gap, rounds, rotation, resolution,
      } = this.settings;
      const points = [];

      for (let i = 0; i < (resolution * rounds) + 1; i += 1) {
        const totalProgress = i / (resolution * rounds);
        const circleProgress = (i % resolution) / resolution;
        const r = (maxR - (gap * rounds)) + (gap * rounds * totalProgress);
        const deg = 2 * Math.PI * (circleProgress + (rotation / 360));
        const x = r * Math.cos(deg);
        const y = r * Math.sin(deg);
        points.push([x, y]);
      }

      return points;
    },
  },
};
</script>


<style lang="sass" scoped>
.Spiral

path
  fill: transparent
  stroke: tomato
</style>
