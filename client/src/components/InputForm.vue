<template lang="html">
  <div class="">
    <template lang="html">
    <form class="" v-on:submit="" method="post">

      <label for="name">Name:</label>
      <input type="text" id="name"  required/>

      <label for="age">Age:</label>
      <input type="number" id="age"  required/>

      <label for="country_select">Country:</label>
        <select id="country_select" v-model="selectedCountry">
          <option disabled value="">Select a country</option>
          <option v-for="country in countries" :value="country">{{country.name}}</option>
        </select>

      <label for="message">Message:</label>
      <input type="text" id="message"  required/>

      <input type="submit" value="Send Message!" id="save"/>
    </form>
  </template>
  </div>
</template>

<script>

import MessageService from '@/services/MessageService.js'


export default {
  name: 'input-form',
  data () {
    return {
    countries:[],
    name: "",
    age: null,
    selectedCountry: null,
    message: ""
    }
  },
  methods: {
  addMessage(form){
    form.preventDefault()
    const message = {
      name: this.name,
      age: this.age,
      selectedCountry: this.selectedCountry,
      message: this.message
      }
    MessageService.postMessage(message)
    .then(res => eventBus.$emit('message-added', res))
    }
  },
  mounted(){
  fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
  .then(countries => this.countries = countries)
  },
}
</script>

<style lang="css" scoped>
</style>
