(function (document, xhrInit) {
  'use strict';
  var xhr,
    asin,
    kindleRequest,
    kindleSupported;

  (function () {
    asin = document.getElementById('ASIN');
    kindleRequest = document.getElementsByClassName('fionaPublish');
    kindleSupported = document.getElementsByName('goKindleStaticPopDiv');
    if (isTarget()) {
      xhr = xhrInit();
      sendRequest(targetUrl());
    }
  }());

  function isTarget() {
    return asin &&
      (kindleRequest.length > 0) &&
      !(kindleSupported.length > 0);
  }

  function targetUrl() {
    return '//www.amazon.co.jp/gp/digital/fiona/detail/request-kindle-edition/ref=dtp_dp_su_' + asin.value +
      '?ie=UTF8&a=' + asin.value;
  }

  function sendRequest(targetUrl) {
    xhr.open('GET', targetUrl, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status < 400) {
        writeResult(targetUrl);
      }
    };
    xhr.send();
  }

  function writeResult(targetUrl) {
    kindleRequest[0].innerHTML += '<p style="color: #999; margin: 1rem 0;">' +
      '<b>KindlizeIt sent a request for</b><br><a href="' + targetUrl + '">' + document.title + '</a>.</p>';
  }

} (document,
  function () {
    return new XMLHttpRequest()
  }
));
