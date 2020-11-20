<template>
  <div>Day {{ day }}</div>
</template>

<script>
export default {
  name: "AdventureDayTracker",
  computed: {
    day() {
      return this.$store.state.day;
    },
  },
};
</script>