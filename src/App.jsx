// src/App.jsx
// App structure: background, navigation, and routed pages.

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackgroundWrapper from "./components/background/BackgroundWrapper";
import { Toaster } from "react-hot-toast";


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import WhereToBuy from "./pages/WhereToBuy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket";

export default function App() {
  return (
    <>
      <BackgroundWrapper />
      <Navigation />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div className="pt-20 font-serif text-[var(--scene-text)] bg-transparent transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
