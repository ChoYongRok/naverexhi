$(document).ready(function(){

/* 헤더 검색창 */
$("header input").click(function(){
  $(this).toggleClass("active")
});


/* 메뉴 슬라이드 */
$("footer #menu").click(function(){
  $(this).toggleClass("active");
  $("nav").stop(true,true).slideToggle("fast");
});

$("nav h1").click(function(){
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
});

/* 탭메뉴 */

$(".btn li").click(function(){

  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let result = $(this).attr("data-alt");
  $(".tabContents .hide").removeClass("active");
  $(`#${result}`).addClass("active");


});

/* 갤러리 */

let oimg = 0;
let nimg = 0;

$(".thumbs a").click(function(){

  nimg=$(this).index();

  $(".thumbs a").eq(oimg).removeClass("on");
  $(".thumbs a").eq(nimg).addClass("on");
  $(".largeImg>img").eq(oimg).stop().fadeOut(1000);
  $(".largeImg>img").eq(nimg).stop().fadeIn(1000);

  return false;

});

});