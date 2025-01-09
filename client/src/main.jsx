import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WishPage from "./WishPage.jsx";
import Privacy from "./components/Privacy.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/yourwishlist" element={<WishPage />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </BrowserRouter>
);
