import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <img src="/bg.svg" alt="bg-imgs" className="bg-img" />
        <div className="heading hero-heading">Genie.</div>
        <div className="sub-heading hero-subheading">
          Your all in one wishlist
        </div>
        <button className="button-main hero-button">
          <div>Open your Genie</div>
          <img src="/buttonArrow.svg" alt="arrow" className="button-arrow" />
        </button>
      </div>
    </>
  );
};

export default Hero;
