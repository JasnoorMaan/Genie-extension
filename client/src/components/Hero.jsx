import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
const Hero = () => {
  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="hero-container">
        <img src="/bg.svg" alt="bg-imgs" className="bg-img" />
        <div className="heading hero-heading">Genie.</div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="sub-heading hero-subheading"
        >
          Your all in one wishlist
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="hero-button-container"
        >
          <Link to="/" className="button-sec hero-button">
            <div>Install from Webstore</div>
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
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
