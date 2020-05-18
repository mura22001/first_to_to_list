new Vue({
  el: '#app',
  data: {
    name: 'Javascriptの勉強',
    list: [
      { id: 1, name: 'ミーティング'},
      { id: 2, name: 'やることをまとめる'},
      { id: 3, name: 'cakePHPの勉強'}
    ]
  },

  methods: {


    // 追加ボタンをクリックしたときのハンドラ
    doAdd: function () {
      // リスト内で1番大きいIDを取得
      var max = this.list.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // 新しいモンスターをリストに追加
      this.list.push({
        id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
        name: this.name, // 現在のフォームの入力値
      })
    },

        // 要素を削除ボタンをクリックしたときのハンドラ
    doRemove: function (index) {
      // 受け取ったインデックスの位置から1個要素を削除
      this.list.splice(index, 1)
    }

  }


})