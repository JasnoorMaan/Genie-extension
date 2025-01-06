import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Display.css";
const Display = () => {
  const [products, setProducts] = useState({
    amazon: [],
    myntra: [],
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get("data");
    if (encodedData) {
      try {
        const decodedData = JSON.parse(atob(encodedData));
        setProducts({
          myntra: decodedData.myntra ? JSON.parse(decodedData.myntra) : [],
          amazon: decodedData.amazon ? JSON.parse(decodedData.amazon) : [],
        });
      } catch (error) {
        console.error("Error in Display:", error);
      }
    }
  }, []);
  return (
    <>
      <div className="products-page">
        <h1 className="heading">Your Saved Products</h1>

        {["myntra", "amazon"].map((vendor) => (
          <div key={vendor} className="vendor-section">
            <div className="vendor-header">
              <h2 className="sub-heading">
                {vendor.charAt(0).toUpperCase() + vendor.slice(1)} Products
              </h2>
              {/* <div className="vendor-line"></div> */}
            </div>

            <div className="products-grid">
              {products[vendor]?.length > 0 ? (
                products[vendor].map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-image-container">
                      <img
                        src={product.prodImgurl}
                        alt={product.prodName}
                        className="product-image"
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="bodyText">{product.prodName}</h3>
                      <p className="product-price bodyText">
                        ₹{product.prodPrice}
                      </p>
                      <div className="product-footer">
                        <div className="product-date bodyText">
                          {new Date(product.timestamp).toLocaleDateString()}
                        </div>
                        <Link to={product.prodURL} className="button-sec">
                          <div>Visit Site</div>
                          <img
                            src="/buttonArrowWhite.svg"
                            alt="arrow"
                            className="button-arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-products bodyText">
                  No products saved from {vendor}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
