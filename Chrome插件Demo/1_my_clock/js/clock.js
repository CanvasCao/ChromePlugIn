/**
 * Created by Administrator on 2016/6/3.
 */
(function () {

    function clock(ele) {
        ele.innerHTML=new Date().getTime();

        setTimeout(function(){
            clock(ele)
        },1000)
    }

    var ele = document.getElementById('clock');
    clock(ele);
})()
