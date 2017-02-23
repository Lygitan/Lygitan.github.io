/**
 * Created by Lygitan on 2017/2/16.
 */
$(function () {
    //订单
    $(".ui_tab_nav li").hover(function () {
        $(this).addClass("active");
        var i = $(this).index();
        if(i < 5) {
            $(".nav_line").stop().animate({"left":120*i},"fast");
        } else {
            $(".nav_line").stop().animate({"left":614});
        }
    },function () {
        $(this).removeClass("active");
        $(".nav_line").stop().animate({"left":0},"fast");
    });

    //更多筛选条件
    var cdtFlag =true;
    $(".u-more-cdt").on("click",function () {
        if(cdtFlag) {
            $(this).find("i").addClass("up");
            $("#moreCdt").slideDown("300");
            cdtFlag = !cdtFlag;
        } else {
            $(this).find("i").removeClass("up");
            $("#moreCdt").slideUp("300");
            cdtFlag = !cdtFlag;
        }
    });

    //最近时间
    $(".u-recent a").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});