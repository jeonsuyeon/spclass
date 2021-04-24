$(function(){
//1.animate()
//2.appedTo()
//3.clone()
//4.remove()
//{명령이름:명령값, 명령이름:명령값}
//setInterval(함수이름, 시간)
setInterval(mySlide,3000);


function mySlide(){

    $('.slidein').animate({'left':'-1200px'}, 500, function(){
 
         $('.slidein img:first-child').clone().appendTo('.slidein');
 
         $('.slidein img:first-child').remove();
 
         $('.slidein').css('left', 0);
 
    });
 
 }
 
  
 
 });