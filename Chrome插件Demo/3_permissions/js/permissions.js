$.ajax({
    type: "get",
    url: 'http://n1.jimi.la/apps_T1/test2.php',
    //dataType: "jsonp",
    //jsonp: "callback",
    //jsonpCallback: "jsonpcallback",
    success: function (data) {
        console.log(JSON.stringify(data));
        console.log(data.a);
    },
    error: function (err) {
        console.log('ERROR!');
        console.log(err);
    }
});