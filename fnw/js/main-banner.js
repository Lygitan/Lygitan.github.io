/**
 * Created by Lygitan on 2017/1/6.
 */
window.onload = function () {
    var img = document.getElementsByClassName('main-banner-img')[0].getElementsByTagName('li'),
        nav = document.getElementsByClassName('main-banner-nav')[0].getElementsByTagName('li'),
        banner = document.getElementById('mainBanner'),
        left = document.getElementsByClassName('left-btn')[0],
        right = document.getElementsByClassName('right-btn')[0];

    var timer;//设置定时器(的id)
    var speed = 3000;//轮播切换速度
    var cur = 0;//当前显示的帧数
    var len=img.length;//轮播的帧数

    timer = setInterval(code,speed);
    function code() {
        cur++;
        if(cur == len){
            cur = 0;
        }
        display();
    }
    function display() {
        for (var i = 0; i < len; i++) {
            if (i == cur) {
                img[i].className = 'on';
                nav[i].className = 'on';
            } else {
                img[i].className = '';
                nav[i].className = '';
            }
        }
    }
    for(var i=0;i<len;i++) {
        nav[i].cur = i;
        nav[i].onmouseover = function () {
            cur = this.cur;
            display();
        };
    }

    banner.onmouseover = function () {
        clearInterval(timer);
        left.style.display = "block";
        right.style.display = "block";
    };
    banner.onmouseout = function () {
        timer = setInterval(code,speed);
        left.style.display = "none";
        right.style.display = "none";
    };
    left.onclick = function () {
        cur--;
        if(cur < 0){
            cur = len-1;
        }
        display();
    };
    right.onclick = function () {
        cur++;
        if(cur == len){
            cur = 0;
        }
        display();
    };
};


