<template>
  <h1>hola</h1>
 <!-- <h1>{{country.alpha3Code}}</h1> -->
</template>

<script>
export default {
   name: 'CountryDetails',

    /* props:{
    countries: Array,
     }  
 */
  data(){
    return {
      details: ""
    }
  },

  mounted(){
    console.log("routes:", this.$route.params.details)
    this.details =  this.$route.params.details
  }
}
</script>


<style>

</style>