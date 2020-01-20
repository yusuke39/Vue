//数値を通貨書式「●、●●●、●●●」に変換するフィルター
Vue.filter('number_format', function(val){
  return val.toLocalString();
});

//商品一覧コンポーネント
var app = new Vue({
  el: '#app',
  data: {
    //「セール対象」のチェック状態
    showSaleItem: false,
    //「送料無料」のチェック状態
    showDelvItem: false,
    //「並び替え」の選択値
    sortOrder: 1,
    //商品リスト
    products: []
  },
  //ライフサイクルハック
  cre

})