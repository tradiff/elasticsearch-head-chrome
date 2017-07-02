chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('elasticsearch-head/index.html')}, function (tab) {
  });
});
