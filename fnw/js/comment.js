/**
 * Created by Lygitan on 2017/2/17.
 */
$(function () {
    $(".ui_tab_nav li").on("click",function () {
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".ui_tab_content>div").eq(i).css({"display":"block"}).siblings().css({"display":"none"});
    });
});