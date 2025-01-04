chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const vendors = ["myntra.com", "amazon.in"];

  if (tab.url && vendors.some((vendor) => tab.url.includes(vendor))) {
    const vendorParameters = tab.url.split("www.")[1];
    const vendor = vendorParameters.split(".")[0];
    const product = vendorParameters.split("/")[1];

    chrome.tabs.sendMessage(tabId, {
      vendor: vendor,
      product: product,
    });
  }
});
