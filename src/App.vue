<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mixins: [],
  data() {
    return {
      value: ''
    };
  },
  computed: {}
};
</script>

<style lang="scss">
@import "./css/app";
</style>
