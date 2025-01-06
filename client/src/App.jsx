import "./App.css";
import Hero from "./components/Hero";
import Uses from "./components/Uses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./components/Loading";

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
