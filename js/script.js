$(function() {
  // ('#back a') → $('#id名 要素名') → id="back"内のaタグがクリックされたときに、処理が実行
  $('#back a').on('click',function(event){
    // ページ全体に対して処理を実行したいので、セレクタには、$('body, html')が設定
    // 「body要素またはhtml要素」の意味
    $('body, html').animate({
      // scrollTop ：スクロール位置を取得できるメソッド
      // scrollTop:0 → 「最上部に移動する」
      scrollTop:0
    }, 800);
    // event.preventDefault(); → aタグの機能を無効にするメソッド
    // aタグは画面遷移をする機能を保つが、今回は必要ないため無効化する。
    event.preventDefault();
  });
});