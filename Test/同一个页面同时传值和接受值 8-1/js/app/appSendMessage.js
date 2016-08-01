//参数两个 message,callback

$.ajax({
    type: "post",
//            url: jimiHost + '/getSimpleSearchApi.php' ,
    url: jimiHost + '/clickDomStr.json',
    data: {
        keywords: '雅诗兰黛',
    },
    success: function (data) {
        console.log(JSON.stringify(data));


        $(data.clickDom).click(function () {
            var name = $(data.name).html();
            var price = $(data.price).html();
            var number = $(data.number).val();

            chrome.runtime.sendMessage({
                add: {
                    name: name,
                    price: price,
                    number: number,
                }
            }, function (txt) {
            });
        });

    },

    error: function (err) {
        console.log('ERROR!');
        console.log(err);
    }
});
