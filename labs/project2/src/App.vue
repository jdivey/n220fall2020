<template>
  <div id="app">
    <AnimalionList />
  </div>
</template>

<script>
import store from "./system/DataStore";
import AnimalionList from "./components/AnimalionList";
import AdventureDay from "./components/AdventureDay";
import AdventureDayTracker from "./components/AdventureDayTracker";

export default {
  name: "App",
  store,
  components: {
    AnimalionList,
  },
};
</script>

<style>
.app {
  background-image: url("./assets/images/hand_emoji.png");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
