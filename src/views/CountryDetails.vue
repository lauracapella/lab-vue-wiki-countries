<template>
  <h1>hola</h1>
  <div v-for="(country, index) in countries" :key="index">
   <!--  <h1> codigo {{country.alpha3Code}}</h1>
    <h1> codigo params {{$route.params.details}}</h1> -->


    <div v-if="country.alpha3Code === `${$route.params.details}`">
     {{country.name.common}}
     {{country.capital}}
     {{country.area}}
     {{country.borders}}
    </div>

      <!-- Usando una ruta estatica! -->
      <!-- <router-link :to="country.alpha3Code">
      {{ country.name.common }}
    </router-link> -->

      <!-- Usando una ruta dinamica -->
      
       <!--  {{ country.alpha3Code }} -->
        
      
    
    </div>
  <!-- <h1>{{country.alpha3Code}}</h1> -->
</template>

<script>
import countriesData from "../../public/countries.json";
export default {
   name: 'CountryDetails',

    /* props:{
    countries: Array,
     }  
 */
  data(){
    return {
      details: "",
      countries: countriesData,
    }
  },

  mounted(){
    console.log("routes:", this.$route.params.details)
    console.log("code:", countries.alpha3Code)
    this.details =  this.$route.params.details 
    const codigoPais = this.details
    return codigoPais;
    /* const route = useRoute();
    console.warn("route", route.params); */
  },

 
}
</script>


<style>

</style>