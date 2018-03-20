<template lang="pug">
  header.HomeHeader
    div.left
      button Reset
    div.right
      button Manage
</template>

<script>
export default {
};
</script>

<style lang="sass" scoped>
.HomeHeader
  display: grid
  grid-template-areas: "left right"

.left
  grid-area: left
  text-align: left

.right
  grid-area: right
  text-align: right
</style>
