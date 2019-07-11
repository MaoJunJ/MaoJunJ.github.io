
$('.start').click(function(){
    if($('.start').attr('title') == 'stop'){
        var audio = document.querySelector('#music');
        $(this).css('background-image', 'url("./images/BF.png")');
        $('.img-music').css('background-image', 'url("./images/DT.gif")');
        audio.play();
        $('.start').attr('title','play');
    }else{
        var audio = document.querySelector('#music');
        $(this).css('background-image', 'url("./images/ZT.png")');
        $('.img-music').css('background-image', 'url("./images/JT.png")');
        audio.pause();
        $('.start').attr('title','stop');
    }
})


var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:true,
    effect : 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 3000,//1秒切换一次
        disableOnInteraction: false,
    },
    
   
})        


$('.li-top').mouseenter(function(){
    $('.li-top').css('fontWeight','normal');
    $(this).css('fontWeight','bold') ;
})
$('.li-top').mouseleave(function(){
    $('.li-top').css('fontWeight','normal');
    
})

var index = 0;
var  list = $(list);
setInterval(function(){
  
   
    var list = document.querySelectorAll('.list li');
    $(list).eq(index).slideUp();
    
    index +=1;
    if(index == 7){
        index = 0;
        $(list).css('display','block');
    };
   
},3000);



$('.title-left').mouseenter(function(){
    $('.jiaobaio').css('left' , '73px');
    $(this).css('border-bottom' , '3px solid  #736454');
    $('.title-right').css('border-bottom' , '3px solid  #d1b699');
    $('.tj').css('display','none');
    $('.ZX').css('display','block');

});
$('.title-right').mouseenter(function(){
    $('.jiaobaio').css('left' , '235px');
    $(this).css('border-bottom' , '3px solid  #736454');
    $('.title-left').css('border-bottom' , '3px solid  #d1b699');
    $('.tj').css('display','block');
    $('.ZX').css('display','none');
})


$('.top-left-btn').click(function(){
    $(this).siblings().css({
        'background':'url(./images/153143fkqpkdqqi2cip5k8.png) no-repeat center' ,
        'backgroundSize':'contain',
    
    })
    $(this).css({
        'background':'url(./images/153143jlwr3hh8xkl7x817.png) no-repeat center' ,
        'backgroundSize':'contain',
    
    })
})

$('.swiper-slide1').mouseenter(function(){
    $($('.hot-word1')).slideDown(500);
})
$('.swiper-slide2').mouseenter(function(){
    $($('.hot-word2')).slideDown(500);
})
$('.swiper-slide3').mouseenter(function(){
    $($('.hot-word3')).slideDown(500);
})
$('.swiper-slide1').mouseleave(function(){
    $($('.hot-word1')).slideUp(1000);
})
$('.swiper-slide2').mouseleave(function(){
    $($('.hot-word2')).slideUp(1000);
})
$('.swiper-slide3').mouseleave(function(){
    $($('.hot-word3')).slideUp(1000);
})