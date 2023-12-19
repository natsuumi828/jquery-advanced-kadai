$(function(){
  // カーソルを重ねると右側に動く
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity:0.5,
      marginLeft:20,
    },100);
  });
  // カーソルをボタンの上から離すと元に戻る
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      opacity:1,
      marginLeft:0,
    },100);
  });
  
  //カルーセル
  $('.carousel').slick({
    autoplay:true,
    dots:true,
    infinite:true,
    autoplaySpeed:5000,
    arrows:false,
  });
});

