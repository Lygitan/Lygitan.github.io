/**
 * Created by Lygitan on 2017/2/17.
 */
$(function () {
    // m-cptype
    $(".cptype").hover(function () {
        $(this).find("ul").css({"display":"block"});
        $(".cptype ul li").on("click",function () {
            $(this).addClass("active").siblings().removeClass("active");
            var $this = $(this).parent().siblings("p").find("span");
            if($this.attr("choosenclassify")) {
                $this.text($(this).text()).attr("choosenclassify",$(this).attr("classify"));
            } else {
                $this.text($(this).text()).attr("choosenstatus",$(this).attr("status"));
                if($this.attr("choosenstatus") == 1) {
                    $("#sortContainer").css("display","block");
                } else {
                    $("#sortContainer").css("display","none");
                }
            }
        });
    },function () {
        $(this).find("ul").css({"display":"none"});
    });

    // ---------------------------------------- recommend slide start----------------------------------------
    //克隆第一个ul#voucherSlide的第一个li 1次,并添加到ul去
    $('#voucherSlide').append($('#voucherSlide li').eq(0).clone(true));

    var vchCur = 0;//当前显示的ul#voucherSlide li帧数
    var vchLen = $('#voucherSlide li').length;//获取ul#voucherSlide里li的个数

    function vchLeft() {
        vchCur--;
        if (vchCur == -1) {
            vchCur = vchLen - 2;
            $('#voucherSlide').css({left:-(vchLen-1)*980});
        }
        $('#voucherSlide').stop().animate({left: -980 * vchCur});
    }
    $('#vchLeft').click(function () {
        vchLeft();
    });
    function vchRight() {
        vchCur++;
        if (vchCur == vchLen) {
            vchCur = 1;
            $('#voucherSlide').css({left:0});
        }
        $('#voucherSlide').stop().animate({left: -980 * vchCur});
    }
    $('#vchRight').click(function () {
        vchRight();
    });

    $("#slideTrem").hover(function () {
        $(this).find('.slide-btn').css({"display":"block"});
        $(this).find('.slide-btn #tremLeft').hover(function () {
            $(this).css({"background-position":"-39px -171px"});
        },function () {
            $(this).css({"background-position":"0 -171px"});
        });
        $(this).find('.slide-btn #tremRight').hover(function () {
            $(this).css({"background-position":"-39px -233px"});
        },function () {
            $(this).css({"background-position":"0 -233px"});
        });
    },function () {
        $(this).find('.slide-btn').css({"display":"none"});
    });
    // ---------------------------------------- recommend slide end----------------------------------------
});