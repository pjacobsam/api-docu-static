<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto mt-5">
          <h3 class="text-center">Signin / Login</h3>
        <div>
          <label for="email" class="form-label"></label>
          <input v-model="email" type="email" id="email" class="form-control" placeholder="Enter email" />
        </div>
        <div>
          <label for="password" class="form-label"></label>
          <input v-model="password" type="password" id="password" class="form-control" placeholder="Enter password" />
        </div>
        <div>
          <button @click="login" type="submit" class="btn btn-primary btn-block w-100 mt-3">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginPage",
  data(){
      return {
          email:"",
          password:""
      }
  },
  methods:{
      async login(){
          try{
              const response = await axios.post("http://localhost:2010/api/v2013/authentication/token",{
                  email: this.email,
                  password: this.password
              })
              const token = response.data.authenticationToken;
              localStorage.setItem("authToken", token);
              this.$router.push("/")
          }catch(error){
              console.error("An error occurred", error)
          }
      }
  }
};
</script>

<style scoped></style>
