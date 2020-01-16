// //動くものクラスの定義
// var Movable = function(x,y){
//   this.pos = {
//     x: x,
//     y: y
//   };
//   this.move = function(x,y){
//     this.pos.x += x;
//     this.pos.y += y;
//   };
// }

// //ballオブジェクトを格納する空の配列を用意する
// var ball = [];
// //100個分の繰り返し
// for(var i=0; i<=100; i++){
//   ball[i] = new Movable(
//     Math.floor(Math.random() * window.innerWidth),
//     Math.floor(Math.random() * window.innerHeight)
//   );
// }

// console.log(Math.floor(Math.random() * window.innerWidth))
// console.log( Math.floor(Math.random() * window.innerHeight))

// //ボールをブラウザに描画する
// for(var i=0; i<=100; i++){
//   document.write('<div class="ball" style="top:' + ball[i].pos.y + 'px;left:' + ball[i].pos.x +  'px;">●</div>');
// }

// var ball = new Vue({
//   el: '#ball',
//   data: {
//     pos: {x: 0, y:0},
//     radius: 20
//   }
// });

// ball.move(100, 100);
// ball.radius = 40;


var app = new Vue({
  el: '#app',
  data: {
    show: true
  }
});