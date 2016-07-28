//setInterval(function () {
$.ajax({
    type: "get",
    url: 'http://n1.jimi.la/apps_T1/test2.php', //孙老板的这个接口随机返回0/1
    success: function (data) {
        console.log(JSON.stringify(data));
        console.log(data);

        //if (data == 0) {
        //    chrome.browserAction.setIcon({path: 'img/red.png'});
        //} else {

        chrome.browserAction.setIcon({path: 'img/green.png'});
        //}
    },
    error: function (err) {
        console.log('ERROR!');
        console.log(err);
    }
});
//}, 5000)
