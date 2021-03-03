<template>
  <div @submit.prevent="article">
    <h1>{{ reseauInterne }}</h1>
        <h2>
            Bienvenue dans {{ reseauInterne }} ! le réseau des collaborateurs du groupe Groupomania
        </h2>

        <ul class="description"> Actuellement sur {{ reseauInterne }}
            <li v-for="item in article ">
                <a :href="item.url">{{ item.title }}</a> : {{ item.content }}
                <div>{{ item.commentaires }}</div> 
            </li> 
        </ul>

        <footer class="footer">
            <p> {{ copyright }}</p>
        </footer>
  </div>
</template>

<script>
  
import axios from "axios";
export default {
    name: 'Articles',
    data(){
      return{
        articles:[]
      }
    },

    mounted()
    {
      this.all();
    },

    methods:{
     
      all(){
        axios.get('http://localhost:3000/api/articles')
        .then(res => {
          console.log(res)
          this.articles = res.data.articles;
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