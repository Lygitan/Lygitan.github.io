/**
 * Created by Lygitan on 2017/1/5.
 */
$(function () {
    // 头部广告关闭
   $(".header-ad-icon").click(function () {
       $(".header-ad").css("display","none");
   });

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
    //登录栏鼠标移入移出效果 end

    //购物车移入移出效果
    $(".cart").hover(function () {
        $(".cart-box").css("display","block");
    },function () {
        $(".cart-box").css("display","none");
    });

    //充值选项卡
    $(".reg-tab li").click(function () {
        var index = $(this).index();
        $(this).addClass("z-select").siblings().removeClass("z-select");
        $(".reg-panel").eq(index).css("display","block").siblings().css("display","none");
    });
    var regClickFlag = true;
    $(".reg-money input").click(function () {
        if(regClickFlag) {
            $(this).next(".reg-icon").css({"transform":"rotate(180deg)"});
            $(this).parents(".reg-money").find(".reg-price-list").css({"display":"block"});
        } else {
            $(this).next(".reg-icon").css({"transform":""});
            $(this).parents(".reg-money").find(".reg-price-list").css({"display":""});
        }
        regClickFlag = !regClickFlag;
    });
    $(".reg-price-list li").click(function () {
        var i = $(this).parents(".reg-panel").index();
        var index = $(this).index();
        var text = $(this).find("a").text();
        $(this).parent().css({"display":"none"}).siblings("input[name='recharge']").val(text).siblings(".reg-icon").css({"transform":""});
        $(".reg-panel").eq(i).find(".reg-price .price").eq(index).addClass("active").siblings().removeClass("active");
        regClickFlag = !regClickFlag;
    });

    //商品分类鼠标移入移出效果
    $("li.cg-item").hover(function () {
        var index = $(this).index();
        $(this).css("background-color","#C20053");
        $(this).find("h3").css("color","#fff");
        $(this).find("i").css("color","#fff");
        $(this).find("a").css("color","#fff");
        $(".sub-item").eq(index).css("display","block");
    },function () {
        var index = $(this).index();
        $(this).css("background-color","");
        $(this).find("h3").css("color","rgb(51,51,51)");
        $(this).find("i").css("color","rgb(51,51,51)");
        $(this).find("a").css("color","rgb(51,51,51)");
        $(".sub-item").eq(index).css("display","none");
    });

    $(".sub-item").hover(function () {
        $(this).css("display","block");
    },function () {
        $(this).css("display","none");
    });

    //楼层选项卡切换
    $(".floor-tab li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("selected").siblings().removeClass("selected");
        $(this).parents(".floor").find(".list").eq(index).css("display","block").siblings().css("display","none");
    });

    //11楼图书卡券右侧畅销栏
    $(".floor-aside-lst li").mouseenter(function () {
        $(this).addClass("chose").siblings().removeClass("chose");
    });

    //页面滚动
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var firstFloorOffsetTop = $(".floor").eq(0).offset().top;
        if(scrollTop > 800) {
            $("#aside").stop().fadeIn();
            $("#fixedBar").stop().fadeIn();
            $("#fixedContent").stop().fadeIn();
        } else {
            $("#aside").stop().fadeOut();
            $("#fixedBar").stop().fadeOut();
            $("#fixedContent").stop().fadeOut();
        }
        if(scrollTop >= firstFloorOffsetTop - 300) {
            $("#floorLift").stop().fadeIn();
        } else {
            $("#floorLift").stop().fadeOut();
        }
    });

    //侧边栏购物车
    $(".aside-cart").hover(function () {
        $(this).css({"background-color":"#C20053"});
        $(this).find(".cart-number").css({"background-color":"#fff","color":"#C20053"});
        $(this).find("i.shoppingCart-icon").css({"background-color":"#C20053"});
    },function () {
        $(this).css({"background-color":""});
        $(this).find(".cart-number").css({"background-color":"","color":""});
        $(this).find("i.shoppingCart-icon").css({"background-color":""});
    });
    var asideCartFlag = true;
    $(".aside-cart").click(function () {
        if(asideCartFlag) {
            asideCartFlag = !asideCartFlag;
            $(this).parents("#aside").stop().animate({"right":"0"},500);
        } else {
            asideCartFlag = !asideCartFlag;
            $(this).parents("#aside").stop().animate({"right":"-280"},500);
        }
    });
    $("i.cart-close").click(function () {
        asideCartFlag = !asideCartFlag;
        $(this).parents("#aside").stop().animate({"right":"-280"},500);
    });
    
    //侧边栏菜单
    $(".aside-tab").hover(function () {
        $(this).find("i.aside-icon").css({"background-color":"#C20053"});
        $(this).find(".tip").css({"background-color":"#C20053"}).stop().animate({"left":"-90px"},500);
    },function () {
        $(this).find("i.aside-icon").css({"background-color":""});
        $(this).find(".tip").css({"background-color":""}).stop().animate({"left":"35px"},500);
    });
    //返回顶部
    $(".return-back").click(function () {
        $("html,body").stop().animate({"scrollTop":0},1000);
    });

    //楼层导航
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var floorLen = $(".floor").length;
        for(var i = 0; i < floorLen - 1; i++) {
            if((scrollTop >= $(".floor").eq(i).offset().top - 300) && (scrollTop <= $(".floor").eq(i+1).offset().top - 300)) {
                $(".floor").eq(i).find(".floor-icon").css({"background-position":"-156px -94px"});
                $(".floor-lift li").eq(i).addClass("active").siblings().removeClass("active");
            } else {
                $(".floor").eq(i).find(".floor-icon").css({"background-position":"-124px -94px"});
            }
        }
        if(scrollTop >= $(".floor").eq(floorLen - 1).offset().top - 300) {
            $(".floor").eq(floorLen - 1).find(".floor-icon").css({"background-position":"-156px -94px"});
            $(".floor-lift li").eq(floorLen - 1).addClass("active").siblings().removeClass("active");
        } else {
            $(".floor").eq(floorLen - 1).find(".floor-icon").css({"background-position":"-124px -94px"});
        }
    });

    $(".floor-lift li").hover(function () {
        $(this).css({"background-color":"#C20053"});
        $(this).find("a").css({"display":"none"});
        $(this).find(".title").css({"display":"block","color":"#fff"});
    },function () {
        $(this).css({"background-color":""});
        $(this).find("a").css({"display":""});
        $(this).find(".title").css({"display":"","color":""});
    });
    $(".floor-lift li").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('html,body').stop().animate({
            scrollTop: $(".floor").eq(index).offset().top - 100
        }, 1000);
    });
});