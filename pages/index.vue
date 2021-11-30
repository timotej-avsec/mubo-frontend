<template>
  <div class="">
    <div class="container d-flex flex-column justify-content-start align-items-center p-0 pt-5 mt-5" style="height: 100vh; z-index: 1">
      
      <h1 class="logo mt-5">Mubo - URL shortener</h1>
         <b-input-group class="w-100 ">
          <b-form-input class="input__field"></b-form-input>
          <b-input-group-append>
            <b-button class="action-button">MAKE IT SHORT</b-button>
          </b-input-group-append>
        </b-input-group>
    </div>
    <footer-waves style="z-index: -1"/>
  </div>
</template>

<script>
import FooterWaves from '../components/FooterWaves.vue'
export default {
  components: { FooterWaves },}
</script>

<style lang="scss">
body{
  background-color: #fcd581;
  padding: 0;
}

.input__field{
  padding: 20px;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: rgba(white, 0.9);
}

.action-button{
  background-color: #F25A27;
  border-color: white;

  &:hover{
    background-color: #FF7142;
  }
}

.logo{
  font-weight: bolder;
  margin-bottom: 3rem;
  font-size: 3rem;
  text-align: center;
}


</style>
