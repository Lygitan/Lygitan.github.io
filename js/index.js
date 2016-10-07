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
    
    $('btnLeft').onclick = function () {
        excCur++;
        if(excCur == excLen-2){
            excCur = 1;
            exc.style.left = 0;
        }
        animate(exc,{left:-407 * excCur});
    };
    $('btnRight').onclick = function () {
        var sum;
        excCur--;
        if(excCur == -1){
            excCur = excLen - 4;
            sum =-(excLen-3)*407+'px';
            exc.style.left = sum;
        }
        animate(exc,{left:- 407 * excCur});
    };

    
    
    var hot = $('HotImg');
    var hotCur = 0;
    var hotImg = hot.getElementsByTagName('img');
        hot.appendChild(hotImg[0].cloneNode(true));
    var hotLen = hotImg.length;

    // var hotDesc = $('HotDescribe');
    // var  hotAllDesc= hotDesc.getElementsByTagName('div');
    // for (var hotI = 0; hotI < 5; hotI++){
    //     hotDesc.appendChild(hotAllDesc[0].cloneNode(true));
    // }

    $('HotLeft').onclick = function () {
        hotCur++;
        if(hotCur == hotLen){
            hotCur = 1;
            hot.style.left = 0;
            // hotDesc.style.bottom = 0;
        }
        animate(hot,{left:-880 * hotCur});
        // animate(hotDesc,{bottom:-119 * hotCur});
    };
    $('HotRight').onclick = function () {
        var sum;
        hotCur--;
        if(hotCur == -1){
            hotCur = hotLen - 2;
            sum =-(hotLen-1)*880+'px';
            hot.style.left = sum;
            // txtSum =-(hotLen-1)*119+'px';
            // hot.style.bottom = txtSum;
        }
        animate(hot,{left:- 880 * hotCur});
        // animate(hotDesc,{bottom:-119 * hotCur});
    };






};//window.onload()闭括号
