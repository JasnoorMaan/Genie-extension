import "../App.css";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          Genie.
        </Link>
      </div>
    </>
  );
};
export default Navbar;
