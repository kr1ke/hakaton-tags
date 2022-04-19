<template>
  <div class="header">
    <div class="container">
      <div class="header-content">
        <img class="header__logo" src="@/assets/image/home.svg">
        <ul class="header-nav">
          <img class="header-nav_img" src="@/assets/image/home.svg" alt="">
          <router-link to="/" class="header-nav--link">Главная</router-link>
        </ul>
        <ul class="header-nav">
          <img class="header-nav_img" src="@/assets/image/home.svg" alt="">
          <router-link class="header__login" to="/auth">Войти</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/assets/styles.scss";


.container{
  width: size(1500, 1920);
  margin: auto ;
}

a{
  color: black;
}
a:hover{
  color: red;
}
.header{
  background: #EBEBEB;
  padding-top: size(14, 1920);
  padding-bottom: size(14,1920);
}
.header__logo{
  width: size(140,1920);
  padding: 0;
  margin: 0;
}
img{
  width: 100%;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
}
.header-nav{
  padding-left: -100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  li{
    margin-left: 2vw;
  }
}
.header-nav_img{
  width: size(40,1920);
}
</style>
