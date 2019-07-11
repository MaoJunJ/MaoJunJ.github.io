(function () {
    var home = document.getElementsByClassName('home')[0];
    var share = document.getElementsByClassName('share')[0];
    var fengx = document.getElementsByClassName('fengx')[0];
    home.onmouseenter = function () {
        this.style.backgroundPosition = '0px -48px';
    }
    home.onmouseleave = function () {
        this.style.backgroundPosition = '-89px 0px';
    }
    share.onmouseenter = function () {
        this.style.backgroundPosition = '47px 0px';
        // fengx.style.display = 'block';
    }
   
    share.onmouseleave = function () {
        this.style.backgroundPosition = '-45px 45px';
        // fengx.style.display = 'none';

    }
    
}());

$('.top-bar-menu').mouseenter(function () {
    $('.game-menu').slideDown(1000);
})
$('.top-bar-menu').mouseleave(function () {
    $('.game-menu').stop(true).slideUp(1000);
})

$('.XW-btn').click(function () {
    $('.XW-box').fadeIn(200);

})

$('.close').mouseenter(function () {
    $(this).css("backgroundColor", '#71b6e0');
})
$('.close').mouseleave(function () {
    $(this).css("backgroundColor", '#62a1c9');
})

$('.close').click(function () {
    $('.XW-box').fadeIn(200);
})
$('.close').click(function () {
    $('.XW-box').fadeOut(200);
})
$('.queRen').click(function () {
    $('.XW-box').fadeOut(200);
})

$('.now-beg').mouseenter(function () {
    $(this).css("backgroundPosition", '18PX -60px');
    // $('.login').hide();
})
$('.now-beg').mouseleave(function () {

    $(this).css({ "backgroundPosition": '18px 0', 'backgroundSize': '702px' });
    // $('.login').hide();
})
$('.now-beg').click(function () {

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



// var index = 2;
// setInterval(function () {
//     index--;
//     if (index == -1) {
//         index = 2;
//     }
//     $('.top-bar-hot-content').children().siblings().slideUp(1000);
//     $('.top-bar-hot-content').children().eq(index).slideDown(1000);
// }, 4000);





// var oldColor
// i.onmouseenter = function(){
//     oldColor = i.style.backgroundColor;
//     i.style.backgroundColor = '#e8e9e9';
// }
// i.onmouseleave = function(){
//     i.style.backgroundColor = oldColor;
// }

// a.onmouseenter = function(){
//     oldColor = i.style.backgroundColor;
//     a.style.backgroundColor = '#e8e9e9';

// }
// a.onmouseenter = function(){

//     a.style.backgroundColor =  oldColor;


// }
// if(window.getComputedStyle(i).backgroundColor == 'rgb(255, 255, 255)'){


//     i.onmouseenter = function(){
//         console.log(window.getComputedStyle(i).backgroundColor);
//          i.style.backgroundColor = '#c9c9c9';
//     }
//     i.onmouseleave = function(){
//         i.style.backgroundColor = 'rgb(255, 255, 255)';
//     }

// }
//  else if(window.getComputedStyle(i).backgroundColor == 'rgb(0, 0, 0)'){

//     i.onmouseenter = function(){
//          i.style.backgroundColor = '#000';
//     }
// }

// if(window.getComputedStyle(a).backgroundColor == 'rgb(255, 255, 255)'){
//     a.onmouseenter = function(){
//          a.style.backgroundColor = '#c9c9c9';
//     }
//     a.onmouseleave = function(){
//         a.style.backgroundColor = 'rgb(255, 255, 255)';
//     }
// }



// if(a.style.backgroundColor == '#fff'){
//     a.onmouseenter = function(){
//         alert('ddddddd')
//         a.style.backgroundColor = 'yellow';
//     }
//     a.onmouseleave = function(){
//             i.style.backgroundColor = '#fff';
//     }

// }

var ios = document.querySelectorAll('.i')[0];
var a = document.querySelectorAll('.a')[0];

ios.onclick = function () {
    
    ios.style.backgroundColor = '#000';
    ios.style.color = '#fff'
    a.style.backgroundColor = '#fff';
    a.style.color = '#000';


}
a.onclick = function () {

    a.style.backgroundColor = '#000';
    a.style.color = '#fff';
    ios.style.backgroundColor = '#fff';
    ios.style.color = '#000';
}





// if (window.getComputedStyle(i).backgroundColor == 'rgb(255, 255, 255)') {

//     i.onmouseenter = function () {
//         i.style.backgroundColor = '#c9c9c9';
//         i.onmouseleave = function () {
//             if (window.getComputedStyle(i).backgroundColor == 'rgb(0, 0, 0)') {

//             } else {
//                 i.style.backgroundColor = '#fff';
//             }
//         }
//     }
//     i.onclick = function () {
//         i.style.backgroundColor = '#000';
//         i.style.color = '#fff'
//         a.style.backgroundColor = '#fff';
//         a.style.color = '#000';
//     }
// }


// a.onclick = function () {
//     a.style.backgroundColor = '#000';
//     a.style.color = '#fff';
//     i.style.backgroundColor = '#fff';
//     i.style.color = '#000';
// }

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


var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    
   
})        
 


var close= document.getElementById('close');
var big= document.getElementById('big');
var timerID= null;
close.onmouseover = function(){
    clearTimeout(timerID);
big.style.display = 'block';
}

big.onmouseout= close.onmouseout = function(){
    timerID= setTimeout(function(){
        big.style.display = 'none';
    },500);
}

big.onmouseover=function(){
  clearTimeout(timerID);
}



// 点击版权信息弹出底部盒子

var copyright = document.getElementsByClassName('copyright')[0];
var footBar6 = document.getElementsByClassName('footBar6')[0];
var foot6 = document.getElementsByClassName('foot6')[0];
// 点击事件底部出来
copyright.onclick = function(){
   
    footBar6.style.height = '130px';
    footBar6.style.transition = "all 0.5s";

    
}
// 移出底部下降事件

footBar6.onmouseleave= function(){
   
    footBar6.style.height = '65px';
    footBar6.style.transition = "all 0.2s";
}

// 底部a标签移入出现下滑线;

// var check = document.getElementsByClassName('check')[0];

// check.onmouseover = function(){
//     check.style.textDecoration = 'underline';
    
// }
// check.onmouseleave = function(){
//     check.style.textDecoration = 'none';
    
// }

var allA =document.querySelectorAll('#footNave>a');
// console.log(allA);


for ( var i=0; i<allA.length; i++  ){
    allA[i].onmouseover = function(){
        this.style.textDecoration = 'underline';
    }
}
for ( var i=0; i<allA.length; i++  ){
    allA[i].onmouseout = function(){
        this.style.textDecoration = 'none';
    }
}

