$(function () {
    // 顶部栏轮播的描述消息
    var timerId = setInterval(nextDb, 3500);
    // 定义一个变量保存3句描述信息的id
    var index = 1;

    // 当鼠标移入描述信息的大盒子的时候,暂停轮播
    $('.top_topBar>div').mouseenter(function () {
        clearInterval(timerId);
    });

    // 鼠标移出后重新开始轮播
    $('.top_topBar>div').mouseleave(function () {
        timerId = setInterval(nextDb, 3500);
    })

    // 封装一个移动到下一句描述信息的方法
    function nextDb() {

        $('.top_topBar ul').animate({
            top: -index * $('.top_topBar ul a').height(),
        }, 500, 'linear', function () {
            index++;
            if (index > 3) {
                index = 1;
                $(this).css('top', 0);
            }
        });
    }

    $('.order .downOrder').click(function(){

    
        var $res = $('<embed src="./img/xyj.mp4"  loop="true" class="xyj" autostart="true">');
        $('#shadow>div').append($res);
        $('#shadow').css('display','block');
    });
    
    $('#shadow img').click(function(){
        $('#shadow').css('display','none').find('embed').remove();
    });


    // 页面加载或刷新的时候 显示
    $('.heroBox span').animate({
        opacity: 1
    });

    // 页面加载或刷新的时候 显示预约人数
    $('.section2 .giftList p').animate({
        opacity:1
    },function(){
        $(this).css('background','url(img/mk2_02.png) no-repeat');
    });

    // 当页面加载或者刷新的时候 显示邀请相应人数获得的奖励
    $('.section3 .giftBox p').animate({
        opacity:1
    });


    setInterval(function () {
        $('.wrip .order i.left').animate({
            left: -6
        }, function () {
            $(this).animate({
                left: -10
            })
        });

        $('.wrip .order i.right').animate({
            right: -6
        }, function () {
            $(this).animate({
                right: -10
            })
        });

        $('.section3 .btmOrder .left').animate({
            left:-18
        },function(){
            $(this).animate({
                left:-15
            });
        });

        $('.section3 .btmOrder .right').animate({
            right:-18
        },function(){
            $(this).animate({
                right:-15
            });
        });

    }, 1000);

    setInterval(function () {
        $('.wrip .next i').animate({
            top: 5
        }, function () {
            $(this).animate({
                top: -5
            });
        });
    }, 1000);

    var $orderSpan = $('.section2 .tit span');
    var spanX = $orderSpan.width();

    var $orderEm = $('.section2 .progress em');
    var emX = $orderEm.width();

    var $orderP = $('.section2 .giftList p');
    var pX = $orderP.width();

    $orderSpan.each(function(index,ele){

        $orderSpan.eq(index).css('left', spanX * index + 120 + 70 * index);
        $orderEm.eq(index).css({
            'left': emX * index + 100 + 176 * index,
            top: 2
        });
        $orderP.eq(index).css('left', pX * index + 96 + 33 * index);
    });

    var $emFlag = $('.section2 .giftList em.flag');

    setInterval(function () {

        $emFlag.each(function(index,ele){
            if(index >= 2){
                $emFlag.eq(index).css('backgroundPositionY', -84 - index);
            }else {
                $emFlag.css('backgroundPositionY', -84);
            }
        });

        setTimeout(function () {
            $emFlag.css('backgroundPositionY', 0);
        }, 250);

    }, 500);


    // 模块4 的手风琴效果
    $('.section4 .pic').mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 底部固定栏遍历定位    
    $('.progress .giftList>p').each(function(index,ele){
        $('.progress .giftList>p').eq(index).css('left',90 * index + 23);
    });
  
    // 点击切换固定栏
    $('.downWrap .btnDorp>i').click(function(){
        $('.downWrap').removeClass('show');
        $('.packUp').addClass('show');
    });

    $('.packUp .btnUp>i').click(function(){
        $('.packUp').removeClass('show');
        $('.downWrap').addClass('show');
    });

    $('.shareBox .sm i').mouseenter(function(){
        $(this).siblings('.desc').show(200);
    });

    $('.shareBox .sm i').mouseleave(function(){
        $(this).siblings('.desc').hide();
    });  
    
    $('.wrip .next i').click(function(){
        $('html,body').animate({
            scrollTop:$(this).offset().top
        },250);
    });

    
    $(".button_su_inner").mouseenter(function (e) {
        var parentOffset = $(this).offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({
            "left": relX, "top": relY
        }
        );
        $(this).prev(".su_button_circle").removeClass("desplode-circle");
        $(this).prev(".su_button_circle").addClass("explode-circle");
    });
    $(".button_su_inner").mouseleave(function (e) {
        var parentOffset = $(this).offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({
            "left": relX, "top": relY
        }
        );
        $(this).prev(".su_button_circle").removeClass("explode-circle");
        $(this).prev(".su_button_circle").addClass("desplode-circle");
    });





    $('.upOrder').mouseenter(function () {
        // $(this).css("backgroundPosition", '18PX -60px');
        // $('.login').hide();
    })
    $('.upOrder').mouseleave(function () {
    
        // $(this).css({ "backgroundPosition": '18px 0', 'backgroundSize': '702px' });
        // $('.login').hide();
    })
    $('.upOrder').click(function () {
    
        $('.login').show();
    })


    $('.btmOrder').mouseenter(function () {
       
    })
    $('.btmOrder').mouseleave(function () {
    
      
    })
    $('.btmOrder').click(function () {
    
        $('.login').show();
    })

   
    $('.doc a').mouseenter(function () {
       
    })
    $('.doc a').mouseleave(function () {
    
      
    })
    $('.doc a').click(function () {
    
        $('.login').show();
    })

    $('.downMain .btn_order').mouseenter(function () {
       
    })
    $('.downMain .btn_order').mouseleave(function () {
    
      
    })
    $('.downMain .btn_order').click(function () {
    
        $('.login').show();
    })

    $('.packUp .btn_order').mouseenter(function () {
       
    })
    $('.packUp .btn_order').mouseleave(function () {
    
      
    })
    $('.packUp .btn_order').click(function () {
    
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
    



var i = document.querySelectorAll('.i')[0];
var a = document.querySelectorAll('.a')[0];



i.onclick = function () {
    i.style.backgroundColor = '#000';
    i.style.color = '#fff'
    a.style.backgroundColor = '#fff';
    a.style.color = '#000';

}
a.onclick = function () {
    a.style.backgroundColor = '#000';
    a.style.color = '#fff';
    i.style.backgroundColor = '#fff';
    i.style.color = '#000';
}


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



   
    // 游戏目录鼠标移入弹出
$('.left').mouseenter(function () {
    $('.game-menu').slideDown(1000);
})
 // 游戏目录鼠标移出收回
$('.left').mouseleave(function () {
    $('.game-menu').stop(true).slideUp(1000);
})


});