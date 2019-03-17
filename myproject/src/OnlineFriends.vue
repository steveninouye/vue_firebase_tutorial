<template>
  <div id="online-friends">
    <h2>Online Friends</h2>
    <div v-for="(friend, index) in buddies" :key="index">
      <span v-if="friend.online" @click="unfriend(friend.name)">{{friend.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  props: ["buddies"],
  data() {
    return {};
  },
  methods: {
    unfriend(name){
      this.$emit("delete", { name: name })
    }
  }
};
</script>

<style>
</style>
