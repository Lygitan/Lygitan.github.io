/**
 * Created by lx on 2016/10/6.
 */
function $(id) {
    return document.getElementById(id);
}

function getStyle(obj,attr) {
    var result;
    if(obj.currentStyle){
        result =  obj.currentStyle[attr];
    }else{
        result =  getComputedStyle(obj,null)[attr];
    }
    return result;
}

function animate(obj,json,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json){
            var cur;
            if(attr == 'opacity'){
                cur = getStyle(obj,attr) * 100;
            }else {
                cur = parseInt(getStyle(obj,attr));
            }
            var target = json[attr];
            var speed = (target - cur) / 6;
            speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
            if(target != cur){
                if( attr == 'opacity') {
                    obj.style.opacity = (cur + speed)/100;
                    obj.style.filter = 'alpha(opacity='+(cur + speed)+')';
                }else {
                    obj.style[attr] = cur + speed + 'px';
                }
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            !!callback && callback();
        }
    },30);
}