$(function () {
   
    
    $('#zt').click(function () {

        var audio = document.getElementById('mp3Btn');
        if (audio.paused) //如果当前是暂停状态
        {
            audio.play();//播放
            $('#zt').css({
                animationPlayState: 'running'
            })

        
        } else {
            audio.pause(); //暂停
            $('#zt').css({
                animationPlayState: 'paused',

            })
        }

    })

    $('#questionnairelist-submit-163').click(function(){

        $("input[type$='text']").each(function(){
            $('.question_title').css("color","rgb(97,97,97)");
            if($(this).val()=="") 
             {
                $('.question_title').css("color","red");
            }
           
        })
    
    });
    
 // 点赞

    $('.nav>.nav2').addClass('nav2_bg').css('display', 'inline-block');

    var index = 0;
    $('.xin').click(function () {
        index++;
        if (index > 5) {
            $('.alert_wrap').css('display', 'block');
            index = 5;
            return;
        }


        var enwss = parseInt($(this).children('em').text());
        enwss++;


        $(this).children('em').text(enwss);
        $(this).children('i').addClass('shixin');


    })

 
    

    // 点赞弹出
    $('.btns').click(function(){
        $('.alert_wrap').css('display','none');
    })
    $('.alertClose').click(function(){
        $('.alert_wrap').css('display','none');
    })
    // 第二页
    $('.num2').click(function(){
        $(this).addClass('num_bg');
        $('#vote_list').css('display','none');
        $('#vote_left').css('display','block');
        $('.num1').removeClass('num_bg');
    })
    // 第一页
    $('.num1').click(function(){
        $(this).addClass('num_bg');
        $('#vote_left').css('display','none');
        $('#vote_list').css('display','block');
        $('.num2').removeClass('num_bg');
    })
    // 下一页
    $('.next').click(function(){
        $('#vote_list').css('display','none');
        $('#vote_left').css('display','block');
        $('.num2').addClass('num_bg');
        $('.num1').removeClass('num_bg');
    })
    // 上一页
    $('.page').click(function(){
        $('#vote_left').css('display','none');
        $('#vote_list').css('display','block');
        $('.num1').addClass('num_bg');
        $('.num2').removeClass('num_bg');
    })

    // 子页投票 

    var idsx = 0;
    $('.vote-btns>.vote_box').click(function(){
        idsx++;
        $(this).children('span').text(idsx);

        
    })

    // 点击阴影事件
$('.order').click(function () {
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

})