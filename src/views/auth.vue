<template>
  <div class="auth">
    <div class="auth-wrapper">
      <span class="auth__title">Авторизация</span>
      <form action="#" @submit.prevent="sendAuth" class="auth-form">
        <div class="input-item">
          <label for="login" class="input-item__label"></label>
          <input type="text" id="login" v-model="name" class="input-item__input" placeholder="Лоигн">
        </div>
        <div class="input-item">
          <label for="password" class="input-item__label"></label>
          <input type="password" v-model="password" id="password" class="input-item__input" placeholder="Пароль">
        </div>
        <input type="submit" value="Войти">
        {{errors}}
      </form>
    </div>
  </div>
</template>

<script>
import {api} from "../api/api.js"
export default {
  data () {
    return {
      name: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    async sendAuth() {
      try {
        const req = await api.post(`/api/login?name=${this.name}&password=${this.password}`)
        console.log(req)
        if(req.status === 200) {
          localStorage.setItem('token', req.data.token)
          this.errors = ''
          this.$router.push('/admin')
          // перекидываю в админку
        } else {
          this.errors = 'Неверный логин или пароль'
        }
      } catch (e) {
        console.log(e.message)
        this.errors = 'Неверный логин или пароль'
      }
    }
  },
  watch: {
    user: function () {
      console.log(this.user)

    },
    deep: true
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    width: 100%;
    height: 100%;
  }
  .auth-wrapper {
    border: 1px solid red;
    width: 50%;
    height: 50%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
</style>
