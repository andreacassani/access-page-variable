const allowedUrl = "https://example.com";

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith(allowedUrl)) {
    chrome.tabs.sendMessage(tab.id, { code: "INJECT_SCRIPT" });
  }
});
