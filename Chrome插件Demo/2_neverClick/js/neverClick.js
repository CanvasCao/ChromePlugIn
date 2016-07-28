/**
 * Created by Administrator on 2016/6/3.
 */
(function (w, d, $, undefined) {

    //$('#su').hover(function () {
    //    $(this).val('方辉么么哒');
    //}, function () {
    //    $(this).val('百度一下');
    //});

    //$('div').css('border','1px solid black')
    function GetRandom(begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    };

    var winW = $(window).width();
    var winH = $(window).height();
    var eleW = $('#su').width();
    var eleH = $('#su').height();
    $('#su').hover(function (e) {
        var e = e || event;
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        var leftOrRight = (mouseX < winW / 2) ? 'left' : 'right';
        var suX;
        suX = (leftOrRight == 'right') ? GetRandom(0,winW/2-eleW):GetRandom(winW/2,winW-eleW);
        var suY =GetRandom(0,winH-eleH);
            $('#su').parent().css({
                position: 'fixed',
                'z-index':1000,
                left: suX,
                top: suY
            })
    })

})(window, document, $)


