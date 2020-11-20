import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    day: 0,
    animalions: [
      { image: "🐷", name: "Pigton", level: 13, HP: 1300 },
      { image: "🐤", name: "Chikenroo", level: 5, HP: 50 },
      { image: "🐮", name: "Mooooonster", level: 9, HP: 90 },
      { image: "🐴", name: "Bonehorse", level: 11, HP: 110 }
    ]
  },
  mutations: {
    showStats(state, payload) {
      state.animalions[payload.index].HP += 1;
    },
    increment(state, payload) {
      state.day += payload.time;
      state.animalions.level += 1;
    }
  }
});

export default store;
