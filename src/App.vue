<template>
  <div>
    <!-- not yet login -->
    <div v-if="isLogging">
      <router-view/>
    </div>
    <!-- logged in -->
    <div v-else>
      <Topnav/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Topnav from "./components/topnav"
import Footer from "./components/footer"

export default {
  data(){
    return{
      isLogging : false
    }
  },
  components:{
    Topnav,
    Footer
  },
  created(){
    this.checkAuth()
  },
  methods:{
    checkAuth(){
      let login = this.$root.$route.name === "Auth"
      login?this.isLogging = true:this.isLogging = false
    }
  }
}
</script>