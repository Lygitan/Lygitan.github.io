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


    // -------------------------------------------轮播1--------------------------------------
    var exc = $('ExcDisplay');
    var excCur = 0;
    var excDl = exc.getElementsByTagName('dl');
    for (var excI = 0; excI < 3; excI++){
        exc.appendChild(excDl[excI].cloneNode(true));
    }
    var excLen = excDl.length;


    var allExcDt = exc.getElementsByClassName('dt');
    for (var e = 0; e < allExcDt.length; e++){
        allExcDt[e].onmouseover = function () {
            this.getElementsByTagName('dt')[0].style.background = 'rgba(0,0,0,.7)';
            
        };
        // url("../images/icon-link.png") no-repeat center center;
        allExcDt[e].onmouseout = function () {
            this.getElementsByTagName('dt')[0].style.background = '';
        }
    }













    $('btnLeft').onclick = function () {
        var sum;
        excCur--;
        if(excCur == -1){
            excCur = excLen - 4;
            sum =-(excLen-3)*407+'px';
            exc.style.left = sum;
        }
        animate(exc,{left:- 407 * excCur});
    };
    $('btnRight').onclick = function () {
        excCur++;
        if(excCur == excLen-2){
            excCur = 1;
            exc.style.left = 0;
        }
        animate(exc,{left:-407 * excCur});
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
    $('HotLeft').onclick = function () {
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
    };

    $('HotRight').onclick = function () {
        hotCur++;
        if(hotCur == hotLen){
            hotCur = 1;
            hot.style.left = 0;
            hotDesc.style.top = 0;
        }
        animate(hot,{left:-880 * hotCur});
        animate(hotDesc,{top:-119 * hotCur});
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
    $('envLeft').onclick = function () {
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
    };

    $('envRight').onclick = function () {
        envCur++;
        if(envCur == envLen){
            envCur = 1;
            env.style.left = 0;
            envDesc.style.top = 0;
        }
        animate(env,{left:-880 * envCur});
        animate(envDesc,{top:-191 * envCur});
    };


};//window.onload()闭括号
