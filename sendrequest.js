(function () {
    if (document.getElementById('storeID').value === "books") {
        var asin = document.getElementById('ASIN').value || '',
            targetUrl = 'http://www.amazon.co.jp/gp/digital/fiona/detail/request-kindle-edition/ref=dtp_dp_su_' + asin + '?ie=UTF8&a=' + asin,
            xhr = new XMLHttpRequest();
        xhr.open("GET", targetUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var title = document.getElementById("btAsinTitle").innerHTML,
                    tgt = document.getElementsByClassName("fionaPublish");
                tgt[0].innerHTML = "<span style=\"color: #999; font-weight: bold; background-color: #FFF; font-size: medium;\"><b>Kindle It</b>: 『<a href=" + targetUrl + ">" + title + "</a>』の Kindle化リクエストを送信しました。</span>";
            }
        }
        xhr.send();
    }
})();
