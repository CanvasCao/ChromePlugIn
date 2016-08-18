/**
 * Created by Administrator on 2016/8/1.
 */


function appBuy() {
    $('.submit-btn').click(function () {
        var productArray = [];

        $('.item-selected').each(function (i, e) {
            var json = {};
            json.name = $(e).find('.p-name a').html();
            json.price = $(e).find('.p-price strong').html();
            json.number = $(e).find('.quantity-form input').val();

            productArray.push(json);
        })


        chrome.runtime.sendMessage({
            buy: productArray,
        }, function (txt) {
        });
    });
}

