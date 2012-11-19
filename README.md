kindlize-it
===========

This is the Chrome Extension which requests automatically for Kindle Edition of books you browse on Amazon.co.jp .

SPECs
------
* It run only on browsing http://www.Amazon.co.jp/* .
* If DOM shows a category 'storeID' equals to "books", sends request for Kindle Edition.
* Get a async (by XMLHttpRequest), and connection returns "complete" then shows in the sense of "It' done." (So it's better to fix to check a responseText, not only a readyState).

Licence
-----
Copyright &copy; 2011 ymkjp
Distributed under the [MIT License][mit].
[MIT]: http://www.opensource.org/licenses/mit-license.php
