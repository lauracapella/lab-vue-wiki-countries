<template>
  <div>
  
    <div v-for="(country, index) in countries" :key="index">
      <!-- Usando una ruta estatica! -->
      <!-- <router-link :to="country.alpha3Code">
      {{ country.name.common }}
    </router-link> -->

      <!-- Usando una ruta dinamica -->
      <router-link :to="`/list/${country.alpha3Code}`">
        {{ country.name.common }}
      </router-link>
    
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import countriesData from "../../public/countries.json";
export default {
  name: "CountriesList",
  data() {
    return {
      countries: countriesData,
    };
  },
  
  
};
</script>

<style></style>
