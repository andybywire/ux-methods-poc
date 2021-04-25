// This bookmarklet gathers metadata from an online resource and pipes it to the UX Methods Submit a Resource form in a new window

javascript:(function(){
  var title = document.querySelectorAll('meta[property="og:title"]')[0] ? document.querySelectorAll('meta[property="og:title"]')[0].content : encodeURIComponent(document.title);
  var resourceurl = encodeURIComponent(location.href);
  var publisher = document.querySelectorAll('meta[property="og:site_name"]')[0] ? document.querySelectorAll('meta[property="og:site_name"]')[0].content : "";
  var author = ""; // will probably need to get into LD for these
  var pubyear = "";
  var pubmonth = "";
  var pubday = "";
	// to open in the same tab:
	// location.href='https://www.uxmethods.org/submit-resource/index.html?title=' + title + '&resourceurl=' + resourceurl + '&author=' + author + '&publisher=' + publisher + '&pubyear=' + pubyear + '&pubmonth=' + pubmonth + '&pubday=' + pubday
	window.open('https://www.uxmethods.org/submit-resource/index.html?title=' + title + '&resourceurl=' + resourceurl + '&author=' + author + '&publisher=' + publisher + '&pubyear=' + pubyear + '&pubmonth=' + pubmonth + '&pubday=' + pubday);
})();

// Wrapper for distribution — this is what I'll share publicly:
// javascript: (function () {
// 	var jsCode = document.createElement('script');
// 	jsCode.setAttribute('src', 'https://www.uxmethods.org/js/submit-method-bookmarklet.js');
//   document.body.appendChild(jsCode);
//  }());
