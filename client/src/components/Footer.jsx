import "../App.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="heading footer-logo">Genie.</div>
            <div className="bodyText footer-text">
              Create your wishlists now!
            </div>
          </div>

          <div className="footer-column footer-links">
            <h3 className="sub-heading">Support</h3>
            <a href="#faq">FAQ</a>
            <a href="#help">Help Center</a>
            <a href="#feedback">Feedback</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bodyText">
            ©{new Date().getFullYear()} Genie. All rights reserved.
          </div>
          <div className="social-icons">
            <div href="#" className="social-icon">
              🌐
            </div>
            <div href="#" className="social-icon">
              🐦
            </div>
            <div href="#" className="social-icon">
              📸
            </div>
            <div href="#" className="social-icon">
              🔗
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
