/**
 * Created by Administrator on 2016/6/3.
 */

(function () {

    $.ajax({
        type: "get",
//            url: jimiHost + '/getSimpleSearchApi.php' ,
        url: jimiHost + '/breadCrumbStr.json',//既有面包屑也有触发魔镜的dom信息
        success: function (data) {
            console.log(JSON.stringify(data));

            eval(data.breadCrumbStr);
            var triggerDomStr = data.triggerDomStr;
            //eval面包屑字符串如果存在
            if (ifExist) {
                appMirror(triggerDomStr);
                appCart();
            }
        },

        error: function (err) {
            console.log('ERROR!');
            console.log(err);
        }
    });


    function appMirror(triggerDomStr) {

        //appendDom.........................................................................
        $('body').append('<div id="jimiLight"></div>');
        $('body').append('<div id="jimiMirror"></div>');

        //JQ对象
        var $triggerDom = $(triggerDomStr).eq(0);
        var triggerObj = {
            top: $triggerDom.offset().top,
            left: $triggerDom.offset().left,
            height: $triggerDom.height(),
            width: $triggerDom.width(),
        };

        $jimiLight = $('#jimiLight');
        $jimiLight.css({
            'background': 'url("' + jimiHost + '/img/logo.png")',
            'background-size': 'cover',
        });

        //实例化魔镜.................................
        var jimiMirror = new JimiMirror('#jimiMirror', {top: triggerObj.top - 30});

        //$triggerDom TADA的定时器
        var tadaTimer = null;


        //点亮标签相关 全局变量...................................................................................
        var ifDragging = false;
        var mouseDown = {x: 0, y: 0};
        var lightState = {
            touchStart: {},
            touchMove: {
                transition: 'all 0s ease',
                //'pointer-events': 'none'
            },
            touchEnd: {
                transition: 'all 0.7s ease-in-out',
                transform: 'translate3d(0px,0px,0px)',
                //'pointer-events': 'auto',
            }
        }


        //mouseUpDownEvent...................................................
        $jimiLight.mousedown(function (e) {

            mouseDown.x = e.clientX;
            mouseDown.y = e.clientY;
            ifDragging = true;
            $jimiLight.css(lightState.touchStart);
            tadaTimer = setInterval(function () {
                $triggerDom.velocity('callout.tada', 3000, true);
            }, 3200)

        })

        $(window).mousemove(function (e) {
            if (ifDragging) {
                e.preventDefault();

                //重置左下角的标记.............................
                lightState.touchMove.transform = 'translate3d(' + (e.clientX - mouseDown.x) + 'px,' + (e.clientY - mouseDown.y) + 'px,0px)';
                $jimiLight.css(lightState.touchMove);

                var pageX = e.pageX;
                var pageY = e.pageY;

                if (ifTrigged(pageX, pageY)) {
                    //$triggerDom.css({border: '10px solid blue'});
                } else {
                    //$triggerDom.css({border: 'none'});
                }
            }
        })

        $(window).mouseup(function (e) {
            if (ifDragging) {
                ifDragging = false;
            }
            $jimiLight.css(lightState.touchEnd);
            clearInterval(tadaTimer);
            delete(tadaTimer);
            //$triggerDom.css({border: 'none'});

            var pageX = e.pageX;
            var pageY = e.pageY;
            if (ifTrigged(pageX, pageY)) {

                $.ajax({
                    type: "post",
//            url: jimiHost + '/getSimpleSearchApi.php' ,
                    url: jimiHost + '/fomulaSafe.json',
                    data: {
                        keywords: '雅诗兰黛',
                    },
                    success: function (data) {
                        console.log(JSON.stringify(data));
                        jimiMirror.show(data);
                    },
                    error: function (err) {
                        console.log('ERROR!');
                        console.log(err);
                    }
                })
            }

        })


        function ifTrigged(pageX, pageY) {
            if (pageX > triggerObj.left && pageX < (triggerObj.left + triggerObj.width) && pageY > triggerObj.top && pageY < (triggerObj.top + triggerObj.height)) {
                return true;
            } else {
                return false;
            }
        }

    }


})()
