<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar/>
    <AllFriends :buddies="friends" @delete="deleteFriend"/>
    <OnlineFriends :buddies="friends" @delete="deleteFriend"/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllFriends from "./AllFriends";
import OnlineFriends from "./OnlineFriends";

export default {
  name: "app",
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
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
  methods: {
    deleteFriend(payload) {
      console.log(payload);
    }
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
