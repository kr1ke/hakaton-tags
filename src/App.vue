<template>
  <div id="app">
    <component :is="getLayout"></component>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    getLayout () {
      return this.$route.meta.layout
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles.scss";

#app{
 display: flex;
}


</style>
