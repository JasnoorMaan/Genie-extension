import "../App.css";
import { Link } from "react-router";
import {supabase} from "../supabaseClient";

const Navbar = ({session}) => {

  const handleLogin= async ()=>{
    const {error} = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if(error){
      console.error("Error signing in: ",error.message);
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          Genie.
        </Link>
        <div>
          {!session ? (<button className="nav-button" onClick={handleLogin}>
          <h2 className="bodyText">Log In/Sign Up</h2>
          </button>): (
            <button className="nav-button" onClick={()=>supabase.auth.signOut()}>
              <h2 className="bodyText">{session.user.email}</h2>
            </button>
          ) 
          }
        </div>
      </div>
    </>
  );
};
export default Navbar;
