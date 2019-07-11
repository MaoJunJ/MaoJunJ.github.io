$('.top-bar-menu').mouseenter(function () {
    $('.game-menu').slideDown(600);
})
$('.top-bar-menu').mouseleave(function () {
    $('.game-menu').stop(true).slideUp(600);
})

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    
   
})        
 
// 句子随机变换颜色
function changeColor(){ 
	var color="#330000|#fff|#808080";
	color=color.split("|"); 
 	var xuan = document.getElementsByClassName('txt');
	for(var i=0;i<xuan.length;i++){
	xuan[i].style.color=color[parseInt(Math.random() * color.length)];//设置样式 

	}
	} 
	setInterval("changeColor()",400);//死循环，每0.2秒变换一种颜色

// function changeBig(){
//     $('.logo').css('transform','scale(1.1,1.1)');
//      }
//     setInterval("changeBig()",200);
// logo变大变小


// 导航栏模块
$('.weixin').mouseover(function(){
    $('.weixin>i').css('background-position-x',-62).css('background-position-y',-205);
    $('.weixin>div').show();
}).mouseout(function(){
    $('.weixin>i').css('background-position-x',0).css('background-position-y',-205);
    $('.weixin>div').hide();
})

$('.weibo').mouseover(function(){
    $('.weibo>i').css('background-position-x',-123).css('background-position-y',-205);
    $('.weibo>div').show();
}).mouseout(function(){
    $('.weibo>i').css('background-position-x',-92).css('background-position-y',-205);
    $('.weibo>div').hide();
})

$('.yixin').mouseover(function(){
    $('.yixin>i').css('background-position-x',-31).css('background-position-y',-205);
    $('.yixin>div').show();
}).mouseout(function(){
     $('.yixin>i').css('background-position-x',-168).css('background-position-y',-146);
     $('.yixin>div').hide();
})

$('.qq').mouseover(function(){
    $('.qq>i').css('background-position-x',-183).css('background-position-y',-205);
    $('.qq>div').show();
}).mouseout(function(){
     $('.qq>i').css('background-position-x',-154).css('background-position-y',-205);
     $('.qq>div').hide();
})

$('.baidu').mouseover(function(){
    $('.baidu>i').css('background-position-x',-515).css('background-position-y',-158);
    $('.baidu>div').show();
}).mouseout(function(){
     $('.baidu>i').css('background-position-x',-224).css('background-position-y',-146);
     $('.baidu>div').hide();
})

$('.bbs').mouseover(function(){
    $('.bbs>i').css('background-position-x',-478).css('background-position-y',-158);
    $('.bbs>div').show();
}).mouseout(function(){
     $('.bbs>i').css('background-position-x',-438).css('background-position-y',-158);
     $('.bbs>div').hide();
})

// 标题内部
$('.addFriend').mouseover(function(){
    $('.NIE-share-more').show();
}).mouseout(function(){
    $('.NIE-share-more').hide();
})

// 网页滚动事件
function getTop(){

    var top = $(document).scrollTop();
    if($(document).scrollTop()>500){
       $(".side-show").fadeIn(600);
       $(".back-top").show();
    } else {
　　　　$(".side-show").fadeOut(0);
       $(".back-top").hide();
    }
    setTimeout(getTop);
}
getTop();

// 点击阴影事件
$('.side-show').click(function () {
    $('.login').show();
})

$('.login-content-close').mouseenter(function () {

    $(this).css('animation', 'close 0.4s linear forwards')
})
$('.login-content-close').mouseleave(function () {
    $(this).css('animation', 'close1 0.4s reverse linear backwards')
})

$('.login-content-close').click(function () {
    $('.login').hide();
})
// 点击手机系统切换
$('.android').click(function () {
    $('.android').css({'backgroundColor':'#000','color':'#fff'});
    $('.ios').css({'backgroundColor':'#fff','color':'#000'});
})

$('.ios').click(function () {
    $('.android').css({'backgroundColor':'#fff','color':'#000'});
    $('.ios').css({'backgroundColor':'#000','color':'#fff'});
})

var tip1 = document.getElementsByClassName('tip1')[0];
var tip2 = document.getElementsByClassName('tip2')[0];
var tip3 = document.getElementsByClassName('tip3')[0];
var tip4 = document.getElementsByClassName('tip4')[0];
var tip5 = document.getElementsByClassName('tip5')[0];
var tip6 = document.getElementsByClassName('tip6')[0];
var tel = document.querySelectorAll('.tel>input')[0];
var code = document.querySelectorAll('.code')[0];
var code1= document.querySelectorAll('.code1')[0];

tel.onfocus = function(){
    tip1.style.display = 'none';
    tip4.style.display = 'none';
    tel.style.backgroundColor = '#fff';
}

tel.onblur = function(){
    tel.style.backgroundColor = 'transparent';
    if(!(/^1[3456789]\d{9}$/.test(tel.value))){ 
        tip1.style.display = 'block';
        tip4.style.display = 'none';
    } else{
        tip1.style.display = 'none';
        tip4.style.display = 'block';
    }
}
code.onfocus = function(){
    code.style.backgroundColor = '#fff';
} 
code.onblur = function(){
    code.style.backgroundColor = 'transparent';
} 
code1.onfocus = function(){
    tip3.style.display = 'none';
    tip6.style.display = 'none';
    code1.style.backgroundColor = '#fff';
}

code.onblur = function(){
    code.style.backgroundColor = 'transparent';
    if(!(/^[0-9A-Za-z]{4}$/.test(code.value))){ 
        tip2.style.display = 'block';
        tip5.style.display = 'none';
    } else{
        tip2.style.display = 'none';
        tip5.style.display = 'block';
    }
}

code1.onblur = function(){
    code1.style.backgroundColor = 'transparent';
    if(!(/^\d{6}$/.test(code1.value))){ 
        tip3.style.display = 'block';
        tip6.style.display = 'none';
    } else{
        tip3.style.display = 'none';
        tip6.style.display = 'block';
    }
}

$('.back-top').click(function(){
    var scroll_offset = $(".w").offset(); 
    $("body,html").animate({ 
    scrollTop:scroll_offset.top 
    },500); 
})

