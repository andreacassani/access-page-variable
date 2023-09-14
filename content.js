chrome.runtime.onMessage.addListener((request) => {
  if (request.code === "INJECT_SCRIPT") {
    retrievePageVariable();
  }
});

function retrievePageVariable() {
  document.dispatchEvent(new CustomEvent("retrievePageVariable", {}));
}

function _injectScript() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("inject.js");
  (document.head || document.documentElement).appendChild(script);

  document.addEventListener("variableRetrieved", (e) => {
    console.log("variableRetrieved", e.detail);
  });
}

_injectScript();
