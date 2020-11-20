<template>
  <div>
    <div class="topbar">
      <h1>ANIMALIONS</h1>
      <h2>
        Gotta
        <span>pet</span>
        them all!
      </h2>
    </div>

    <p>Pet them to increase their HP!</p>

    <AnimalionCard
      class="animalioncard grid"
      data-card-flippable="true"
      v-for="(animalion, index) in animalions"
      v-bind:key="index"
      v-bind:id="index"
      v-bind:animalion="animalion"
    >
    </AnimalionCard>

    <AdventureDay />
    <AdventureDayTracker />

    <div class="myapp">© Jacob Ivey IUPUI 2020</div>
  </div>
</template>
 
<script>
import AnimalionCard from "./AnimalionCard";
import AdventureDay from "./AdventureDay";
import AdventureDayTracker from "./AdventureDayTracker";

export default {
  name: "AnimalionList",
  components: {
    AnimalionCard,
    AdventureDay,
    AdventureDayTracker,
  },
  computed: {
    animalions() {
      return this.$store.state.animalions;
    },
  },
};
</script>
<style>
.topbar {
  width: 100%;
  height: 75px;
  background-color: #fcc4ff;
}

h1 {
  float: left;
  padding-left: 10px;
}

h2 {
  padding-top: 25px;
  text-align: center;
}

h2 span {
  font-style: italic;
}

.animalioncard {
  margin: 100px;
  width: 200px;
  height: 250px;
  float: left;
  border: 1px solid #DCDCDC;
  border-radius: 10px 10px 10px 10px;
  padding: 0px 10px 10px 10px;
  box-shadow: 7px 7px 2px 2px rgba(0, 0, 0, 0.13);
  background-color: white;
}

.myapp {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

p {
  text-align: center;
}
</style>