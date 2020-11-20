<template>
  <div>
    <button v-on:click="doTrack">Next Day</button>
  </div>
</template>

<script>
export default {
  name: "AdventureDay",
  methods: {
    doTrack: function () {
      this.$store.commit("increment", { time: 1 });
    },
  },
};
</script>