$.ajax({
    type: "get",
    url: 'http://n1.jimi.la/apps_T1/test2.php',  //孙老板的这个接口随机返回0/1
    //dataType: "jsonp",
    //jsonp: "callback",
    //jsonpCallback: "jsonpcallback",
    success: function (data) {
        console.log(JSON.stringify(data));

        var city=localStorage.city||'beijing'
        $('#div').html(city+"      "+JSON.stringify(data));
    },
    error: function (err) {
        console.log('ERROR!');
        console.log(err);
    }
});