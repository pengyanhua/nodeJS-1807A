// 最简单的get方式ajax
function ajax(url, method, callback) {
    // 1、新建XML对象
    const xml = new XMLHttpRequest();
    // 2、打开链接
    xml.open(url, method);
    // 3、发送数据
    xml.send();
    // 4、监听状态
    xml.onreadystatechange = function () {
        if (xml.status === 200 && xml.readyState === 4) {
            callback && callback(xml.responseText)
        }
    }
}