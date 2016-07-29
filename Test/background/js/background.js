//静默注册............................
var uid = localStorage.getItem('uid');
if (!uid) {
    function generateMixed(n) {
        var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var res = "";
        for (var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random() * (chars.length - 1));
            res += chars[id];
        }
        return res;
    }

    localStorage.setItem('uid', generateMixed(16));
}


chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message.add) {
        //callback('hello from background');
        localStorage.setItem(new Date().toLocaleString(), JSON.stringify(message));
    }
})