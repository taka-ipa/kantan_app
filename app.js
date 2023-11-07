new Vue({
  el: "#app",
  data: {
    showBattle: false,
  },
  methods: {
    toggleBattle() {
      this.showBattle = !this.showBattle;
    },
  },
});
