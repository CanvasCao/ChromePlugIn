chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message == 'hello') {
        callback('hello from background');
    }
})