<template>
  <div class="about">
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


