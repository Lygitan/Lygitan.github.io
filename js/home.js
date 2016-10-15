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

    $('#bannerLeft').click(function () {
        banCur--;
        if (banCur == -1) {
            banCur = banLen - 2;
            $('.banner-describe').css({top:-(banLen-1)*477});
            $('.banner-images').css({left:-(banLen-1)*1200});
        }
        $('.banner-describe').stop().animate({top: -477 * banCur});
        $('.banner-images').stop().animate({left: -1200 * banCur});
    });
    $('#bannerRight').click(function () {
        banCur++;
        if (banCur == banLen) {
            banCur = 1;
            $('.banner-describe').css({top:0});
            $('.banner-images').css({left:0});
        }
        $('.banner-describe').stop().animate({top: -477 * banCur});
        $('.banner-images').stop().animate({left: -1200 * banCur});
    });
    // $('.banner-images li').each(function () {
    //     var h = ($(this).height()-$(this).find('img').eq(0).height())/2;
    //     $(this).css({paddingTop:h});
    // });


    // -------------------------------------------------Sto 轮播

    for (var j=0;j<4;j++) {
        //克隆第一个ul.Sto-tab的li4次,并添加到ul去
        $('.Sto-tab li').eq(j).clone(true).appendTo('.Sto-tab');
    }

    var stoCur = 0;//当前显示的ul.Sto-tab li帧数
    var stoLen = $('.Sto-tab li').length;//获取ul.Sto-tab里li的个数

    $('#stoBtnLeft').click(function () {
        stoCur--;
        if (stoCur == -1) {
            stoCur = stoLen - 5;
            $('.Sto-tab').css({left:-(stoLen-4)*305});
        }
        $('.Sto-tab').stop().animate({left: -305 * stoCur});
    });
    $('#stoBtnRight').click(function () {
        stoCur++;
        if (stoCur == stoLen - 3) {
            stoCur = 1;
            $('.Sto-tab').css({left:0});
        }
        $('.Sto-tab').stop().animate({left: -305 * stoCur});
    });


    // ---------------------------------------------------------Pro
    $('.Pro-content li').hover(function () {
        $(this).find('.Pro-text').stop().animate({top:0})
    },function () {
        $(this).find('.Pro-text').stop().animate({top:169});
    })
});