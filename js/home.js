/**
 * Created by lx on 2016/10/13.
 */
$(function () {
   // -----------------------------------------------------------banner轮播
   //  for (var i=0;i<5;i++) {
        //克隆第一个li 5次并添加到ul去
        // $('.banner-describe').append($('.banner-describe li').eq(0).clone(true));

        $('.banner-describe li').eq(0).clone(true).appendTo('.banner-describe');
    // }
});