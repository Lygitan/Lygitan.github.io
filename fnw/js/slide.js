/**
 * Created by Lygitan on 2017/1/9.
 */
$(function () {
    // -------------------------------------------- 今日推荐轮播 start--------------------------------------------
    //克隆第一个ul.rmd-slide-display的第一个li 1次,并添加到ul去
    $('.rmd-slide-display').append($('.rmd-slide-display li').eq(0).clone(true));

    var rmdCur = 0;//当前显示的ul.rmd-slide-display li帧数
    var rmdLen = $('.rmd-slide-display li').length;//获取ul.rmd-slide-display里li的个数

    $('#rmdSlideLeftBtn').click(function () {
        rmdCur--;
        if (rmdCur == -1) {
            rmdCur = rmdLen - 2;
            $('.rmd-slide-display').css({left:-(rmdLen-1)*1000});
        }
        $('.rmd-slide-display').stop().animate({left: -1000 * rmdCur});
    });
    $('#rmdSlideRightBtn').click(function () {
        rmdCur++;
        if (rmdCur == rmdLen) {
            rmdCur = 1;
            $('.rmd-slide-display').css({left:0});
        }
        $('.rmd-slide-display').stop().animate({left: -1000 * rmdCur});
    });
    // -------------------------------------------- 今日推荐轮播 end--------------------------------------------


    // -------------------------------------------- 特色频道轮播 start--------------------------------------------
    //克隆第一个ul.channel-c-slide-display的第一个li 1次,并添加到ul去
    $('.channel-c-slide-display').append($('.channel-c-slide-display li').eq(0).clone(true));

    var cnlCur = 0;//当前显示的ul.channel-c-slide-display li帧数
    var cnlLen = $('.channel-c-slide-display li').length;//获取ul.channel-c-slide-display里li的个数
    var cnlNavCur = 0; //当前显示的ul#channelSlideNav li帧数
    var channelSlideTimer;//创建定时器

    function channelSlideLeft() {
        cnlCur--;
        cnlNavCur--;
        if (cnlCur == -1) {
            cnlCur = cnlLen - 2;
            cnlNavCur = cnlLen -2;
            $('.channel-c-slide-display').css({left:-(cnlLen-1)*399});
            $("#channelSlideNav li").eq(cnlLen-1).addClass("on").siblings().removeClass("on");
        }
        $('.channel-c-slide-display').stop().animate({left: -399 * cnlCur});
        $("#channelSlideNav li").eq(cnlNavCur).addClass("on").siblings().removeClass("on");
    }
    $('#channelSlideLeftBtn').click(function () {
        channelSlideLeft();
    });
    function channelSlideRight() {
        cnlCur++;
        cnlNavCur++;
        if (cnlCur == cnlLen) {
            cnlCur = 1;
            $('.channel-c-slide-display').css({left:0});
        }
        if(cnlNavCur == cnlLen - 1) {
            cnlNavCur = 0;
        }
        $('.channel-c-slide-display').stop().animate({left: -399 * cnlCur});
        $("#channelSlideNav li").eq(cnlNavCur).addClass("on").siblings().removeClass("on");
    }
    $('#channelSlideRightBtn').click(function () {
        channelSlideRight();
    });
    $("#channelSlideNav li").mouseenter(function () {
        var index = $(this).index();
        cnlCur = index - 1;
        cnlNavCur = index - 1;
        channelSlideRight();
    });
    channelSlideTimer = setInterval(channelSlideRight,3000);
    $("#channelSlide").hover(function () {
        $('#channelSlideLeftBtn').css({"display":"block"});
        $('#channelSlideRightBtn').css({"display":"block"});
        clearInterval(channelSlideTimer);
    },function () {
        $('#channelSlideLeftBtn').css({"display":"none"});
        $('#channelSlideRightBtn').css({"display":"none"});
        channelSlideTimer = setInterval(channelSlideRight,3000);
    });
    // -------------------------------------------- 特色频道轮播 end--------------------------------------------

    // -------------------------------------------- 一楼轮播 start--------------------------------------------
    //克隆第一个ul.list-item-slide12-display的第一个li 1次,并添加到ul去
    $('.list-item-slide12-display').append($('.list-item-slide12-display li').eq(0).clone(true));

    var floor1Cur = 0;//当前显示的ul.list-item-slide12-display li帧数
    var floor1Len = $('.list-item-slide12-display li').length;//获取ul.list-item-slide12-display里li的个数
    var floor1NavCur = 0; //当前显示的ul#floor1SlideNav li帧数
    var floor1SlideTimer;//创建定时器

    function floor1SlideLeft() {
        floor1Cur--;
        floor1NavCur--;
        if (floor1Cur == -1) {
            floor1Cur = floor1Len - 2;
            floor1NavCur = floor1Len - 2;
            $('.list-item-slide12-display').css({left:-(floor1Len-1)*399});
            $("#floor1SlideNav li").eq(floor1Len-1).addClass("on").siblings().removeClass("on");
        }
        $('.list-item-slide12-display').stop().animate({left: -399 * floor1Cur});
        $("#floor1SlideNav li").eq(floor1NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor1SlideLeftBtn').click(function () {
        floor1SlideLeft();
    });
    function floor1SlideRight() {
        floor1Cur++;
        floor1NavCur++;
        if (floor1Cur == floor1Len) {
            floor1Cur = 1;
            $('.list-item-slide12-display').css({left:0});
        }
        if (floor1NavCur == floor1Len -1) {
            floor1NavCur = 0;
        }
        $('.list-item-slide12-display').stop().animate({left: -399 * floor1Cur});
        $("#floor1SlideNav li").eq(floor1NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor1SlideRightBtn').click(function () {
        floor1SlideRight();
    });
    $("#floor1SlideNav li").mouseenter(function () {
        var index = $(this).index();
        floor1Cur = index - 1;
        floor1NavCur = index - 1;
        floor1SlideRight();
    });
    floor1SlideTimer = setInterval(floor1SlideRight,3000);
    $("#floor1Slide").hover(function () {
        $('#floor1SlideLeftBtn').css({"display":"block"});
        $('#floor1SlideRightBtn').css({"display":"block"});
        clearInterval(floor1SlideTimer);
    },function () {
        $('#floor1SlideLeftBtn').css({"display":"none"});
        $('#floor1SlideRightBtn').css({"display":"none"});
        floor1SlideTimer = setInterval(floor1SlideRight,3000);
    });
    // -------------------------------------------- 一楼轮播 end--------------------------------------------

    // -------------------------------------------- 三楼轮播 start--------------------------------------------
    //克隆第一个ul.list-item-slide32-display的第一个li 1次,并添加到ul去
    $('.list-item-slide32-display').append($('.list-item-slide32-display li').eq(0).clone(true));

    var floor3Cur = 0;//当前显示的ul.list-item-slide32-display li帧数
    var floor3Len = $('.list-item-slide12-display li').length;//获取ul.list-item-slide32-display里li的个数
    var floor3NavCur = 0; //当前显示的ul#floor3SlideNav li帧数
    var floor3SlideTimer;//创建定时器

    function floor3SlideLeft() {
        floor3Cur--;
        floor3NavCur--;
        if (floor3Cur == -1) {
            floor3Cur = floor3Len - 2;
            floor3NavCur = floor3Len - 2;
            $('.list-item-slide32-display').css({left:-(floor3Len-1)*399});
            $("#floor3SlideNav li").eq(floor3Len-1).addClass("on").siblings().removeClass("on");
        }
        $('.list-item-slide32-display').stop().animate({left: -399 * floor3Cur});
        $("#floor3SlideNav li").eq(floor3NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor3SlideLeftBtn').click(function () {
        floor3SlideLeft();
    });
    function floor3SlideRight() {
        floor3Cur++;
        floor3NavCur++;
        if (floor3Cur == floor3Len) {
            floor3Cur = 1;
            $('.list-item-slide32-display').css({left:0});
        }
        if (floor3NavCur == floor3Len -1) {
            floor3NavCur = 0;
        }
        $('.list-item-slide32-display').stop().animate({left: -399 * floor3Cur});
        $("#floor3SlideNav li").eq(floor3NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor3SlideRightBtn').click(function () {
        floor3SlideRight();
    });
    $("#floor3SlideNav li").mouseenter(function () {
        var index = $(this).index();
        floor3Cur = index - 1;
        floor3NavCur = index - 1;
        floor3SlideRight();
    });
    floor3SlideTimer = setInterval(floor3SlideRight,3000);
    $("#floor3Slide").hover(function () {
        $('#floor3SlideLeftBtn').css({"display":"block"});
        $('#floor3SlideRightBtn').css({"display":"block"});
        clearInterval(floor3SlideTimer);
    },function () {
        $('#floor3SlideLeftBtn').css({"display":"none"});
        $('#floor3SlideRightBtn').css({"display":"none"});
        floor3SlideTimer = setInterval(floor3SlideRight,3000);
    });
    // -------------------------------------------- 三楼轮播 end--------------------------------------------

    // -------------------------------------------- 四楼轮播 start--------------------------------------------
    //克隆第一个ul.list-item-slide41-display的第一个li 1次,并添加到ul去
    $('.list-item-slide41-display').append($('.list-item-slide41-display li').eq(0).clone(true));

    var floor4Cur = 0;//当前显示的ul.list-item-slide41-display li帧数
    var floor4Len = $('.list-item-slide41-display li').length;//获取ul.list-item-slide41-display里li的个数
    var floor4NavCur = 0; //当前显示的ul#floor4SlideNav li帧数
    var floor4SlideTimer;//创建定时器

    function floor4SlideLeft() {
        floor4Cur--;
        floor4NavCur--;
        if (floor4Cur == -1) {
            floor4Cur = floor4Len - 2;
            floor4NavCur = floor4Len - 2;
            $('.list-item-slide41-display').css({left:-(floor4Len-1)*399});
            $("#floor4SlideNav li").eq(floor4Len-1).addClass("on").siblings().removeClass("on");
        }
        $('.list-item-slide41-display').stop().animate({left: -399 * floor4Cur});
        $("#floor4SlideNav li").eq(floor4NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor4SlideLeftBtn').click(function () {
        floor4SlideLeft();
    });
    function floor4SlideRight() {
        floor4Cur++;
        floor4NavCur++;
        if (floor4Cur == floor4Len) {
            floor4Cur = 1;
            $('.list-item-slide41-display').css({left:0});
        }
        if (floor4NavCur == floor4Len -1) {
            floor4NavCur = 0;
        }
        $('.list-item-slide41-display').stop().animate({left: -399 * floor4Cur});
        $("#floor4SlideNav li").eq(floor4NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor4SlideRightBtn').click(function () {
        floor4SlideRight();
    });
    $("#floor4SlideNav li").mouseenter(function () {
        var index = $(this).index();
        floor4Cur = index - 1;
        floor4NavCur = index - 1;
        floor4SlideRight();
    });
    floor4SlideTimer = setInterval(floor4SlideRight,3000);
    $("#floor4Slide").hover(function () {
        $('#floor4SlideLeftBtn').css({"display":"block"});
        $('#floor4SlideRightBtn').css({"display":"block"});
        clearInterval(floor4SlideTimer);
    },function () {
        $('#floor4SlideLeftBtn').css({"display":"none"});
        $('#floor4SlideRightBtn').css({"display":"none"});
        floor4SlideTimer = setInterval(floor4SlideRight,3000);
    });
    // -------------------------------------------- 四楼轮播 end--------------------------------------------

    // -------------------------------------------- 六楼轮播 start--------------------------------------------
    //克隆第一个ul.list-item-slide61-display的第一个li 1次,并添加到ul去
    $('.list-item-slide61-display').append($('.list-item-slide61-display li').eq(0).clone(true));

    var floor6Cur = 0;//当前显示的ul.list-item-slide61-display li帧数
    var floor6Len = $('.list-item-slide61-display li').length;//获取ul.list-item-slide61-display里li的个数
    var floor6NavCur = 0; //当前显示的ul#floor6SlideNav li帧数
    var floor6SlideTimer;//创建定时器

    function floor6SlideLeft() {
        floor6Cur--;
        floor6NavCur--;
        if (floor6Cur == -1) {
            floor6Cur = floor6Len - 2;
            floor6NavCur = floor6Len - 2;
            $('.list-item-slide61-display').css({left:-(floor6Len-1)*399});
            $("#floor6SlideNav li").eq(floor6Len-1).addClass("on").siblings().removeClass("on");
        }
        $('.list-item-slide61-display').stop().animate({left: -399 * floor6Cur});
        $("#floor6SlideNav li").eq(floor6NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor6SlideLeftBtn').click(function () {
        floor6SlideLeft();
    });
    function floor6SlideRight() {
        floor6Cur++;
        floor6NavCur++;
        if (floor6Cur == floor6Len) {
            floor6Cur = 1;
            $('.list-item-slide61-display').css({left:0});
        }
        if (floor6NavCur == floor6Len -1) {
            floor6NavCur = 0;
        }
        $('.list-item-slide61-display').stop().animate({left: -399 * floor6Cur});
        $("#floor6SlideNav li").eq(floor6NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor6SlideRightBtn').click(function () {
        floor6SlideRight();
    });
    $("#floor6SlideNav li").mouseenter(function () {
        var index = $(this).index();
        floor6Cur = index - 1;
        floor6NavCur = index - 1;
        floor6SlideRight();
    });
    floor6SlideTimer = setInterval(floor6SlideRight,3000);
    $("#floor6Slide").hover(function () {
        $('#floor6SlideLeftBtn').css({"display":"block"});
        $('#floor6SlideRightBtn').css({"display":"block"});
        clearInterval(floor6SlideTimer);
    },function () {
        $('#floor6SlideLeftBtn').css({"display":"none"});
        $('#floor6SlideRightBtn').css({"display":"none"});
        floor6SlideTimer = setInterval(floor6SlideRight,3000);
    });
    // -------------------------------------------- 六楼轮播 end--------------------------------------------

    // -------------------------------------------- 八楼轮播 start--------------------------------------------
    //克隆第一个ul.list-item-slide81-display的第一个li 1次,并添加到ul去
    $('.list-item-slide81-display').append($('.list-item-slide81-display li').eq(0).clone(true));

    var floor8Cur = 0;//当前显示的ul.list-item-slide81-display li帧数
    var floor8Len = $('.list-item-slide81-display li').length;//获取ul.list-item-slide81-display里li的个数
    var floor8NavCur = 0; //当前显示的ul#floor8SlideNav li帧数
    var floor8SlideTimer;//创建定时器

    function floor8SlideLeft() {
        floor8Cur--;
        floor8NavCur--;
        if (floor8Cur == -1) {
            floor8Cur = floor8Len - 2;
            floor8NavCur = floor8Len - 2;
            $('.list-item-slide81-display').css({left:-(floor8Len-1)*399});
            $("#floor8SlideNav li").eq(floor8Len-1).addClass("on").siblings().removeClass("on");
        }
        $('.list-item-slide81-display').stop().animate({left: -399 * floor8Cur});
        $("#floor8SlideNav li").eq(floor8NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor8SlideLeftBtn').click(function () {
        floor8SlideLeft();
    });
    function floor8SlideRight() {
        floor8Cur++;
        floor8NavCur++;
        if (floor8Cur == floor8Len) {
            floor8Cur = 1;
            $('.list-item-slide81-display').css({left:0});
        }
        if (floor8NavCur == floor8Len -1) {
            floor8NavCur = 0;
        }
        $('.list-item-slide81-display').stop().animate({left: -399 * floor8Cur});
        $("#floor8SlideNav li").eq(floor8NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor8SlideRightBtn').click(function () {
        floor8SlideRight();
    });
    $("#floor8SlideNav li").mouseenter(function () {
        var index = $(this).index();
        floor8Cur = index - 1;
        floor8NavCur = index - 1;
        floor8SlideRight();
    });
    floor8SlideTimer = setInterval(floor8SlideRight,3000);
    $("#floor8Slide").hover(function () {
        $('#floor8SlideLeftBtn').css({"display":"block"});
        $('#floor8SlideRightBtn').css({"display":"block"});
        clearInterval(floor8SlideTimer);
    },function () {
        $('#floor8SlideLeftBtn').css({"display":"none"});
        $('#floor8SlideRightBtn').css({"display":"none"});
        floor8SlideTimer = setInterval(floor8SlideRight,3000);
    });
    // -------------------------------------------- 八楼轮播 end--------------------------------------------

    // -------------------------------------------- 九楼轮播 start--------------------------------------------
    //克隆第一个ul.list-item-slide91-display的第一个li 1次,并添加到ul去
    $('.list-item-slide91-display').append($('.list-item-slide91-display li').eq(0).clone(true));

    var floor9Cur = 0;//当前显示的ul.list-item-slide91-display li帧数
    var floor9Len = $('.list-item-slide91-display li').length;//获取ul.list-item-slide91-display里li的个数
    var floor9NavCur = 0; //当前显示的ul#floor9SlideNav li帧数
    var floor9SlideTimer;//创建定时器

    function floor9SlideLeft() {
        floor9Cur--;
        floor9NavCur--;
        if (floor9Cur == -1) {
            floor9Cur = floor9Len - 2;
            floor9NavCur = floor9Len - 2;
            $('.list-item-slide91-display').css({left:-(floor9Len-1)*399});
            $("#floor9SlideNav li").eq(floor9Len-1).addClass("on").siblings().removeClass("on");
        }
        $('.list-item-slide91-display').stop().animate({left: -399 * floor9Cur});
        $("#floor9SlideNav li").eq(floor9NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor9SlideLeftBtn').click(function () {
        floor9SlideLeft();
    });
    function floor9SlideRight() {
        floor9Cur++;
        floor9NavCur++;
        if (floor9Cur == floor9Len) {
            floor9Cur = 1;
            $('.list-item-slide91-display').css({left:0});
        }
        if (floor9NavCur == floor9Len -1) {
            floor9NavCur = 0;
        }
        $('.list-item-slide91-display').stop().animate({left: -399 * floor9Cur});
        $("#floor9SlideNav li").eq(floor9NavCur).addClass("on").siblings().removeClass("on");
    }
    $('#floor9SlideRightBtn').click(function () {
        floor9SlideRight();
    });
    $("#floor9SlideNav li").mouseenter(function () {
        var index = $(this).index();
        floor9Cur = index - 1;
        floor9NavCur = index - 1;
        floor9SlideRight();
    });
    floor9SlideTimer = setInterval(floor9SlideRight,3000);
    $("#floor9Slide").hover(function () {
        $('#floor9SlideLeftBtn').css({"display":"block"});
        $('#floor9SlideRightBtn').css({"display":"block"});
        clearInterval(floor9SlideTimer);
    },function () {
        $('#floor9SlideLeftBtn').css({"display":"none"});
        $('#floor9SlideRightBtn').css({"display":"none"});
        floor9SlideTimer = setInterval(floor9SlideRight,3000);
    });
    // -------------------------------------------- 九楼轮播 end--------------------------------------------

    // -------------------------------------------- 天天购轮播 start--------------------------------------------
    //克隆ul.share-slide-display的前两个li 1次,并添加到ul去
    for(var i = 0;i < 2; i++) {
        $('.share-slide-display').append($('.share-slide-display li').eq(i).clone(true));
    }

    var shareCur = 0;//当前显示的ul.share-slide-display li帧数
    var shareLen = $('.share-slide-display li').length;//获取ul.share-slide-display里li的个数

    function shareSlide() {
        shareCur++;
        if (shareCur == shareLen-1) {
            shareCur = 1;
            $('.share-slide-display').css({top:0});
        }
        $('.share-slide-display').stop().animate({top: -139 * shareCur});
    }
    var shareTimer = setInterval(shareSlide,2000);

    $("#shareSlide").hover(function () {
        clearInterval(shareTimer);
    },function () {
        shareTimer = setInterval(shareSlide,2000);
    });
    // -------------------------------------------- 天天购轮播 end--------------------------------------------

});