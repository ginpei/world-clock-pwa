<template lang="pug">
  div.TimeSlider
    svg(width="300" height="50")
      g
        path(:d="path")
</template>

<script>
export default {
  computed: {
    path() {
      let d = '';

      for (let i = 0; i < 300; i += 1) {
        d += `M ${i * 10} 0 l 0 50 `;
      }

      return d;
    },
  },
};
</script>

<style lang="sass" scoped>
.TimeSlider

path
  stroke: #ccc
</style>
