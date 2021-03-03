<template>

<form> 
    <h1>Ecrire un nouvel article</h1>

    <span>
        <label for="Titre"> Titre : </label>
        <input id="titre" type='text' v-model='titre' />
    </span>

    <span>    
        <label for="media"> media: </label>
        <input id="media" type='text' v-model='media' />
    </span>
  
    <span>    
        <label for="contenu"> contenu: </label>
        <textarea id="contenu" type='text' v-model='contenu' rows="20" cols="100" />
    </span>

  <div>
      <button type="submit"> envoyer </button>
  </div>

</form>
</template>

<script>
  
import axios from "axios";
export default {
    name: 'NewArticle',
    data(){
      return{
        titre:'',
        contenu:'',
        media:'',
      }
    },

    methods:{
     
      newarticle(){
        let payload = {
          titre: this.titre,
          contenu: this.contenu,
          media: this.media
        }
        axios.post('http://localhost:3000/api/auth/newarticle', payload)
        .then(res => {
          console.log(res)
          
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
  
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>