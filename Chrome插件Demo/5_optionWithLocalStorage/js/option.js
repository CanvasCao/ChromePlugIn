var city = localStorage.city || 'beijing';
$('#city').val(city);

$('#save').click(function () {
    localStorage.city=$('#city').val();
    alert('保存成功 ' + $('#city').val());
});