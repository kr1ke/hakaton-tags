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


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



@media screen and (max-width: 2600px) {
  html {
    font-size: 16px;
  }
}

@media screen and (max-width: 1900px) {
  html {
    font-size: 15px;
  }
}

@media screen and (max-width: 1620px) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 1215px) {
  html {
    font-size: 13px;
  }
}

@media screen and (max-width: 1060px) {
  html {
    font-size: 12px;
  }
}

@media screen and (max-width: 1070px) {
  html {
    font-size: 11px;
  }
}


@media screen and (max-width: 767px) {
  html {
    font-size: 5vw;
  }
}

</style>
