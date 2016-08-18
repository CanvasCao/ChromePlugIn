/*!
 * jimiMirror, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-6-28 18:56:28
 */
(function (w, d, $, undefined) {
    //'use strict';

    function JimiMirror(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data;
        this.config = {};
        this.init();
    }

    JimiMirror.prototype = {
        init: function () {
            this.initConfig();
            this.createDom();
            this.initCSS();
            this.bindEvent();
        },
        initConfig: function () {

        },
        createDom: function () {
            var that = this;


            $(this.C).html("<div class='top'></div><div class='middle'></div><div class='bottom'></div>");
            $(this.C).append("<div class='close'>×</div>");

            $(this.C).find('.top').html('<div class="honeyCombCon"></div>');
            $(this.C).find('.middle').html('<div class="middleComponent"></div>');
            $(this.C).find('.bottom').html('<div class="qrCode"><img width="40"/></div>' +
                "<div class='qrTxt'>想要了解更多产品信息，及各种化妆品相关资讯，请关注肌秘公众号</div>" +
                '<img class="qrCodeBig" width="150"/>');

            $(this.C).find('.bottom img').attr({src: jimiHost + '/img/qr.png'})

        },
        initCSS: function () {
            var that = this;

            //定位在css里 这里只修正高度
            $(this.C).css({top: that.data.top});

            $(this.C).find('.close').css({
                position: 'absolute',
                width: '20px',
                height: '20px',
                top: '-15px',
                right: '-15px',
                color: '#3881e0',
                background: 'white',
                border: '3px solid #3881e0',
                'border-radius': '50%',
                'line-height': '20px',
                'text-align': 'center',
                'font-weight': 'bold',
                cursor: 'pointer',

            })

            $(this.C).find('.top').css({
                height: 200,
                'background': '#3881e0',
                'background-image': '-webkit-linear-gradient(to bottom, #3881e0, #89bbff)',
                'background-image': 'linear-gradient(to bottom, #3881e0, #89bbff)',
                'border-top-left-radius': '20px',
                'border-top-right-radius': '20px',
                overflow: 'hidden',
                position: 'relative',
                'box-shadow': '0px 3px 10px rgba(0, 0, 0, 0.4)',
            })

            $(this.C).find('.honeyCombCon').css({
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
            })

            $(this.C).find('.middle').css({
                height: 250,
                width: 360,
                overflow: 'hidden',
                //background-color: white;
            }).find('.middleComponent').css({
                'overflow-y': 'auto',
                width: 380,
                height: 250,
                'box-sizing': 'border-box',
                padding: '20px 20px',
            })

            $(this.C).find('.bottom').css({
                'background-color': 'white',
                'box-shadow': '0px -3px 10px rgba(0, 0, 0, 0.4)',
                'box-sizing': 'border-box',
                padding: '10px 15px',
                'border-bottom-left-radius': '20px',
                'border-bottom-right-radius': '20px',
                position: 'relative',
            })


            $(this.C).find('.qrCode').css({
                width: 40,
            })

            $(this.C).find('.qrTxt').css({
                position: 'absolute',
                width: '75%',
                right: 10,
                top: 10,
            })

            $(this.C).find('.qrCodeBig').css({
                position: 'absolute',
                'box-shadow': '3px 3px 15px rgba(0, 0, 0, 0.4)',
                left: 70,
                bottom: 10,
                display: 'none',
            })
        },
        bindEvent: function () {
            var that = this;

            $(this.C).find('.close').click(function () {
                $(that.C).fadeOut();
            });


            $(this.C).find('.qrCode').hover(function () {
                $(that.C).find('.qrCodeBig').fadeIn();
            }, function () {
                $(that.C).find('.qrCodeBig').fadeOut();
            })

        },

        show: function (data) {
            var that = this;

            if (data) {
                var honeycomb = new Honeycomb($(that.C).find('.honeyCombCon')[0], data);
                var middleComponent = new MiddleComponent($(that.C).find('.middleComponent')[0], data);
            } else {

            }
            $(that.C).fadeIn();
        },
        hide: function () {
            var that = this;
            $(that.C).fadeOut();

        },
    }

    w.JimiMirror = JimiMirror;
})(window, document, $)

