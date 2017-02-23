/**
 * Created by Lygitan on 2017/2/20.
 */
$(function () {
    // --------------------------------------- 手机验证弹出对话框 start---------------------------------------
    var Popup = $(".Popup");
    // 对话框拖拽
    $(".Popup_title").on("mousedown",function (e) {
        var event = e || window.event;
        $(this).css("cursor","move");
        $(this).css({"background":"linear-gradient(top,#bdc6cd,#edf5f8)","background":"-moz-linear-gradient(top, #bdc6cd, #edf5f8)","background":"-webkit-gradient(linear, 0% 0%, 0% 100%, from(#bdc6cd), to(#edf5f8))","box-shadow":"none"});
        var x = event.clientX;
        var y = event.clientY;
        var w = x - Popup.offset().left;
        var h = y - Popup.offset().top;

        document.onmousemove = function (e) {
            var event = e || window.event;
            var _x = event.clientX;
            var _y = event.clientY;
            var top = Popup.css("top");

            var offsetR = document.documentElement.clientWidth - Popup.outerWidth();
            var clientH = document.documentElement.clientHeight;  //可视区域高度
            // var offsetH = top - scrollTop;  //元素偏移浏览器的高度
            var offsetH = top - document.body.scrollTop;  //元素偏移浏览器的高度
            // var offsetT = scrollTop;
            var offsetT = document.body.scrollTop;
            var offsetB = document.body.scrollTop + clientH - Popup.outerHeight();

            if(_x - w <= 0) {
                Popup.css("left",0);
            } else if(_x - w >= offsetR) {
                Popup.css("left",offsetR);
            } else {
                Popup.css("left",_x - w);
            }

            if(_y - h <= offsetT) {
                Popup.css("top",offsetT);
            } else if(_y - h >= offsetB) {
                Popup.css("top",offsetB);
            } else {
                Popup.css("top",_y - h);
            }
            // document.documentElement.clientHeight 可视区域高度
            // Popup.css("left",_x - w);
            // Popup.css("top",_y - h);
        };

        document.onmouseup = function () {
            $(".Popup_title").css("cursor","default");
            $(".Popup_title").css({"background":"","box-shadow":""});
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    });       
    
    $(".Popup_close,.btn_no").on("click",function () {
        Popup.css("display","none");
    });
    
    $(".btn_ok").on("click",function () {
        var val = $(".first input").val();
        if(val == '') {
            $("#avaliableTip").css("visibility","visible");
        }
    });
    
    // --------------------------------------- 手机验证弹出对话框 end---------------------------------------
    $(".icon_question").hover(function () {
        $(".tip").css("display","block");
    },function () {
        $(".tip").css("display","none");
    });

    // ui_tab
    $(".ui_tab_nav li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});