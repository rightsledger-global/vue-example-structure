<template>
  <div>
    <!-- not yet login -->
      <router-view v-if="isLogging"/>
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
<style>
*{
  box-sizing: border-box;
}
body{
  font-family: 'Roboto', sans-serif;
  font-weight: 300 !important;
  margin:0;
  padding: 0;
}
</style>