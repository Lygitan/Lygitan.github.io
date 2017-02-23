/**
 * Created by Lygitan on 2017/2/16.
 */
$(function () {
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
        $(this).css({"padding":"0 1px"});
        $(this).find(".post").css({"border":"1px solid #DEDEDE","background-color":"#fff","border-top":"0","border-bottom":"0","z-index":"9"});
        $(".city-list-box").css({"display":"block"});
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(this).css({"padding":""});
        $(this).find(".post").css({"border":"","background-color":"","border-top":"","border-bottom":""});
        $(".city-list-box").css({"display":"none"});
        $(this).find(".arrow-icon").css({"transform":"rotate(0deg)"});
    });

    //我的飞牛移入移出效果
    $(".my-fn").hover(function () {
        $(this).css("padding","0 1px");
        $(this).find(".t").css({"border":"1px solid #DEDEDE","background-color":"#fff","border-top":"0","border-bottom":"0"});
        $(".fn-login-box").css({"display":"block"});
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(this).css("padding","");
        $(this).find(".t").css({"border":"0 none","background-color":"","border-top":"","border-bottom":""});
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
        $(this).css("padding","0 1px");
        $(this).find(".t").css({"border":"1px solid #DEDEDE","border-top":"0","border-bottom-color":"#fff","background-color":"#fff"});
        $(".mobile-fn-box").css({"display":"block"});
        $(this).find(".arrow-icon").siblings().css("color","#C20053");
        $(this).find(".mobile").css("background-position","-129px -75px");
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(this).css("padding","");
        $(this).find(".t").css({"border":"","border-top":"","border-bottom-color":"","background-color":""});
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
        $(this).css("padding","0 1px");
        $(this).find(".t").css({"border":"1px solid #DEDEDE","border-top":"0","border-bottom-color":"#fff","background-color":"#fff"});
        $(".customer-service-box").css({"display":"block"});
        $(this).find(".arrow-icon").css({"transform":"rotate(180deg)"});
    },function () {
        $(this).css("padding","");
        $(this).find(".t").css({"border":"0 none","border-top":"","border-bottom-color":"","background-color":""});
        $(".customer-service-box").css({"display":"none"});
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