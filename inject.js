document.addEventListener("retrievePageVariable", () => {
  document.dispatchEvent(
    new CustomEvent("variableRetrieved", {
      detail: webPageVariable,
    })
  );
});
