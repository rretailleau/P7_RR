<template>
  
  <form @submit.prevent="signup"> 
    <h1>Signup</h1>
    <span>
      <label for="new-pseudo"> Pseudo : </label>
      <input id="new-pseudo" type='text' v-model='pseudo' />
    </span>
    <span>    
      <label for="new-password"> Password: </label>
      <input id="new-password" type='text' v-model='password' />
    </span>
     <span>    
      <label for="new-mail"> mail: </label>
      <input id="new-mail" type='text' v-model='mail' />
    </span>

    <div>
      <button type="submit"> envoyer </button>
    </div>

  </form>


 </template>

// envoie le payload axios.post


<script>
  
import axios from "axios";
export default {
    name: 'Signup',
    data(){
      return{
        pseudo:'',
        mail:'',
        password:'',
      }
    },

    methods:{
     
      signup(){
        let payload = {
          pseudo: this.pseudo,
          mail: this.mail,
          password: this.password,
        }
        console.log(payload)
        axios.post('http://localhost:3000/api/signup', payload)
        .then(res => {
          console.log(res)
          
        })
      },
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
