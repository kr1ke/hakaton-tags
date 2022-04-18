<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header__logo">
          LOGO
        </div>
        <ul class="header-nav">
          <router-link to="/" class="header-nav--link">Гавная</router-link>
        </ul>
        <router-link class="header__login" to="/auth">Войти</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
  background: #EBEBEB;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-nav{
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  li{
    margin-left: 2vw;
  }
}
</style>
