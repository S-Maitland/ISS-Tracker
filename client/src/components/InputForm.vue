<template lang="html">

  <div class="modal-backdrop">
     <div class="modal">
       <header class="modal-header">
         <slot name="header">
           Please send the astronauts a message!
         </slot>
       </header>



  <div class="input-form">
    <template lang="html">
    <form id="myForm" name="myForm" v-on:submit="addMessage" method="post">

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
      <input type="text" id="messageInput" v-model="message" required/>

      <input type="submit" value="Send Message!"  id="send"  />
    </form>
  </template>
  </div>

</div>
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
      country: this.selectedCountry.name,
      flag: this.selectedCountry.flag,
      message: this.message
      }
    MessageService.postMessage(messageToAstronaut)
    .then(res => eventBus.$emit('message-added', res))
    .then(eventBus.$emit('close5'))
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

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.modal {
  background-color: #252e3d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 40vw;
}

.modal-header {
  padding: 2vw;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 96%;
}
</style>
