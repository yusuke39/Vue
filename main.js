//コンポーネントのルートノード
var nodeApp = document.querySelector('#app');

//チェックボックスのイベントハンドラを登録
var nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]');
nodeCheckbox[0].addEventListener('change', onCheckChanged, false);
nodeCheckbox[1].addEventListener('change', onCheckChanged, false);

//チェック状態変更イベントハンドラ
function onCheckChanged(event){

  var nodeItems = nodeApp.querySelectorAll('.item');//商品ノードのリスト
  var nodeCount = nodeApp.querySelector('.count');//表示件数のノード
  var count = nodeItems.length;//表示件数

  //全ての商品ノードを一旦表示する
  for(var i=0; i<nodeItems.length; i++){
    showNode(nodeItems[i]);
  }

  //セール対象のチェックが付いている場合
  if(nodeCheckbox[0].checked){
    //全ての商品ノードを操作
    for(var i=0; i<nodeItems.length; i++){
      //セール対象の商品ではない場合
      if(!isSaleItem(nodeItems[i])){
        //この商品を非表示にする
        hideNode(nodeItems[i]);
        //件数カウントを減らす
        count--;
      }
    }
  }

  //送料無料のチェックが付いている場合
  if(nodeCheckbox[1].checked){
    //全ての商品ノードを操作
    for(var i=0; i<nodeItems.length; i++){
      //送料無料の商品ではない場合
      if(!isDelvFreeItem(nodeItems[i])){
        //この商品を非表示にする
        hideNode(nodeItems[i]);
        //件数カウントを減らす
        count--;
      }
    }
  }

  //件数を更新
  nodeCount.textContent = count + '件';

  function isSaleItem(nodeItem){
    var node = nodeItem.querySelector('.status');
    return(node && node.textContent == 'SALE');
  }

  //送料無料かどうかを判定する関数
  function isDelvFreeItem(nodeItem){
    var node = nodeItem.querySelector('.shipping-fee');
    return (node && node.textContent == '送料無料');
  }

  //ノードを非表示にする関数
  function hideNode(node){
    node.setAttribute('style','display:none');
  }


  //ノードを表示する関数
  function showNode(node){
    node.removeAttribute('style');
  }

}