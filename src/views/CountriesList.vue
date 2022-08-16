<template>
  <div class="container">
    <h1 class="text-center my-3">Country List</h1>
        <div v-if="this.countries" class="row">

    <!--     <div v-if="this.countries" class="row">
 -->
    <div class="col-4">
      <ul class="list-group">
        <!-- Usando una ruta estatica! -->
        <!-- <router-link :to="country.alpha3Code">
      {{ country.name.common }}
    </router-link> -->

        <!-- Usando una ruta dinamica -->
        <router-link
          :to="`/list/${country.alpha3Code}`"
          v-for="(country, index) in countries"
          :key="index"
        >
          <li class="list-group-item d-flex flex-column justify-content-center">
            <img
              v-bind:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              alt=""
              class="flagImg"
            />
            <p class="text-center fw-bold">{{ country.name.common }}</p>
          </li>
        </router-link>
      </ul>
    </div>

    <div class="col-8">
      <router-view />
    </div>
  </div>
   <div v-else class="row">
      <Spinner text="Loading Countries..." />
    </div>
    </div>
</template>

<script>
export default {
  name: "CountriesList",
  
  data() {
    return {
      // Definimos valor null donde recibirà data de la Api
      countries: null,
    };
  },

  methods: {
    async fetchCountries(){
      const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const response = await res.json();
      this.countries = response.sort((countryA, countryB) => {
        return countryA.name.common.localeCompare(countryB.name.common);
      })
    }
  },

//Usamos el hook created para que llamar a la Api al crear el componente antes de pintar nada en UI
  created() {
    this.fetchCountries();
  }
};
</script>

<style scoped>
.flagImg {
  width: 150px;
}
</style>
