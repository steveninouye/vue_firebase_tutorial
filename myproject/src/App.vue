<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      title: "My first view app, woo :-)",
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bowser", online: false }
      ]
    };
  },
  methods: {}
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
