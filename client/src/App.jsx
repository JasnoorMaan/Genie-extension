import "./App.css";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
const Hero = lazy(() => import("./components/Hero"));
const Uses = lazy(() => import("./components/Uses"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <Uses />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
