<template>
  <div class="about">
    <button @click="section='articles'">Les actus</button> 
    <button @click="section='newarticle'">Ecrire un article</button> 

    <Articles v-if="section=='articles'"></Articles>
    <NewArticle v-if="section=='newarticle'"></NewArticle>  

  </div>
</template>

<script>
  
    import Articles from '@/components/Articles.vue'
    import NewArticle from '@/components/NewArticle.vue'

    export default {
        components: {
            Articles, NewArticle
        },
    data(){
        return {
            section: null
            }
        }
    }
</script>
