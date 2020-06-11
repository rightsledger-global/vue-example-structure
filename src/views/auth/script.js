import service from '../../utils/api/service'

export default {
  data() {
    return{
      modelLogin:{
        email : "",
        password : ""
      }
    }
  },
  components: {},
  created() {},
  methods:{

    /**
       * Developer : Chea Vanto
       * Description : call api login
       */
    async login(){
      let body = {
        username : this.modelLogin.email,
        passwords : this.modelLogin.password
      }
      
      await service.authentication(body)
      .then((res) => {
        if(res.response && res.response.code == 200){
          this.$cookies.set("user",res.results)
          location.reload()
        }else{
          alert(res.message)
        }
      })
    },

  }
};