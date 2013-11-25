(function () {
    "use strict";
    (function () {
            var category = document.getElementById('storeID') || null,
                asin = document.getElementById('ASIN') || null;
            if (!category || !asin || !isBook(category) || haveAlreadyKindleEdition()) {
                return;
            }
            var targetUrl = getTargetUrl(asin);
            sendRequest(targetUrl);
    }());

    function isBook(category) {
        return (category.value === "books");
    }

    function haveAlreadyKindleEdition() {
        return (document.getElementById("kindle_meta_binding_winner"));
    }

    function getTargetUrl(asin) {
        return 'http://www.amazon.co.jp/gp/digital/fiona/detail/request-kindle-edition/ref=dtp_dp_su_' + asin.value + '?ie=UTF8&a=' + asin.value;
    }

    function sendRequest(targetUrl) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", targetUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                writeResult(targetUrl);
                // TODO: xhr.responseText
            }
        };
        xhr.send();
    }

    function writeResult(targetUrl) {
        var title = document.getElementById("btAsinTitle") || '',
            tgtEle = document.getElementsByClassName("fionaPublish") || false;
        if (!tgtEle) {
            return false;
        }
        tgtEle[0].innerHTML += "<span style=\"color: #999; background-color: #FFF; font-size: medium;\"><p><b>Kindlize It</b>: 『<a href=" + targetUrl + ">" + title.innerHTML + "</a>』の Kindle 化リクエストを送信しました。</p></span>";
    }
}());
