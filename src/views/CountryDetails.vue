<template>
  <!-- Usando el objeto countryInfo para almacenar data de la api -->
  <div>
     <img
      v-bind:src="`https://flagcdn.com/w320/${countryInfo.alpha2Code.toLowerCase()}.png`"
      alt=""
      class="mb-5"
    />
    <h1>{{ countryInfo.name.common }}</h1>
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-center"
      >
      <p class="fw-bold">Capital</p>
        <p class="me-5">{{ countryInfo.capital[0] }}</p>
      </li>

      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
      <p class="fw-bold">Area</p>
      <p class="me-5">{{ countryInfo.area }} km2</p>
      </li>
      <li class="list-group-item">
        <p class="fw-bold">Borders:</p>
        <p v-if="countryInfo.borders.length === 0">
          This country has no borders <br />
          <br />
        </p> 
         <p v-else v-for="(border, index) in countryInfo.borders" :key="index">
          <router-link :to="`/list/${border}`">{{ border }}</router-link>
        </p>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "CountryDetails",

  data() {
    return {
      /* details: "",
      countries: countriesData, */
      name:String,
      capital:String,
      alpha3Code:String,
      area:String,
      borders:[],
      alpha2Code:"",

      //Objeto que recibe data del API
      countryInfo: {},
     };
  },

  methods: {
    async getCountryByAlphaCode() {
      //apuntamos con el this.$route.params para recuperar el valor alpha3code de ese pais para buscar la info detallada de ese pais
      this.alpha3Code = this.$route.params.alpha3Code;
      const res = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${this.alpha3Code}`
      );
      const response = await res.json();

      this.name = response.name.common;
      this.capital = response.capital[0];
      this.area = response.area;
      this.borders = response.borders;
      this.alpha2Code = response.alpha2Code;
      this.countryInfo = response;
    },
  },

  mounted() {
    this.getCountryByAlphaCode();
  },

  computed: {
    countryCode() {
      return this.$route.params.alpha3Code;
    },
  },
  // Vigila o monitorea el estado de una funcion para detectar si ha canviado la data (reactividad)
  // En este caso si el valor de countryCode canvia dispara la funcion getCountryByAlphaCode de nuevo
  // Syntax: Dentro del watch object especificamos una funcion que va a monitorear a otra función. Esta otra funcion monitoreadora recibe 2 parametros (valor nuevo, valor antiguo)
  //   watch: {
  //   nameOfaFunctionThatYouWillName(newParam, oldParam){}
  // },
  watch: {
    countryCode(newCountryCode) {
      this.getCountryByAlphaCode();
    },
  },
};
</script>

<style></style>
