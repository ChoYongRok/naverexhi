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

/* ing 펼쳐보기 */
$(window).on("scroll",function(){
  if($(window).scrollTop() > 1600){
    $("#ing div:nth-child(2)").fadeIn("slow");
  }
  if($(window).scrollTop() > 2000){
    $("#ing div:nth-child(3)").fadeIn("slow");
  }
});

  //스크롤바가 이동될 때마다 스크롤 위치값 나타내기
  $(window).scroll(function(){
    $("#txt1").text($(this).scrollTop());
  });


});