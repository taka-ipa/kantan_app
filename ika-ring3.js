const app1 = new Vue({
  el: "#app1",
  data: {
    showText: false,
    schedule: {
      1: 'レギュラーマッチ',
      2: 'バンカラマッチ',
      3: 'Xマッチ',
      4: 'イベントマッチ',
      5: 'サーモンラン'
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
      1: '最近',
      2: 'レギュラーマッチ',
      3: 'バンカラマッチ',
      4: 'Xマッチ',
      5: 'イベントマッチ',
      6: 'プライベートマッチ'
    }
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
});

const app3 = new Vue({
  el: "#app3",
  data: {
    showText: false,
    schedule: {
      1: 'ヒストリー',
      2: 'ブキのきろく',
      3: 'ステージのきろく',
      4: 'フェスのきろく',
      5: 'サーモンランのきろく',
      6: 'ヒーローモードのきろく'
    }
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
});

