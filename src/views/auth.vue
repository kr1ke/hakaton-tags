<template>
  <div class="auth">
    <div class="auth-wrapper">
     <div class="auth-title-div">
        <span class="auth__title">Авторизация</span>
     </div>
      <form action="#" @submit.prevent="sendAuth" class="auth-form">
        <div class="input-item">
          <label for="login" class="input-item__label"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 490.1 490.1" style="enable-background:new 0 0 490.1 490.1;" xml:space="preserve">
<g>
	<g>
		<path d="M245,261.75c71.9,0,131.4-57.3,131.4-130.3S316.9,0.05,245,0.05s-131.4,57.3-131.4,130.3S173.1,261.75,245,261.75z
			 M245,40.75c50,0,90.7,40.7,90.7,89.7s-40.7,89.6-90.7,89.6s-90.7-40.7-90.7-89.7S195,40.75,245,40.75z"/>
		<path d="M333.6,274.25c-8.3-2.1-16.7,0-21.9,6.3l-66.7,76.1l-66.7-76.1c-5.2-6.3-14.6-8.3-21.9-6.3C61.5,305.55,0,382.65,0,469.15
			c0,11.5,9.4,20.9,20.9,20.9h448.3c11.5,0,20.9-9.4,20.9-20.9C490,382.65,428.5,305.55,333.6,274.25z M42.7,449.35
			c8.4-57.3,50.1-106.3,114.7-131.3l73,83.4c7.3,9.4,22.9,9.4,30.2,0l73-83.4c63.6,25,106.4,75,114.7,131.3H42.7z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g></g>
</svg></label>
          <input type="text" id="login" v-model="name" class="input-item__input" placeholder="Логин">
        </div>
        <div class="input-item">
          <label for="password" class="input-item__label"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 225 225" style="enable-background:new 0 0 225 225;" xml:space="preserve">
<path d="M215.2,64.961h-32.301V0H42.102v64.961H9.8V225H215.2V64.961z M57.102,15h110.797v49.961H57.102V15z M200.2,210H24.8V79.961
	H200.2V210z M93.635,161.402v18.059c0,10.376,8.442,18.817,18.818,18.817s18.817-8.441,18.817-18.817v-18.059
	c6.876-5.616,11.003-14.128,11.003-23.124c0-16.443-13.377-29.82-29.821-29.82c-16.443,0-29.821,13.377-29.821,29.82
	C82.632,147.273,86.76,155.785,93.635,161.402z M112.453,123.459c8.172,0,14.821,6.648,14.821,14.82
	c0,5.221-2.802,10.116-7.312,12.775l-3.691,2.176v26.231c0,2.105-1.712,3.817-3.817,3.817c-2.105,0-3.818-1.712-3.818-3.817V153.23
	l-3.69-2.176c-4.511-2.66-7.313-7.555-7.313-12.776C97.632,130.106,104.281,123.459,112.453,123.459z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

</label>
          <input type="password" v-model="password" id="password" class="input-item__input" placeholder="Пароль">
        </div>
        <input type="submit" class="input-item__button" value="Войти">
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
$button:#7F7FD5;
$border:#22272d;
  .auth {
    width:90vw;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    background: #212427; ;
  }
  .auth-wrapper {
     height: auto;
     color: white;
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
  }
  .auth-title-div{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .auth__title{

     font-size:1.3em;
  }
  .input-item__input{
  width: 100%;
  height:40px;
  border-radius:3px;
  margin:5px 0;
  outline: none;
    background:transparent; 
     border:2px solid $border;
  padding-left:45px;
  color:$button;
  }
 .input-item__input[type="text"]:focus, .input-item__input[type="password"]:focus {
  border:1px solid white;
  box-shadow:none;
}
.input-item__input:focus .user{
  background:white !important;
   
} 
.input-item__button{
   width: 100%;
  background:$button;
  border:none;
  color:white;
  text-align:center;
  font-size:1em;
  cursor:pointer;
  margin:5px 0;
  height:40px;
  border-radius:3px;
  margin:px 0;
  outline: none;
transition: all 500ms ease; 
}
.input-item__button:hover {
	background: rgba(0,0,0,0);
	color: #3a7999;
	box-shadow: inset 0 0 0 3px #3a7999;
}

.input-item__label{
  position:absolute;
  width:30px;
  height:30px;
  margin-top:10px;
  padding:5px;
  
  &::after {
    content:""; 
    width:2px;
    height:30px;
    position:absolute;
    background:$border; 
    top:0px; 
    left:105%;
  }
  svg{
    fill: white;
    width: 100%;
    margin-left: 2px;
  }
}

@media (max-width: 1000px) {

  .auth-wrapper {
     height: auto;
     color: white;
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35vw;
  }




}
</style>
