//main.htmlに対しての記述


// Vue.filter('number_format', function(val){
//   return val.toLocaleString();
// });

// //商品一覧コンポーネント
// var app = new Vue({
//   el: '#app',
//   data: {
//     //表示中の商品数
//     count: 0,
//     //「セール対象」のチェック状態（true：チェック有、false:チェック無)
//     showSaleItem: false,
//     //「送料無料」のチェック状態（true：チェック有、false:チェック無)
//     showDelvFree: false,
//     //「並び替え」の選択値（1:標準、2:価格が安い順）
//     sortOrder: 1,
//     //商品リスト
//     products: [
//       {id: 1, name: 'Michael<br>スマホケース', price:1580, image: 'image/01.jpg', delv: 0, isSale: true},
//       {id: 2,name: 'Raphael<br>スマホケース', price:980, image: 'image/02.jpg', delv: 0, isSale: true},
//       {id: 3,name: 'Gabriel<br>スマホケース', price:980, image: 'image/03.jpg', delv: 240, isSale: true},
//       {id: 4,name: 'Uriel<br>スマホケース', price:1580, image: 'image/04.jpg', delv: 0, isSale: true},
//       {id: 5,name: 'Ariel<br>スマホケース', price:1580, image: 'image/05.jpg', delv: 0, isSale: false},
//       {id: 6,name: 'Azrael<br>スマホケース', price:1580, image: 'image/06.jpg', delv: 0, isSale: false}
//     ]
//   },
//   computed: {
//     //絞り込み後の商品リストを返す算出プロパティ
//     filterdList: function(){
//       //絞り込み後の商品リストを格納する新しい配列
//       var newList = [];
//       for(var i=0; i<this.products.length; i++){
//         //表示対象か判定するフラグ
//         var isShow = true;
//         //i番目の商品が表示対象かを判定する
//         if(this.showSaleItem && !this.products[i].isSale){
//           //「セール対象」チェック有りで、セール対象商品でない場合
//           isShow = false;//この商品は表示しない
//         }
//         if(this.showDelvFree && this.products[i].delv > 0){
//           //「送料無料」にチェック有りで、送料有りの商品の場合
//           isShow = false;//この商品は表示しない
//         }
//         //表示対象の商品だけを新しい配列に追加する
//         if(isShow){
//           newList.push(this.products[i]);
//         }
//       }
//       if(this.sortOrder == 1){
//         //元の順番にpushしているので並び替え済み
//       }
//       else if(this.sortOrder == 2){
//         //価格が安い順に並び替える
//         newList.sort(function(a,b){
//           return a.price - b.price;
//         });
//       }
//       //絞り込み後の商品リストを返す
//       return newList;
//     },
//     counts: function(){
//       return this.filterdList.length;
//     }
//   }
// });



//main2.htmlに対しての記述

var btnLoad = document.querySelector('#load');

btnLoad.addEventListener('click', function(event){

  //1,xmlHttpRwquestのオブジェクトを生成
  var xmlHttpRwquest = new XMLHttpRequest();
  //2,通信状態の変化を監視するイベントハンドラ
  xmlHttpRwquest.onreadystatechange = function(){
    if(this.readyState == 4  /*&& this.status == 200*/){
      console.log(this.readyState);
      //受信したJSONを変数に格納する
      var products = this.response;
      console.log(products);
      //商品リストの子ノードを全て削除する
      var result = document.querySelector('#result');
      result.textContent = '';
      //商品の子ノードを全て削除する
      for(var i = 0; i < products.length; i++){
        var text = '商品ID:' + products[i].id;
        text += ' 商品名:' + products[i].name;
        text += ' 料金:'  + products[i].price;
        text += ' 画像パス' + products[i].image;
        text += ' 送料' + products[i].delv;
        text += ' セール対象' + products[i].isSale;
        var div = document.createElement('div');
        div.textContent = text;
        result.appendChild(div);
      }
    }
  };


  //3,レスポンスの形式を指定する
  xmlHttpRwquest.responseType = 'json';

  //4,リクエストメソッドと読み込みファイルのパスを指定する
  xmlHttpRwquest.open('GET', 'products.json');

  //5,リクエストを送信する（非同期通信を開始する
  xmlHttpRwquest.send();
});