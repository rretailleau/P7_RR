<template>
<form @submit.prevent="login"> 
  <h1>Login</h1>
  <span>
    <label for="new-pseudo"> Pseudo : </label>
    <input id="new-pseudo" type='text' v-model='pseudo' />
  </span>
  <span>    
    <label for="new-password"> Password: </label>
    <input id="new-password" type='text' v-model='password' />
  </span>
  <div>
      <button type="submit"> envoyer </button>
  </div>

  </form>
</template>

<script>
import {mapMutations} from 'vuex';
import axios from "axios";
export default {
    name: 'Login',
    data(){
      return{
        pseudo:'',
        password:'',
      }
    },

    methods:{
      ...mapMutations(['initUser']),
      login(){
        let payload = {
          pseudo: this.pseudo,
          password: this.password,
        }
        axios.post('http://localhost:3000/api/users/login', payload)
        .then(res => {
          this.initUser(res.data.user)
          let token=res.data.token;
          sessionStorage.setItem('token', token);
          
        })
        .catch(err=>{
          sessionStorage.removeItem('token')
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
