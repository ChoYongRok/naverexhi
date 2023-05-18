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

/* 진행중인전시 슬라이더 */
let curPos = 0;
let postion = 0;
let start_x, end_x;
const IMAGE_WIDTH = 220;
const images = document.querySelector(".images") 

images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);

function prev(){
  if(curPos > 0){
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
}
function next(){
  if(curPos < 7){
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
}

function touch_start(event) {
  start_x = event.touches[0].pageX
}

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if(start_x > end_x){
    next();
  }else{
    prev();
  }
}


});