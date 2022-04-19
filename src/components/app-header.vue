<template>
  <div class="header">
    <div class="header-content">
      <img class="header-content__logo" src="../assets/image/logo.svg" alt="">
          <ul>
            <router-link to="/"><img src="../assets/image/home.svg" alt=""></router-link>
            <router-link to="/"><img src="../assets/image/admin.svg" alt=""></router-link>
          </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles.scss";

.header{
  width: size(150,1920);
  height: 100vh;
  background: #282C31;
  border-right: 2px solid #4D4D4D;
  box-sizing: border-box;
}
.header-content__logo{
  padding-top: size(60, 1920);

}



ul{
  height: size(600, 1920);
  width: size(150,1920);
  padding-top: size(300, 1920);
  display: flex;
  align-items: center;
  flex-direction: column;
}


</style>
