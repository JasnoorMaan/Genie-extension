let currentProduct;
const float = document.createElement("div");
float.className = "float";
let info;

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { vendor, product } = obj;
  if (vendor === "myntra") {
    currentProduct = product;
    setTimeout(() => startMyntra(vendor), 1000);
  } else if (vendor === "amazon") {
    currentProduct = product;
    setTimeout(() => startAmazon(vendor), 1000);
  }
});
const startAmazon = (vendor) => {
  const AmazonButton = document.querySelector("#add-to-wishlist-button-group");
  if (AmazonButton) {
    const existingButton = document.querySelector(".genie-button");
    if (existingButton) {
      existingButton.remove();
    }
    const genieButton = document.createElement("button");
    genieButton.className = "genie-button";
    genieButton.textContent = "Genie it";

    genieButton.addEventListener("click", async (e) => {
      e.preventDefault();
      info = extractAmazonInfo();
      console.log(info);

      genieButton.classList.toggle("active");
      if (genieButton.classList.contains("active")) {
        genieButton.textContent = "Added to Genie";
        await addToWishlist(info, vendor);
      } else {
        genieButton.textContent = "Genie it";
        await deleteFromWishlist(info, vendor);
      }
    });

    float.appendChild(genieButton);
    document.body.appendChild(float);
  }
};
const startMyntra = (vendor) => {
  const myntraButton = document.querySelector(".pdp-add-to-wishlist");
  if (myntraButton) {
    // Remove existing button if it exists
    const existingButton = document.querySelector(".genie-button");
    if (existingButton) {
      existingButton.remove();
    }

    const genieButton = document.createElement("button");
    genieButton.className = "genie-button";
    genieButton.textContent = "Genie it";

    genieButton.addEventListener("click", async (e) => {
      e.preventDefault();
      info = extractMyntraInfo();
      console.log(info);

      genieButton.classList.toggle("active");
      if (genieButton.classList.contains("active")) {
        genieButton.textContent = "Added to Genie";
        await addToWishlist(info, vendor);
      } else {
        genieButton.textContent = "Genie it";
        await deleteFromWishlist(info, vendor);
      }
    });

    float.appendChild(genieButton);
    document.body.appendChild(float);
  }
};

const fetchWishes = (vendor) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get([vendor], (obj) => {
      resolve(obj[vendor] ? JSON.parse(obj[vendor]) : []);
    });
  });
};

const addToWishlist = async (info, vendor) => {
  try {
    const newItem = {
      ...info,
      timestamp: Date.now(),
    };
    const wishes = await fetchWishes(vendor);
    await chrome.storage.sync.set({
      [vendor]: JSON.stringify(
        [...wishes, newItem].sort((a, b) => a.timestamp - b.timestamp)
      ),
    });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

const deleteFromWishlist = async (info, vendor) => {
  try {
    const wishes = await fetchWishes(vendor);
    const updatedWishes = wishes.filter(
      (wish) => wish.prodURL !== info.prodURL
    );
    await chrome.storage.sync.set({
      [vendor]: JSON.stringify(updatedWishes),
    });
  } catch (error) {
    console.error("Error deleting from wishlist:", error);
  }
};

const extractMyntraInfo = () => {
  try {
    const imgElement = document.querySelector(".image-grid-image");
    const bgImage = imgElement.style.backgroundImage;
    const urlMatch = bgImage.match(/url\("(.+?)"\)/);
    let prodImgurl = "";
    if (urlMatch && urlMatch[1]) {
      prodImgurl = urlMatch[1];
    }
    const prodBrand = document.querySelector(".pdp-title").textContent.trim();
    const prodTitle = document.querySelector(".pdp-name").textContent.trim();
    const prodName = `${prodBrand} ${prodTitle}`;
    let priceElement = document.querySelector(".pdp-price strong");
    let prodPrice = priceElement.textContent.replace(/[₹,]/g, "").trim();
    const prodURL = window.location.href;
    return { prodImgurl, prodName, prodPrice, prodURL };
  } catch (error) {
    console.error("Error extracting info:", error);
    return null;
  }
};
const extractAmazonInfo = () => {
  try {
    const imgElementA = document.querySelector(".imgTagWrapper img");
    const prodImgurl = imgElementA.src;
    const prodName = imgElementA.alt;
    const prodPrice = document.querySelector(".a-price-whole").textContent;
    const prodURL = window.location.href;
    return { prodImgurl, prodName, prodPrice, prodURL };
  } catch (error) {
    console.error("Error extracting info:", error);
    return null;
  }
};
