(function (w) {
    function Zq() {

    }
    w.Zq = Zq;
    Zq.prototype.start = function () {
        // var audio;
        var clientWidth = document.body.clientWidth;
        var clientHeight = document.body.clientHeight;
        var timerID;
        var deg = 0;
        var srcArr = ['', './images/ny-images/01.mp3', './images/ny-images/02.mp3'];
        var audio;
        var swiper = newSwiper('#swiper2');
        $('.btn-nav').click(function () {
            var index = $(this).index();

            // newSwiper('#swiper' + (index + 1));
            musicProgressInit();
            if (index == 3) {
                //在这里弹出模态框
                // alert('英雄还在集结');
                openModal('该星区的“星耀铸剑师”正在陆续集结中，敬请期待！');
                return;
            }
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.name>img').eq(index).addClass('cur').siblings().removeClass('cur');
            $('.part').eq(index).stop(true).addClass('cur').siblings().removeClass('cur');

            swiper = newSwiper('#swiper' + (index + 1));
            if (index == 2) {
                audio = null;
                clearInterval(timerID);
                musicProgressInit();
            }
        });
        $('.music-bg').click(function () {
            if (audio) {
                var duration = audio.duration;
                //切换播放图标
                $(this).toggleClass('on');
                //如果图标为播放，则播放音乐并开启进度条
                if ($(this).hasClass('on')) {
                    audioProgress(duration);
                    audio.play();
                } else {
                    //否则停止音乐  并停止计时器
                    clearInterval(timerID);
                    audio.pause();
                }
            } else {
                openModal('《轩辕剑龙舞云山》全新主题曲\n将于520发布会现场首度唱响\n 敬请期待！！');
                return;
            }
        });
        //上一星宿
        $('.part03 .swiper-button-prev').click(function () {
            audio.pause();
            clearInterval(timerID);
            musicProgressInit();
            var index = parseInt($('.part03 .swiper-slide-active').attr('music-index')) - 1;
            if (srcArr[index] == '') {
                audio = null;
                clearInterval(timerID);
                musicProgressInit();
            } else {
                clearInterval(timerID);
                musicProgressInit();
                if (audio) {
                    audio.pause();
                }
                audio = createAudio(srcArr[index]);
            }
        });
        //下一星宿
        $('.part03 .swiper-button-next').click(function () {
            //获取下一个star的信息面板的下标
            var index = parseInt($('.part03 .swiper-slide-active').attr('music-index')) + 1;
            //如果没有音乐
            if (srcArr[index] == '') {
                audio = null;
                clearInterval(timerID);
                musicProgressInit();
            } else {
                clearInterval(timerID);
                musicProgressInit();
                if (audio) {
                    audio.pause();
                }
                audio = createAudio(srcArr[index]);
            }
        });
        $('.alert-close').click(closeModal);
        $('.btn-confirm').click(closeModal);

        /**
         * 关闭弹出框
         */
        function closeModal() {
            $('.alert-wrap').css({
                display: 'none',
                opacity: '0'
            });
            return;
        }
        /**
         * 打开弹出框
         */
        function openModal(content) {
            $('.alert-wrap').css({
                display: 'block',
                opacity: '1'
            });
            $('.alert-wrap .alert-content').text(content);
            return;
        }


        /**
         * 音乐播放时，进度条的旋转
         * @param {音乐的时长，用于计算每秒要旋转的度数} duration 
         */
        function audioProgress(duration) {
            //算出每秒旋转的角度;
            var step = 360 / duration;
            deg += step;
            clearInterval(timerID);
            timerID = setInterval(function () {
                if (deg <= 180) {
                    deg += step;
                    $('.progress-1').css({
                        transform: 'rotate(' + deg + 'deg)'
                    });
                    $('.progress-origin').css({
                        display: 'block',
                        transform: 'rotate(' + deg + 'deg)'
                    })
                }
                if (deg >= 180) {
                    deg += step;
                    $('.progress-holder').css('clip', 'auto');
                    if (deg <= 360) {
                        $('.progress-2').css({
                            display: 'block',
                            transform: 'rotate(' + deg + 'deg)'
                        });
                        $('.progress-origin').css({
                            display: 'block',
                            transform: 'rotate(' + deg + 'deg)'
                        })
                    } else {
                        $('.music-bg').toggleClass('on');
                        musicProgressInit();
                        clearInterval(timerID);
                    }
                }

            }, 1000);
        }
        /**
         * 新建一个audio对象并设置音乐源
         *  @param {音乐路径} musicSrc
         */
        function createAudio(musicSrc) {
            var audio = new Audio();
            audio.setAttribute("src", musicSrc);
            return audio;

        }
        /**
         * 初始化音乐的进度样式
         */
        function musicProgressInit() {
            //大进度条1恢复初始化
            $('.progress-holder').css('clip', ' rect(0 128px 128px 70px)');
            $('.progress-1').css({
                transform: 'rotate(0deg)'
            })
            //大进度条2恢复初始化
            $('.progress-2').css({
                display: 'none',
                transform: 'rotate(0deg)'
            });
            //小进度条恢复初始化
            $('.progress-origin').css({
                display: 'none',
                transform: 'rotate(0deg)'
            });
            //播放图标恢复初始化
            $('.part03 .music-bg.on').removeClass('on');
            //旋转角度恢复初始化
            deg = 0;
        }
        /**
         * new a swiper
         */
        function newSwiper(id) {
            var mySwiper = new Swiper(id + '.swiper-container', {
                // direction: 'vertical', // 垂直切换选项
                // loop: true, // 循环模式选项
                // allowSlideNext : false,
                // allowSlidePrev : false,
                // 如果需要分页器
                // pagination: {
                //     el: '.swiper-pagination',
                // },

                // effect: 'cube',
                // cubeEffect: {
                //     slideShadows: true,
                //     shadow: true,
                //     shadowOffset: 50,
                //     shadowScale: 0.6
                // },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // noSwiping:true,
                // 如果需要滚动条
                // scrollbar: {
                //   el: '.swiper-scrollbar',
                // },
            });

            return mySwiper;

        }

        //点击英雄头像
        $('.part .star.ulock').click(function () {
            $(this).addClass('current').siblings('a').removeClass('current');
            if ($(this).parent().parent().hasClass('part03')) {
                var idx = $(this).attr('idx');
                if (audio) {
                    audio.pause();
                }
                if (srcArr[idx] == '') {
                    audio = null;
                    clearInterval(timerID);
                    musicProgressInit();
                } else {
                    clearInterval(timerID);
                    musicProgressInit();
                    if (audio) {
                        audio.pause();
                    }
                    audio = createAudio(srcArr[idx]);
                }
                swiper.slideTo(idx, 500, false);

            }
        });
        $('.part .star.lock').click(function () {
            openModal('星耀铸剑师”正在陆续集结中，敬请期待！');
        });
        $('.bigger').click(function () {
            $('.img-wrap').stop(true).fadeIn(1000);
            // .css({
            //     display: 'block',
            //     opacity: '1'
            // });
            var src = $(this).attr('img-src');
            $('.img-wrap img').attr('src', src);
            imageSizeChange();
        });
        //监听窗口变化，让弹出的图片自适应
        window.onresize = function () {
            console.log('监听变化')
            clientWidth = document.body.clientWidth;
            clientHeight = document.body.clientHeight;
            imageSizeChange();
        }
        //图片比例尺寸
        function imageSizeChange() {
            var beishu = $('.img-wrap img').parent().width() / $('.img-wrap img').parent().height();
            $('.img-wrap img').parent().animate({
                width: clientWidth / 2,
                height: clientWidth / 2 / beishu,
                marginLeft: -clientWidth / 2 / 2,
                marginTop: -clientWidth / 2 / beishu / 2
            }, 1000);
        }

        $('.close-img').click(function () {
            // $('.img-wrap').css({
            //     display: 'none',
            //     opacity: '0'
            // });
            $('.img-wrap').stop(true).fadeOut(1000);
        });


        $('.btn-order').click(function () {
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
            $('.android').css({
                'backgroundColor': '#000',
                'color': '#fff'
            });
            $('.ios').css({
                'backgroundColor': '#fff',
                'color': '#000'
            });
        })

        $('.ios').click(function () {
            $('.android').css({
                'backgroundColor': '#fff',
                'color': '#000'
            });
            $('.ios').css({
                'backgroundColor': '#000',
                'color': '#fff'
            });
        })
        // 预约
        var tip1 = document.getElementsByClassName('tip1')[0];
        var tip2 = document.getElementsByClassName('tip2')[0];
        var tip3 = document.getElementsByClassName('tip3')[0];
        var tip4 = document.getElementsByClassName('tip4')[0];
        var tip5 = document.getElementsByClassName('tip5')[0];
        var tip6 = document.getElementsByClassName('tip6')[0];
        var tel = document.querySelectorAll('.tel>input')[0];
        var code = document.querySelectorAll('.code')[0];
        var code1 = document.querySelectorAll('.code1')[0];

        tel.onfocus = function () {
            tip1.style.display = 'none';
            tip4.style.display = 'none';
            tel.style.backgroundColor = '#fff';
        }

        tel.onblur = function () {
            tel.style.backgroundColor = 'transparent';
            if (!(/^1[3456789]\d{9}$/.test(tel.value))) {
                tip1.style.display = 'block';
                tip4.style.display = 'none';
            } else {
                tip1.style.display = 'none';
                tip4.style.display = 'block';
            }
        }
        code.onfocus = function () {
            code.style.backgroundColor = '#fff';
        }
        code.onblur = function () {
            code.style.backgroundColor = 'transparent';
        }
        code1.onfocus = function () {
            tip3.style.display = 'none';
            tip6.style.display = 'none';
            code1.style.backgroundColor = '#fff';
        }

        code.onblur = function () {
            code.style.backgroundColor = 'transparent';
            if (!(/^[0-9A-Za-z]{4}$/.test(code.value))) {
                tip2.style.display = 'block';
                tip5.style.display = 'none';
            } else {
                tip2.style.display = 'none';
                tip5.style.display = 'block';
            }
        }

        code1.onblur = function () {
            code1.style.backgroundColor = 'transparent';
            if (!(/^\d{6}$/.test(code1.value))) {
                tip3.style.display = 'block';
                tip6.style.display = 'none';
            } else {
                tip3.style.display = 'none';
                tip6.style.display = 'block';
            }
        }

    }
})(window);

var zq = new Zq();
zq.start();