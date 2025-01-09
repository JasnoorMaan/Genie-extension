import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-container">
        <h1 className="heading">Privacy Policy</h1>
        <div className="privacy-content bodyText">
          <p className="last-updated">Last updated: January 9, 2025</p>

          <section>
            <h2 className="sub-heading">Overview</h2>
            <p>
              This Privacy Policy describes how our browser extension ("Genie")
              handles information. We are committed to protecting your privacy
              and ensuring transparency about our data practices.
            </p>
          </section>

          <section>
            <h2 className="sub-heading">Data Collection and Storage</h2>
            <p>
              Our Extension does not collect, transmit, or store any personal
              information. All data generated through the use of the Extension
              is stored locally within your browser's storage system and remains
              on your device.
            </p>
          </section>

          <section>
            <h2 className="sub-heading">Types of Data Stored Locally</h2>
            <ul>
              <li>
                All Genie-related data is stored exclusively in your browser's
                local storage
              </li>
              <li>This data never leaves your device</li>
              <li>You maintain complete control over this data</li>
              <li>
                You can clear this data at any time by clearing your browser
                data or uninstalling the Extension
              </li>
            </ul>
          </section>

          <section>
            <h2 className="sub-heading">Third-Party Services</h2>
            <ul>
              <li>We do not use any analytics tools</li>
              <li>We do not incorporate any tracking mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="sub-heading">Data Security</h2>
            <p>Since all data remains locally on your device:</p>
            <ul>
              <li>We do not have access to any of your data</li>
              <li>No data is transmitted over the internet</li>
              <li>
                Data security is managed by your browser's built-in security
                features
              </li>
            </ul>
          </section>

          <section>
            <h2 className="sub-heading">User Rights</h2>
            <p>You have complete control over your data and can:</p>
            <ul>
              <li>Access your locally stored data through your browser</li>
              <li>Delete your data by clearing your browser storage</li>
              <li>Remove all Extension data by uninstalling the Extension</li>
            </ul>
          </section>

          <section>
            <h2 className="sub-heading">Children's Privacy</h2>
            <p>
              Our Extension does not collect any personal information from users
              of any age, including children under 13.
            </p>
          </section>

          <section>
            <h2 className="sub-heading">Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy to reflect
              changes in our practices. We will notify users of any material
              changes through the Extension or the Edge Add-ons store page.
            </p>
          </section>

          <section>
            <h2 className="sub-heading">Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at support@genie-extension.com
            </p>
          </section>

          <section>
            <h2 className="sub-heading">Compliance</h2>
            <p>This Extension complies with:</p>
            <ul>
              <li>Microsoft Edge Add-ons store policies</li>
              <li>Applicable data protection laws and regulations</li>
              <li>Browser security standards</li>
            </ul>
          </section>

          <section>
            <h2 className="sub-heading">Consent</h2>
            <p>
              By installing and using our Extension, you agree to the terms
              outlined in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
