//参数两个 message,callback

$('#InitCartUrl').click(function () {
    var name = $('#name h1').html();
    var price = $('#jd-price').html();
    var number = $('#buy-num').val();

    chrome.runtime.sendMessage({
        add: {
            name: name,
            price: price,
            number: number,
        }
    }, function (txt) {
    });
})
