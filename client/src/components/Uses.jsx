import "./Uses.css";

const Uses = () => {
  return (
    <div className="uses-container">
      <div className="uses-left">
        <div className="small-heading">Here's a Demo</div>
        <div className="bodyText">
          Currently works with Amazon.in and Myntra.com.
        </div>
      </div>
      <div className="uses-right">
        <video src="/demo.mp4" autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

export default Uses;
