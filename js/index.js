/**
 * Created by lx on 2016/10/6.
 */
window.onload = function () {
    
    var allTwiLi = document.getElementsByClassName('Twi-li');
    for (var t=0;t<allTwiLi.length;t++){
        allTwiLi[t].onmouseover = function () {
            this.getElementsByTagName('div')[0].className = 'Twi-img-other';
        };
        allTwiLi[t].onmouseout = function () {
            this.getElementsByTagName('div')[0].className = 'Twi-img';
        }
    }  
    
    // var AllTitleListLi = $('TitleList').getElementsByTagName('li');
    // for (var tl=0;tl<AllTitleListLi.length;tl++){
    //     AllTitleListLi[tl].onmouseover = function () {
    //         var next = AllTitleListLi[tl+1];
    //         next.style.borderLeft = '1px solid #e9422c';
    //     }
    // }

    var exc = $('ExcDisplay');
    var excCur = 0;
    var excDl = exc.getElementsByTagName('dl');
    for (var excI=0;excI<3;excI++){
        exc.appendChild(excDl[excI].cloneNode(true));
    }
    var excLen = excDl.length;
    
    $('btnRight').onclick = function () {
        console.log(exc)
        excCur++;
        if(excCur == excLen-2){
            excCur = 1;
            exc.style.left = 0;
        }
        animate(exc,{left:-407 * excCur});
    };

    // setInterval(function () {
    //     excCur++;
    //     if(excCur == excLen-2){
    //         excCur = 1;
    //         exc.style.left = 0;
    //     }
    //     animate(exc,{left:-407 * excCur});
    // },1000);







};//window.onload()闭括号
