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


});