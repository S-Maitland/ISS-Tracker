<template lang="html">
  <div class="input-form">
    <template lang="html">
    <form class="" v-on:submit="addMessage" method="post">

      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>

      <label for="age">Age:</label>
      <input type="number" id="age" v-model="age" required/>

      <label for="country_select">Country:</label>
        <select id="country_select" v-model="selectedCountry">
          <option disabled value="">Select a country</option>
          <option v-for="country in countries" :value="country">{{country.name}}</option>
        </select>

      <label for="message">Message:</label>
      <input type="text" id="Your Message:" v-model="message" required/>

      <input type="submit" value="Send Message!" id="save"/>
    </form>
  </template>
  </div>
</template>

<script>

import MessageService from '@/services/MessageService.js'
import { eventBus } from '@/main.js'

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
    const messageToAstronaut = {
      name: this.name,
      age: this.age,
      selectedCountryName: this.selectedCountry.name,
      selectedCountryFlag: this.selectedCountry.flag,
      message: this.message
      }
    MessageService.postMessage(messageToAstronaut)
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
