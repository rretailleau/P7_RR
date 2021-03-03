<template>
  <div class="home">
    <button @click="section='signup'">s'enregistrer</button> 
    <button @click="section='login'">se connecter</button> 

    <login v-if="section=='login'"></login>
    <signup v-if="section=='signup'"></signup>  

  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
export default {
  
  components: {
   Login, Signup
  },
  data(){
    return {
      section: null
    }
    
  }

}
</script>
