$(function(){
    $('#trigger-1').mouseover(function(){
        $('.QRcode-wx').stop(true).fadeToggle();
    }).mouseout(function(){
        $('.QRcode-wx').stop(true).fadeToggle();
    });
    
    $('#trigger-2').mouseover(function(){
        $('.QRcode-wb').stop(true).fadeToggle();
    }).mouseout(function(){
        $('.QRcode-wb').stop(true).fadeToggle();
    });
    
    $('#trigger-3').mouseover(function(){
        $('.QRcode-yx').stop(true).fadeToggle();
    }).mouseout(function(){
        $('.QRcode-yx').stop(true).fadeToggle();
    });
    
    $('#trigger-4').mouseover(function(){
        $('.QRcode-qq').stop(true).fadeToggle();
    }).mouseout(function(){
        $('.QRcode-qq').stop(true).fadeToggle();
    });

    $('#trigger-5').mouseover(function(){
        $('#trigger-5>a>.inner-1>.text-tieba').css({
            display:'block',
        })
    })

    $('#trigger-5').mouseout(function(){
        $('#trigger-5>a>.inner-1>.text-tieba').css({
            display:'none',
        })
    })

    $('#trigger-6').mouseover(function(){
        $('#trigger-6>a>.inner-2>.text-luntan').css({
            display:'block',
        })
    })

    $('#trigger-6').mouseout(function(){
        $('#trigger-6>a>.inner-2>.text-luntan').css({
            display:'none',
        })
    })

    $('#trigger-7').mouseover(function(){
        $('#trigger-7>.share-bar').css({
            display:'block',
        })
    })

    $('#trigger-7').mouseout(function(){
        $('#trigger-7>.share-bar').css({
            display:'none',
        })
    })

    $('#musiccontrol').click(function(){
        var music = document.getElementById("music"); 
        if(music.paused){
            music.play(); 
            $('#musiccontrol').css({
                animationPlayState:'running',
                backgroundPosition:'-247px -152px'
            })
        }else{ 
            music.pause();
            $('#musiccontrol').css({
                animationPlayState:'paused',
                backgroundPosition:'-247px -176px'
            })
        };
    });

    $('.bg').css({
        opacity: '0',
        background:'url(./Images/ri_634a8e7.png)',
    }).fadeTo(1000,1);

    setTimeout(function(){
        $('.header').fadeTo(3000,1);
    },1000);
    
    setTimeout(function(){
        $('.logo>h1>a').animate({
            top: 0,
            opacity: 1,
        },1000);
    },2000);

    setTimeout(function(){
        $('.reguluslegends').animate({
            right: 4,
        },2000)
    }, 3000);
    
    setTimeout(function(){
        $('.staryao').animate({
            right: 23,
           },2250);
    }, 4000);

   setTimeout(function(){
       $('.leftbottom').fadeTo(3000,1);
   }, 2500);

   setTimeout(function(){
       $('.arrowsdow>a').fadeTo(3000,1);
   }, 4000);

   $('.reguluslegends').mouseover(function(){
       $('.reguluslegends').children('img').attr('src','./Images/side_order_btn_h_ed4a456.png');
   });
   $('.reguluslegends').mouseout(function(){
       $('.reguluslegends').children('img').attr('src','./Images/side_order_btn_ffa99a7.png');
   });

   $('.staryao').mouseover(function(){
       $('.staryao').children('img').attr('src','./Images/side_xy_btn_h_df62ecf.png');
   });
   $('.staryao').mouseout(function(){
       $('.staryao').children('img').attr('src','./Images/side_xy_btn_9006502.png');
   });

   function bodyScale() {
    var i = screen.width;//获取电脑屏幕的宽度
    var width = window.innerWidth;//获取浏览器当前的宽度
    var scales = width / i;//浏览器的宽度除以电脑屏幕的宽度
    var figure = document.querySelector('#figure');
    figure.style.zoom = scales;//zoom缩放  //浏览器涨缩时，div的宽高等于scales值      
    var leftbottom = document.querySelector('.leftbottom');
    leftbottom.style.zoom = scales;//zoom缩放  //浏览器涨缩时，div的宽高等于scales值      
    }
    //改变浏览器大小时调用此方法bodyScale()
    //onresize 事件会在窗口或框架被调整大小时发生。
    //onresize 事件通过监听对象的高和宽，其中任何一个属性发生变化都会触发 onresize 事件。
    //除了 window 对象，其他 html 标签好像并不支持 onresize 事件，定义了之后并不会触发。
    window.onload = window.onresize = function () {
        bodyScale();            
    }

    setTimeout(function(){
        $('#figure>li').eq(0).fadeTo(5000,1).css({
            animation:'flip 1s 1.8s',
        });
        $('#figure>li').eq(1).fadeTo(4000,1).css({
            animation:'flip 1s 1.5s',
        });
        $('#figure>li').eq(2).fadeTo(3000,1).css({
            animation:'flip 1s 1.2s',
        });
        $('#figure>li').eq(3).fadeTo(2000,1).css({
            animation:'flip 1s 0.8s',
        });
        $('#figure>li').eq(4).fadeTo(2000,1).css({
            animation:'flip 1s 0.8s',
        });
        $('#figure>li').eq(5).fadeTo(3000,1).css({
            animation:'flip 1s 1.2s',
        });
        $('#figure>li').eq(6).fadeTo(4000,1).css({
            animation:'flip 1s 1.5s',
        });
        $('#figure>li').eq(7).fadeTo(5000,1).css({
            animation:'flip 1s 1.8s',
        });
    }, 3000);

    $('.arrowsdow').click(function(){

        $('#figure>li').eq(0).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(1).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(2).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(3).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(4).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(5).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(6).css({
            animation:'flipOutY 2s',
        });
        $('#figure>li').eq(7).css({
            animation:'flipOutY 2s',
        });

        setTimeout(function(){

            $('#figure>li').css({
                display: 'none',
                opacity:'0',
            });

            $('.bigwallpaper').css({
                background:'url(./Images/bg1_48ceae1.jpg)',
            }).fadeTo(1000,1);
            
            $('.arrowsdow').fadeOut().css({
                    display:'none',
                });

            $('.arrowsdow-up').css({
                    display:'block',
                }).fadeTo(500,1);

            setTimeout(function(){

                $('.bigwallpaper').children('li').fadeTo(1500,1).css({
                    animation:'heartBeat 2s',
                });

                setTimeout(function(){

                    $('.bigwallpaper').children('li:odd').css({
                        animation:'bigwallpaperkey 2s infinite linear alternate',
                    }).end().children('li:even').css({
                        animation:'bigwallpaperkey 1.5s infinite linear alternate',
                    });
    
                },1990);

            },1990);
            
        },1990);

    });

    $('.arrowsdow-up').click(function(){

        $('.bigwallpaper').fadeTo(1000,0);
        $('.arrowsdow-up').fadeTo(1000,0);

        setTimeout(function(){

            $('.bigwallpaper').css({
                display:'none',
            });

            $('.arrowsdow-up').css({
                display:'none',
            });

            $('#figure>li').css({
                display: 'block',
            });

            $('#figure>li').eq(0).fadeTo(5000,1).css({
                animation:'flip 1s 1.8s',
            });
            $('#figure>li').eq(1).fadeTo(4000,1).css({
                animation:'flip 1s 1.5s',
            });
            $('#figure>li').eq(2).fadeTo(3000,1).css({
                animation:'flip 1s 1.2s',
            });
            $('#figure>li').eq(3).fadeTo(2000,1).css({
                animation:'flip 1s 0.8s',
            });
            $('#figure>li').eq(4).fadeTo(2000,1).css({
                animation:'flip 1s 0.8s',
            });
            $('#figure>li').eq(5).fadeTo(3000,1).css({
                animation:'flip 1s 1.2s',
            });
            $('#figure>li').eq(6).fadeTo(4000,1).css({
                animation:'flip 1s 1.5s',
            });
            $('#figure>li').eq(7).fadeTo(5000,1).css({
                animation:'flip 1s 1.8s',
            });

            $('.arrowsdow').fadeIn(1000);

        },1500);

    });

        var indexoutoutout;

        $('.indicatorarrowRight').click(function () {
            indexoutoutout++;
            if (indexoutoutout == $('.slideshowbox>li').length) {
                indexoutoutout = 0; //显示第0张
            }
            $('.slideshowbox>li').eq(indexoutoutout).stop(true).fadeIn().siblings().fadeOut();
        });
        $('.indicatorarrowLeft').click(function () {
            indexoutoutout--;
            if (indexoutoutout == -1) {
                indexoutoutout = $('.slideshowbox>li').length - 1; //显示最后一张
            }
            $('.slideshowbox>li').eq(indexoutoutout).stop(true).fadeIn().siblings().fadeOut();
        });

    function indexininin(a) {
            a++;
            if (a == $('.slideshowbox>li').length) {
                a = 0; //显示第0张
            }
            $('.slideshowbox>li').eq(a).show(0).siblings().hide(0);
            a--;
            if (a == -1) {
                a = $('.slideshowbox>li').length - 1; //显示最后一张
            }
            $('.slideshowbox>li').eq(a).show(0).siblings().hide(0);
    };

    $('.bigwallpaper>li').eq(0).mouseover(function(){
        $('.bigwallpaper>li').eq(0).children('a').children('img:first').attr('src','./Images/btn-bsfg-h_bc6528a.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()

 ;   })

    $('.bigwallpaper>li').eq(0).mouseout(function(){
        $('.bigwallpaper>li').eq(0).children('a').children('img:first').attr('src','./Images/btn-bsfg_ee911e4.png');
    });
    
    $('.bigwallpaper>li').eq(1).mouseover(function(){
        $('.bigwallpaper>li').eq(1).children('a').children('img:first').attr('src','./Images/btn-ydxg-h_7ea341b.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()

 ;   })

    $('.bigwallpaper>li').eq(1).mouseout(function(){
        $('.bigwallpaper>li').eq(1).children('a').children('img:first').attr('src','./Images/btn-ydxg_f1b3fa9.png');
    });
    
    $('.bigwallpaper>li').eq(2).mouseover(function(){
        $('.bigwallpaper>li').eq(2).children('a').children('img:first').attr('src','./Images/btn-swmy-h_c6de9c0.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()

 ;   })

    $('.bigwallpaper>li').eq(2).mouseout(function(){
        $('.bigwallpaper>li').eq(2).children('a').children('img:first').attr('src','./Images/btn-swmy_9f503ca.png');
    });
    
    $('.bigwallpaper>li').eq(3).mouseover(function(){
        $('.bigwallpaper>li').eq(3).children('a').children('img:first').attr('src','./Images/btn-fzfw-h_7481ffc.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()

 ;   })

    $('.bigwallpaper>li').eq(3).mouseout(function(){
        $('.bigwallpaper>li').eq(3).children('a').children('img:first').attr('src','./Images/btn-fzfw_fe93d18.png');
    });
    
    $('.bigwallpaper>li').eq(4).mouseover(function(){
        $('.bigwallpaper>li').eq(4).children('a').children('img:first').attr('src','./Images/btn-dfwt-h_3aa0246.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()
    });

    $('.bigwallpaper>li').eq(4).mouseout(function(){
        $('.bigwallpaper>li').eq(4).children('a').children('img:first').attr('src','./Images/btn-dfwt_1f9e0fd.png');
    });
    
    $('.bigwallpaper>li').eq(5).mouseover(function(){
        $('.bigwallpaper>li').eq(5).children('a').children('img:first').attr('src','./Images/btn-mhca-h_db22cbe.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()
    });

    $('.bigwallpaper>li').eq(5).mouseout(function(){
        $('.bigwallpaper>li').eq(5).children('a').children('img:first').attr('src','./Images/btn-mhca_0dad955.png');
    });
    
    $('.bigwallpaper>li').eq(6).mouseover(function(){
        $('.bigwallpaper>li').eq(6).children('a').children('img:first').attr('src','./Images/btn-fmsj-h_f0a8259.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()
    });

    $('.bigwallpaper>li').eq(6).mouseout(function(){
        $('.bigwallpaper>li').eq(6).children('a').children('img:first').attr('src','./Images/btn-fmsj_81538e6.png');
    });
    
    $('.bigwallpaper>li').eq(7).mouseover(function(){
        $('.bigwallpaper>li').eq(7).children('a').children('img:first').attr('src','./Images/btn-gszt-h_b2d6629.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()
    });

    $('.bigwallpaper>li').eq(7).mouseout(function(){
        $('.bigwallpaper>li').eq(7).children('a').children('img:first').attr('src','./Images/btn-gszt_0bb90de.png');
    });
    
    $('.bigwallpaper>li').eq(8).mouseover(function(){
        $('.bigwallpaper>li').eq(8).children('a').children('img:first').attr('src','./Images/btn-tyym-h_0128b71.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()
    });

    $('.bigwallpaper>li').eq(8).mouseout(function(){
        $('.bigwallpaper>li').eq(8).children('a').children('img:first').attr('src','./Images/btn-tyym_54d998b.png');
    });
    
    $('.bigwallpaper>li').eq(9).mouseover(function(){
        $('.bigwallpaper>li').eq(9).children('a').children('img:first').attr('src','./Images/btn-yljn-h_ea60690.png');
    }).click(function(){
        indexininin($(this).index());
        indexoutoutout = $(this).index();
        $('.slideshow').fadeIn()
    });

    $('.bigwallpaper>li').eq(9).mouseout(function(){
        $('.bigwallpaper>li').eq(9).children('a').children('img:first').attr('src','./Images/btn-yljn_97be1f1.png');
    });
    
    $('.bigwallpaper>li').mouseover(function(){
        $(this).css({
            zIndex: '10',
        });
        $(this).children('a').children('img:last').stop(true).fadeTo(250,1).css({
            display:'block',
        });
    });

    $('.bigwallpaper>li').mouseout(function(){
        $(this).css({
            zIndex: '6',
        });
        $(this).children('a').children('img:last').stop(true).fadeTo(250,0).css({
            display:'none',
        });
    });

    $('.turnoff').click(function(){
        $('.slideshow').hide();
        $('.arrowsdow-up').show();
        $('.leftbottom').show();
        $('.header').show();
    });

    $('.bigwallpaper').children('li').click(function(){
        $('.arrowsdow-up').hide();
        $('.leftbottom').hide();
        $('.header').hide();
    });

    $('#figure>li').click(function(){
        var myAudio = ($('.voiceactor>li').eq($(this).index()).children())[0];
        if (myAudio.paused) { //判断当前的状态是否为暂停，若是则点击播放，否则暂停
            myAudio.play();
        }else{
            myAudio.pause();
            myAudio.currentTime=0;
        }
    });

});

