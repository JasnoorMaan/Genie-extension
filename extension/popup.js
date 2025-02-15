import { getActiveTabURL } from "./utils.js";

const deleteFromStorage = async (vendor, prodURL) => {
  try {
    const result = await chrome.storage.sync.get([vendor]);
    const wishes = result[vendor] ? JSON.parse(result[vendor]) : [];
    const updatedWishes = wishes.filter((wish) => wish.prodURL !== prodURL);
    await chrome.storage.sync.set({
      [vendor]: JSON.stringify(updatedWishes),
    });
    return true;
  } catch (error) {
    console.error("Error deleting item:", error);
    return false;
  }
};

const createWishElement = (wish, vendor) => {
  const wishElement = document.createElement("div");
  wishElement.className = "wish-item";

  const wishImage = document.createElement("img");
  const wishTitle = document.createElement("div");
  const wishPrice = document.createElement("div");
  const buttonsContainer = document.createElement("div");
  const visitButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  wishImage.src = wish.prodImgurl;
  wishImage.className = "wish-image";
  wishTitle.textContent = wish.prodName;
  wishTitle.className = "wish-title";
  wishPrice.textContent = `₹${wish.prodPrice}`;
  wishPrice.className = "wish-price";

  buttonsContainer.className = "buttons-container";

  visitButton.textContent = "Visit site";
  visitButton.className = "visit-button";
  visitButton.addEventListener("click", () => {
    chrome.tabs.create({ url: wish.prodURL });
  });

  deleteButton.textContent = "Remove";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", async () => {
    const deleted = await deleteFromStorage(vendor, wish.prodURL);
    if (deleted) {
      wishElement.style.animation = "fadeOut 0.3s";
      setTimeout(() => {
        wishElement.remove();
        // Check if wishlist is empty after deletion
        const wishlist = document.querySelector(".wishlist");
        if (!wishlist.children.length) {
          wishlist.innerHTML = "<div>Your added items will appear here</div>";
        }
      }, 300);
    }
  });

  buttonsContainer.appendChild(visitButton);
  buttonsContainer.appendChild(deleteButton);

  wishElement.appendChild(wishImage);
  wishElement.appendChild(wishTitle);
  wishElement.appendChild(wishPrice);
  wishElement.appendChild(buttonsContainer);

  return wishElement;
};

const view = (currentWishlist = [], vendor) => {
  const title = document.querySelector(".title");
  title.textContent = `Your wishlist for ${vendor}`;
  const wishlistElement = document.querySelector(".wishlist");
  if (!wishlistElement) return;

  wishlistElement.innerHTML = "";

  if (currentWishlist.length > 0) {
    currentWishlist.forEach((wish) => {
      const wishElement = createWishElement(wish, vendor);
      wishlistElement.appendChild(wishElement);
    });
  } else {
    wishlistElement.innerHTML = `<div>Your added items will appear here</div>`;
  }
};
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const gotoButton = document.querySelector(".goto");
    if (gotoButton) {
      gotoButton.addEventListener("click", async () => {
        try {
          const data = await chrome.storage.sync.get(["myntra", "amazon"]);
          const encodedData = btoa(JSON.stringify(data));
          console.log(encodedData);
          chrome.tabs.create({
            url: `https://genie-extension.vercel.app/yourwishlist/?data=${encodedData}`,
          });
        } catch (error) {
          console.error("Error in goto button:", error);
        }
      });
    } else {
      console.error("Go to Genie button not found");
    }

    const activeTab = await getActiveTabURL();
    const vendors = ["myntra.com", "amazon.in"];
    const myDomains = ["genie-extension.vercel.app", "localhost:5173"];

    if (!activeTab.url) {
      throw new Error("No active tab URL found");
    }

    const urlParts = new URL(activeTab.url);
    const vendor = urlParts.hostname.split(".")[1];

    if (vendors.some((v) => activeTab.url.includes(v))) {
      chrome.storage.sync.get([vendor], (data) => {
        const currentWishlist = data[vendor] ? JSON.parse(data[vendor]) : [];
        view(currentWishlist, vendor);
      });
    } else if (myDomains.some((d) => activeTab.url.includes(d))) {
      const importText = document.querySelector(".goto");
      importText.textContent = "Import your wishlists";
    } else {
      const container = document.querySelector(".container");
      if (container) {
        container.innerHTML = `<div class="title">This is not a supported product page</div>`;
      }
    }
  } catch (error) {
    console.error("Error in popup initialization:", error);
    const container = document.querySelector(".container");
    if (container) {
      container.innerHTML = `<div>Error loading wishlist</div>`;
    }
  }
});
