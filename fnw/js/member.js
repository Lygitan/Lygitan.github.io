/**
 * Created by Lygitan on 2017/2/10.
 */
$(function () {
    // -------------------------------------------- 猜你喜欢 start--------------------------------------------
    //克隆第一个ul#guessYouLike的第一个li 1次,并添加到ul去
    $('#guessYouLike').append($('#guessYouLike li').eq(0).clone(true));

    var gylCur = 0;//当前显示的ul#guessYouLike li帧数
    var gylLen = $('#guessYouLike li').length;//获取ul#guessYouLike里li的个数
    var gylNavCur = 0; //当前显示的ul#gylSlideNav li帧数
    var gylSlideTimer;//创建定时器

    function gylLeft() {
        gylCur--;
        gylNavCur--;
        if (gylCur == -1) {
            gylCur = gylLen - 2;
            gylNavCur = gylLen - 2;
            $('#guessYouLike').css({left:-(gylLen-1)*770});
            $("#gylSlideNav li").eq(gylLen-1).addClass("selected").siblings().removeClass("selected");
        }
        $('#guessYouLike').stop().animate({left: -770 * gylCur});
        $("#gylSlideNav li").eq(gylNavCur).addClass("selected").siblings().removeClass("selected");
    }
    $('#gylLeft').click(function () {
        gylLeft();
    });
    function gylRight() {
        gylCur++;
        gylNavCur++;
        if (gylCur == gylLen) {
            gylCur = 1;
            $('#guessYouLike').css({left:0});
        }
        if (gylNavCur == gylLen -1) {
            gylNavCur = 0;
        }
        $('#guessYouLike').stop().animate({left: -770 * gylCur});
        $("#gylSlideNav li").eq(gylNavCur).addClass("selected").siblings().removeClass("selected");
    }
    $('#gylRight').click(function () {
        gylRight();
    });
    $("#gylSlideNav li").mouseenter(function () {
        var index = $(this).index();
        gylCur = index - 1;
        gylNavCur = index - 1;
        gylRight();
    });
    gylSlideTimer = setInterval(gylRight,10000);
    $("#slideRelated").hover(function () {
        $(this).find('.slide-btn').css({"display":"block"});
        clearInterval(gylSlideTimer);
    },function () {
        $(this).find('.slide-btn').css({"display":"none"});
        gylSlideTimer = setInterval(gylRight,10000);
    });
    // -------------------------------------------- 猜你喜欢 end--------------------------------------------
    
    // -------------------------------------------- 积分兑换 start--------------------------------------------
    //克隆第一个ul#scoreNew的第一个li 1次,并添加到ul去
    $('#scoreNew').append($('#scoreNew li').eq(0).clone(true));

    var scoCur = 0;//当前显示的ul#scoreNew li帧数
    var scoLen = $('#scoreNew li').length;//获取ul#scoreNew里li的个数

    $('#scoLeft').click(function () {
        scoCur--;
        if (scoCur == -1) {
            scoCur = scoLen - 2;
            $('#scoreNew').css({left:-(scoLen-1)*240});
        }
        $('#scoreNew').stop().animate({left: -240 * scoCur});
    });
    $('#scoRight').click(function () {
        scoCur++;
        if (scoCur == scoLen) {
            scoCur = 1;
            $('#scoreNew').css({left:0});
        }
        $('#scoreNew').stop().animate({left: -240 * scoCur});
    });

    $('#scoreSlide').hover(function () {
        $(this).find('.slide-btn').css("display","block");
    },function () {
        $(this).find('.slide-btn').css("display","none");
    });
    // -------------------------------------------- 积分兑换 end--------------------------------------------

    // ----------------------------------------- 顶栏鼠标移入移出效果---------------------------------------
    //登录栏鼠标移入移出效果 start
    $(".please-login").hover(function () {
        $(this).css({"color":"#C20053"});
        $(this).find("span").css({"color":"#C20053"});
    },function () {
        $(this).css({"color":""});
        $(this).find("span").css({"color":""});
    });

    //送货至移入移出效果
    $(".header-topbar-city").hover(function () {
        $(".city-list-box").css({"display":"block"});
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(".city-list-box").css({"display":"none"});
        $(this).find(".arrow-icon").css({"transform":"rotate(0deg)"});
    });

    //我的飞牛移入移出效果
    $(".my-fn").hover(function () {
        $(".fn-login-box").css({"display":"block"});
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(".fn-login-box").css({"display":"none"});
        $(this).find(".arrow-icon").css({"transform":"rotate(0deg)"});
    });

    //我的订单移入移出效果
    $(".my-order").hover(function () {
        $(this).find("a").css("color","#C20053");
    },function () {
        $(this).find("a").css("color","");
    });

    //手机飞牛网移入移出效果
    $(".mobile-fn").hover(function () {
        $(".mobile-fn-box").css({"display":"block"});
        $(this).find(".arrow-icon").siblings().css("color","#C20053");
        $(this).find(".mobile").css("background-position","-129px -75px");
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(".mobile-fn-box").css({"display":"none"});
        $(this).find(".arrow-icon").siblings().css("color","");
        $(this).find(".mobile").css("background-position","-136px -44px");
        $(this).find(".arrow-icon").css({"transform":"rotate(0deg)"});
    });

    $(".mobile-fn-box dd a:nth-child(1)").hover(function () {
        $(this).css("color","#C20053");
        $(this).find(".iph").css("background-position","0 -160px");
    },function () {
        $(this).css("color","");
        $(this).find(".iph").css("background-position","-211px -52px");
    });
    $(".mobile-fn-box dd a:nth-child(2)").hover(function () {
        $(this).css("color","#C20053");
        $(this).find(".andr").css("background-position","-211px -104px");
    },function () {
        $(this).css("color","");
        $(this).find(".andr").css("background-position","-211px 0");
    });

    //积分商城移入移出效果
    $(".integral-mall").hover(function () {
        $(this).find("a").css("color","#C20053");
    },function () {
        $(this).find("a").css("color","");
    });

    //客户服务移入移出效果
    $(".customer-service").hover(function () {
        $(this).find(".t").css({"border":"1px solid #DEDEDE","border-top":"0","border-bottom":"0","background-color":"#fff","padding-left":"7px","padding-right":"18px"});
        $(".customer-service-box").css({"display":"block","left":"2px","border-top":"0","width":"66px"});
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(this).find(".t").css({"border":"0 none","background-color":"","padding-left":"","padding-right":""});
        $(".customer-service-box").css({"display":"none","left":"1px","border-top":"","width":""});
        $(this).find(".arrow-icon").css({"transform":"rotate(0deg)"});
    });

    //关注我们移入移出效果
    $(".follow-us").hover(function () {
        $(this).find("a").css("color","#C20053");
    },function () {
        $(this).find("a").css("color","");
    });

    //微信移入移出效果
    $(".wx").hover(function () {
        $(".wx-box").css({"display":"block"});
    },function () {
        $(".wx-box").css({"display":"none"});
    });

    //购物车移入移出效果
    $(".u-wrap").hover(function () {
        $(".cart-box").css("display","block");
    },function () {
        $(".cart-box").css("display","none");
    });
    //登录栏鼠标移入移出效果 end
});