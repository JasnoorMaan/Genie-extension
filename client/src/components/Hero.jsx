import "./Hero.css";
import { Link } from "react-router";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <img src="/bg.svg" alt="bg-imgs" className="bg-img" />
        <div className="heading hero-heading">Genie.</div>
        <div className="sub-heading hero-subheading">
          Your all in one wishlist
        </div>
        <div className="hero-button-container">
          <Link to="/" className="button-sec hero-button">
            <div>Install from Chrome Webstore</div>
            <img
              src="/buttonArrowWhite.svg"
              alt="arrow"
              className="button-arrow"
            />
          </Link>
          <Link to="/yourwishlist" className="button-main hero-button">
            <div>Open your Genie</div>
            <img src="/buttonArrow.svg" alt="arrow" className="button-arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
