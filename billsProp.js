function addBillsPropaganda(tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		console.log(tab.status);
		chrome.tabs.sendMessage(tabId, {
			greeting : "addProp"
		}, function (response) {
			console.log(response.farewell);
		});
	}
}

chrome.tabs.onUpdated.addListener(addBillsPropaganda);
