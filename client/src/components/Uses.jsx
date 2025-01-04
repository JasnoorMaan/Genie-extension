import "./Uses.css";

const Uses = () => {
  return (
    <div className="uses-container">
      <div className="uses-left">
        <div className="heading">How it works</div>
        <div className="bodyText">
          Currently works with Amazon.in and Myntra.com.
          <br /> Add your favourite products by pressing the &ldquo;Genie
          it&rdquo; button at the bottom right of your product page.
          <br /> It appears in your browser extension popup under the vendor
          name.
          <br /> To see all your wishlisted products, click the &ldquo;Go to
          Genie&rdquo; button in the popup.
          <br /> You will get all your products filtered by vendors.
        </div>
      </div>
      <div className="uses-right">
        <video src="/video1.mp4" autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

export default Uses;
