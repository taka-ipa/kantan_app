const app1 = new Vue({
  el: "#app1",
  data: {
    showText: false,
    schedule: {
      1: 'レギュラーマッチ',
      2: 'バンカラマッチ'
    }
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
});

const app2 = new Vue({
  el: "#app2",
  data: {
    showText: false,
    schedule: {
      1: 'レギュラーマッチ',
      2: 'バンカラマッチ'
    }
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
});

