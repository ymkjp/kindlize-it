(function (document, xhr) {
    "use strict";
    (function () {
            var category = document.getElementById('storeID') || null,
                asin = document.getElementById('ASIN') || null;
            if (!category || !asin || !isBook(category) || kindleSupported()) {
                return;
            }
            sendRequest(targetUrl(asin));
    }());

    function isBook(category) {
        return (category.value === 'books');
    }

    function kindleSupported() {
        return document.getElementsByName('goKindleStaticPopDiv').length > 0;
    }

    function targetUrl(asin) {
        return '//www.amazon.co.jp/gp/digital/fiona/detail/request-kindle-edition/ref=dtp_dp_su_' + asin.value +
          '?ie=UTF8&a=' + asin.value;
    }

    function sendRequest(targetUrl) {
        xhr.open('GET', targetUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                writeResult(targetUrl);
            }
        };
        xhr.send();
    }

    function writeResult(targetUrl) {
        var tgtEle = document.getElementsByClassName('fionaPublish') || false;
        if (!tgtEle) {
            return false;
        }
        tgtEle[0].innerHTML += '<p style="color: #999; margin: 1rem 0;">' +
          '<b>KindlizeIt sent a request for</b><br><a href="' + targetUrl + '">' + document.title + '</a>.</p>';
    }
}(document, new XMLHttpRequest()));
