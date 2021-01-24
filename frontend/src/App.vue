<template>
  <div id="app">
  
  <ul>
    <li @click="test">pseudo : {{ pseudo }}</li>
    <li @click="test">nom : {{ nom }}</li>
    <li @click="test">prenom : {{ prenom }}</li>
  </ul>

  <span>
    <label for="new-pseudo"> Pseudo : </label>
    <input id="new-pseudo" type='text' v-model='pseudo' />
  </span>    
    <label for="new-name"> Nom : </label>
    <input id="new-name" type='text' v-model='nom' />
  </span>    
    <label for="new-firstname"> Prénom : </label>
    <input id="new-firstname" type='text' v-model='prenom' />
  </span>


    <div id="nav"> 
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

// envoie le payload axios.post

<script>
  import axios from "axios";
  export default {
    data(){
      return{
        pseudo:'pseudo',
        nom:'nom',
        prenom:'prenom',
      }
    },

    methods:{
      test(){
        axios.get('http://localhost:3000/api/auth/abc')
        .then(res=>{
          console.log(res)
          this.pseudo=res.data[0].pseudo,
          this.nom=res.data[0].nom,
          this.prenom=res.data[0].prenom
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
