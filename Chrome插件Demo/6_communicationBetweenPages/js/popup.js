//参数两个 message,callback
chrome.runtime.sendMessage('hello', function (txt) {
    setTimeout(function () {
        $('#div').html(txt);
    }, 1000)
});