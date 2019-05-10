<template>
  <div id="app">
    <Header text="ISS Tracker"/>
  </div>
</template>

<script>
import ContentGrid from './components/ContentGrid';
import ContentItem1 from './components/ContentItem1';
import ContentItem2 from './components/ContentItem2';
import ContentItem3 from './components/ContentItem3';
import InputForm from './components/InputForm';
import MapView from './components/MapView';
import MessageList from './components/MessageList';
import MessageListItem from './components/MessageListItem';
import Header from './components/Header';




export default {
  name: 'app',
  data() {
    return {
      messages: [],
      location: []
    }
  },
  components: {
    Header
  },
  mounted() {
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(location => this.location = location);

    fetch('http://localhost:3000/api/messages/')
    .then(response => response.json())
    .then(messages => this.messages = messages);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
