<template>
  <div>
    <div v-on:mouseover="showstats()">
      <div class="image">{{ animalion.image }}</div>
      <div class="name">{{ animalion.name }}</div>
      <div class="level">Level: {{ animalion.level }}</div>
      <div class="hp">HP: {{ animalion.HP }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalionCard",
  props: {
    animalion: Object,
    id: Number,
  },
  methods: {
    showstats() {
      this.$store.commit("showStats", { index: this.id });
    },
  },
  computed: {},
};
</script>

<style>
.image {
  height: 150px;
  width: 175px;
  margin: auto;
  margin-top: 5px;
  font-size: 100px;
  text-align: center;
}

.image:hover {
  animation: shimmy 0.5s;
  cursor: grab;
}

@keyframes shimmy {
  0% {
    transform: translate(0, 0);
  }
  15% {
    transform: translate(0, 20);
  }
  25% {
    transform: translate(0px, -40px);
  }
  50% {
    transform: translate(0px, 20px);
  }
  75% {
    transform: translate(0px, -40px);
  }
  100% {
    transform: translate(0px, 20px);
  }
}
.name {
  text-align: center;
  font-size: 25px;
  margin: 10px;
}
.level {
  text-align: center;
}

.hp {
  text-align: center;
}
</style>