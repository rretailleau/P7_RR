<template>
  <div id="app">
  
    
    <div id="nav"> 
      <router-link to="/">Connexion</router-link> |
      <router-link to="/about" v-if='user.id>0' >Actualités</router-link>
    </div>

    <router-view/>

  </div>
</template>

// envoie le payload axios.post

<script>
  import {mapState} from 'vuex';
  import axios from "axios";
  export default {
    data(){
      return{
        pseudo:'',
        password:'',
      }
    },
    mounted()
    {
      if (!sessionStorage.getItem('token')&& this.$router.currentRoute.path != '/')
      {
        this.$router.push('/')
      }

    },
    computed:{
      ...mapState(['user']),
    },

    methods:{
      test(){
        axios.get('http://localhost:3000/api/auth/abc')
        .then(res => {
          console.log(res)
          this.pseudo=res.data.pseudo,
          this.password=res.data.password
        })
      },
     
    },
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
