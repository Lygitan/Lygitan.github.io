/**
 * Created by lx on 2016/10/6.
 */
window.onload = function () {

    var allTwiLi = document.getElementsByClassName('Twi-li');
    for (var t = 0; t < allTwiLi.length; t++){
        allTwiLi[t].onmouseover = function () {
            this.getElementsByTagName('div')[0].className = 'Twi-img-other';
        };
        allTwiLi[t].onmouseout = function () {
            this.getElementsByTagName('div')[0].className = 'Twi-img';
        }
    }

    var exc = $('ExcDisplay');
    var excCur = 0;
    var excDl = exc.getElementsByTagName('dl');
    for (var excI = 0; excI < 3; excI++){
        exc.appendChild(excDl[excI].cloneNode(true));
    }
    var excLen = excDl.length;

    var allExcDt = exc.getElementsByTagName('dt');
    for (var e = 0; e < allExcDt.length; e++){
        allExcDt[e].onmouseover = function () {
            this.getElementsByTagName('span')[0].style.display = 'block';
        };
        allExcDt[e].onmouseout = function () {
            this.getElementsByTagName('span')[0].style.display = 'none';
        }
    }

// -------------------------------------------轮播1--------------------------------------
    function excScrollLeft() {
        var sum;
        excCur--;
        if(excCur == -1){
            excCur = excLen - 4;
            sum =-(excLen-3)*407+'px';
            exc.style.left = sum;
        }
        animate(exc,{left:- 407 * excCur});
    }
    function excScrollRight() {
        excCur++;
        if(excCur == excLen-2){
            excCur = 1;
            exc.style.left = 0;
        }
        animate(exc,{left:-407 * excCur});
    }


    $('btnLeft').onclick = function () {
        excScrollLeft();
    };
    $('btnRight').onclick = function () {
        excScrollRight();
    };

    var excTimer = setInterval(excScrollRight,1000);
    exc.onmouseover = function () {
        clearInterval(excTimer);
    };
    exc.onmouseout = function () {
        excTimer = setInterval(excScrollRight,1000);
    };
    var ExcBtn = $('ExcBtn');
    ExcBtn.onmouseover = function () {
        clearInterval(excTimer);
    };
    ExcBtn.onmouseout = function () {
        excTimer = setInterval(excScrollRight,1000);
    };


    // -------------------------------------------轮播2--------------------------------------
    var hot = $('HotImg');
    var hotCur = 0;
    var hotImg = hot.getElementsByTagName('img');
    hot.appendChild(hotImg[0].cloneNode(true));
    var hotLen = hotImg.length;

    var hotDesc = $('HotDescribe');
    var  hotAllDesc= hotDesc.getElementsByTagName('div');
    for (var hotI = 0; hotI < 5; hotI++){
        hotDesc.appendChild(hotAllDesc[0].cloneNode(true));
    }


    function hotScrollLeft() {
        var sum,txtSum;
        hotCur--;
        if(hotCur == -1){
            hotCur = hotLen - 2;
            sum =-(hotLen-1)*880+'px';
            hot.style.left = sum;
            txtSum =-(hotLen-1)*119+'px';
            hotDesc.style.top = txtSum;
        }
        animate(hot,{left:- 880 * hotCur});
        animate(hotDesc,{top:-119 * hotCur});
    }

    function hotScrollRight() {
        hotCur++;
        if(hotCur == hotLen){
            hotCur = 1;
            hot.style.left = 0;
            hotDesc.style.top = 0;
        }
        animate(hot,{left:-880 * hotCur});
        animate(hotDesc,{top:-119 * hotCur});
    }

    $('HotLeft').onclick = function () {
        hotScrollLeft();
    };

    $('HotRight').onclick = function () {
        hotScrollRight();
    };

    var hotTimer = setInterval(hotScrollLeft,3000);

    hot.onmouseover = function () {
        clearInterval(hotTimer);
    };
    hot.onmouseout = function () {
        hotTimer = setInterval(hotScrollLeft,3000);
    };
    var HotBtn = $('HotBtn');
    HotBtn.onmouseover = function () {
        clearInterval(hotTimer);
    };
    HotBtn.onmouseout = function () {
        hotTimer = setInterval(hotScrollLeft,3000);
    };

    var HotContent = $('HotContent');
    HotContent.onmouseover = function () {
        clearInterval(hotTimer);
    };
    HotContent.onmouseout = function () {
        hotTimer = setInterval(hotScrollLeft,3000);
    };
    // -------------------------------------------轮播3--------------------------------------
    var env = $('EnvDisplay');
    var envCur = 0;
    var envImg = env.getElementsByTagName('img');
    env.appendChild(envImg[0].cloneNode(true));
    var envLen = envImg.length;

    var envDesc = $('EnvDescribe');
    var  envAllDesc= envDesc.getElementsByTagName('div');
    for (var envI = 0; envI < 5; envI++){
        envDesc.appendChild(envAllDesc[0].cloneNode(true));
    }

    function envScrollLeft() {
        var sum,txtSum;
        envCur--;
        if(envCur == -1){
            envCur = envLen - 2;
            sum =-(envLen-1)*880+'px';
            env.style.left = sum;
            txtSum =-(envLen-1)*191+'px';
            envDesc.style.top = txtSum;
        }
        animate(env,{left:- 880 * envCur});
        animate(envDesc,{top:-191 * envCur});
    }

    function envScrollRight() {
        envCur++;
        if(envCur == envLen){
            envCur = 1;
            env.style.left = 0;
            envDesc.style.top = 0;
        }
        animate(env,{left:-880 * envCur});
        animate(envDesc,{top:-191 * envCur});
    }

    $('envLeft').onclick = function () {
        envScrollLeft();
    };
    $('envRight').onclick = function () {
        envScrollRight();
    };

    var envTimer = setInterval(envScrollRight,2000);


    env.onmouseover = function () {
        clearInterval(envTimer);
    };
    env.onmouseout = function () {
        envTimer = setInterval(envScrollRight,2000);
    };
    var EnvBtn = $('EnvBtn');
    EnvBtn.onmouseover = function () {
        clearInterval(envTimer);
    };
    EnvBtn.onmouseout = function () {
        envTimer = setInterval(envScrollRight,2000);
    };

    var EnvContent = $('EnvContent');
    EnvContent.onmouseover = function () {
        clearInterval(envTimer);
    };
    EnvContent.onmouseout = function () {
        envTimer = setInterval(envScrollRight,2000);
    };

};//window.onload()闭括号
