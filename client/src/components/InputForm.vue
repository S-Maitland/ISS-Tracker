<template lang="html">

  <div class="modal-backdrop">
     <div class="modal">
       <header class="modal-header">
         <slot name="header">
           Please send the astronauts a message!!
         </slot>
         <button
           type="button"
           class="btn-close"
           @click="close"
         >
           x
         </button>
       </header>

<br>
<br>

  <div class="input-form">
    <template lang="html">
    <form id="myForm" name="myForm" v-on:submit="addMessage" method="post">

      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
      <br>
      <br>
      <label for="age">Age:</label>
      <input type="number" id="age" v-model="age" required/>
      <br>
      <br>
      <label for="country_select">Country:</label>
      <div class="custom-select">
        <select id="country_select" v-model="selectedCountry">
          <option v-for="country in countries" :value="country">{{country.name}}</option>
        </select>
      </div>
      <br>
      <label for="message">Message:</label>
      <input type="text" id="messageInput" v-model="message" required/>
      <br>
      <br>
      <input type="submit" id="send" value="Send Message!"/>
      <p id="dateDemo"></p>
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
      message: "",
      dateStamp: ""
    }
  },
  methods: {
  addMessage(form){
    form.preventDefault()
    this.getTimeAndDate()
    const messageToAstronaut = {
      name: this.name,
      age: this.age,
      country: this.selectedCountry.name,
      flag: this.selectedCountry.flag,
      message: this.message,
      time: this.dateStamp
      }
    MessageService.postMessage(messageToAstronaut)
    // .then(() => this.getTimeAndDate())
    .then(res => eventBus.$emit('message-added', res))
    .then(eventBus.$emit('close5'))
  },
  getTimeAndDate() {
    this.dateStamp = document.getElementById("dateDemo").innerHTML = Date();
  },
  close() {
    eventBus.$emit('close5');
  },
},
  mounted(){
  fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
  .then(countries => this.countries = countries)
  },
}
</script>

<style lang="css" scoped>

.input-form {
  color: white;
  width: 400px;
}

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
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.1em;
  font-size: 1em
}

.modal {
  background-color: #252e3d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 50vw;
}

.modal-header {
  padding: 2vw;
  border-bottom: 1px solid #eeeeee;
  color: orange;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 96%;
  font-size: 1.3em
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

#send {
    border: none;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background: transparent;
    font-family: 'Russo One', sans-serif;
    letter-spacing: 0.1em;
    font-size: 1em;
    border:solid aqua;
    border-radius: 12px;
}

#messageInput{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

#age{
  width:9%;
}
</style>
