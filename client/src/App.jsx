import "./App.css";
import { Suspense, lazy, useEffect , useState} from "react";
import Loading from "./components/Loading";
const Hero = lazy(() => import("./components/Hero"));
const Uses = lazy(() => import("./components/Uses"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
import {supabase} from "./supabaseClient";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data:{session}})=>{
      setSession(session);
    })
    const {data}= supabase.auth.onAuthStateChange((_event,session)=>{
      setSession(session);
    })

    return()=>{
      data.subscription.unsubscribe();
    }
  },[]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar key={session?.user?.id || 'no-session'} session={session}/>
        <Hero />
        <Uses />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
