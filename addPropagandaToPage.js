chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
	document.body.innerHTML = document.body.innerHTML.replace(/Tom Brady/g, 'The Deflator');
});
