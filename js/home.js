/**
 * Created by lx on 2016/10/13.
 */
$(function () {
   // -----------------------------------------------------------banner轮播
    for (var i=0;i<3;i++) {
        //克隆第一个ul.banner-describe的li4次,并添加到ul去
        $('.banner-describe li').eq(i).clone(true).appendTo('.banner-describe');
    }
    //克隆第一个ul.banner-images的li1次，并添加到ul去
    $('.banner-images').append($('.banner-images li').eq(0).clone(true));

    var banCur = 0;//当前显示的ul.banner-images li帧数
    var banLen = $('.banner-images li').length;//获取ul.banner-images里li的个数

    function bannerScrollLeft() {
        banCur--;
        if (banCur == -1) {
            banCur = banLen - 2;
            $('.banner-describe').css({top:-(banLen-1)*477});
            $('.banner-images').css({left:-(banLen-1)*1200});
        }
        $('.banner-describe').stop().animate({top: -477 * banCur});
        $('.banner-images').stop().animate({left: -1200 * banCur});
    };
    function bannerScrollRight() {
        banCur++;
        if (banCur == banLen) {
            banCur = 1;
            $('.banner-describe').css({top:0});
            $('.banner-images').css({left:0});
        }
        $('.banner-describe').stop().animate({top: -477 * banCur});
        $('.banner-images').stop().animate({left: -1200 * banCur});
    }
    $('#bannerLeft').click(function () {
        bannerScrollLeft();
    });
    $('#bannerRight').click(function () {
        bannerScrollRight();
    });

    var bannerTimer = setInterval(bannerScrollRight,3000);
    $('#bannerLeft').mouseover(function () {
        clearInterval(bannerTimer);
    });
    $('#bannerRight').mouseover(function () {
        clearInterval(bannerTimer);
    });
    $('.banner-display-visible').mouseover(function () {
        clearInterval(bannerTimer);
    });
    $('#bannerLeft').mouseout(function () {
        bannerTimer = setInterval(bannerScrollRight,3000);
    });
    $('#bannerRight').mouseout(function () {
        bannerTimer = setInterval(bannerScrollRight,3000);
    });
    $('.banner-display-visible').mouseout(function () {
        bannerTimer = setInterval(bannerScrollRight,3000);
    });
    // ----------------------------------------------------split
    $('.split-close').click(function () {
        $(this).parent().stop().slideUp(1000);
    });
    $('.split-btn').mouseover(function () {
       $(this).next('.split-describe').stop().slideDown(1000);
    });

    // -------------------------------------------------Sto 轮播

    for (var j=0;j<4;j++) {
        //克隆第一个ul.Sto-tab的li4次,并添加到ul去
        $('.Sto-tab li').eq(j).clone(true).appendTo('.Sto-tab');
    }

    var stoCur = 0;//当前显示的ul.Sto-tab li帧数
    var stoLen = $('.Sto-tab li').length;//获取ul.Sto-tab里li的个数

    function stoScrollLeft() {
        stoCur--;
        if (stoCur == -1) {
            stoCur = stoLen - 5;
            $('.Sto-tab').css({left:-(stoLen-4)*305});
        }
        $('.Sto-tab').stop().animate({left: -305 * stoCur});
    };
    function stoScrollRight() {
        stoCur++;
        if (stoCur == stoLen - 3) {
            stoCur = 1;
            $('.Sto-tab').css({left:0});
        }
        $('.Sto-tab').stop().animate({left: -305 * stoCur});
    };
    $('#stoBtnLeft').click(function () {
        stoScrollLeft();
    });
    $('#stoBtnRight').click(function () {
        stoScrollRight();
    });

    var stoTimer = setInterval(stoScrollRight,1500);
    $('#stoBtnLeft').mouseover(function () {
        clearInterval(stoTimer);
    });
    $('#stoBtnRight').mouseover(function () {
        clearInterval(stoTimer);
    });
    $('.Sto-tab-display').mouseover(function () {
        clearInterval(stoTimer);
    });
    $('#stoBtnLeft').mouseout(function () {
        stoTimer = setInterval(stoScrollRight,1500);
    });
    $('#stoBtnRight').mouseout(function () {
        stoTimer = setInterval(stoScrollRight,1500);
    });
    $('.Sto-tab-display').mouseout(function () {
        stoTimer = setInterval(stoScrollRight,1500);
    });
    // ---------------------------------------------------------Pro
    $('.Pro-content li').hover(function () {
        $(this).find('.Pro-text').stop().animate({top:0,opacity:.8},500)
    },function () {
        $(this).find('.Pro-text').stop().animate({top:169,opacity:.5},500);
    });

    // ---------------------------------------------------------Pos
    //克隆第一个ul.Pos-display-content的第一个li.Pos-content1次,并添加到ul去
    $('.Pos-display-content').append($('.Pos-display-content li').eq(0).clone(true));
    
    var posCur = 0;//当前显示的ul.Pos-display-content li帧数
    var posLen = $('.Pos-display-content li').length;//获取ul.Pos-display-content里li的个数
    
    $('.Pos-btn-left').click(function () {
        posCur--;
        if (posCur == -1) {
            posCur = posLen - 2;
            $('.Pos-display-content').css({top:-(posLen-1)*190});
        }
        $('.Pos-display-content').stop().animate({top: -190 * posCur});
    });
    $('.Pos-btn-right').click(function () {
        posCur++;
        if (posCur == posLen) {
            posCur = 1;
            $('.Pos-display-content').css({top:0});
        }
        $('.Pos-display-content').stop().animate({top: -190 * posCur});
    });
});