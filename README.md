kindlize-it
===========
This is lightweight Chrome Extension which requests automatically for Kindle Edition of books you browse on Amazon.co.jp .

<a href="https://chrome.google.com/webstore/detail/kindlize-it/pclldhodilcmpfipmbibehflengdachd?hl=ja">Chrome ウェブストア - Kindlize It</a>

SPECs
------
* It runs only on browsing http://www.Amazon.co.jp/* .
* If Amazon's DOM shows a "books" category, sends request for Kindle Edition.
* It get a async (by XMLHttpRequest), and connection returns "complete" then it shows in the sense of "Done" (So it's better to fix to check a responseText, not only a readyState).

Licence
-----
Copyright &copy; 2011 Kenta ymkjp YAMAMOTO
Distributed under the [MIT License][mit].
[MIT]: http://www.opensource.org/licenses/mit-license.php
