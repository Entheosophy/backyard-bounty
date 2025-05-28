// components/Layout.jsx
import Navigation from "./Navigation";
import Footer from "./Footer";
import BackgroundWrapper from "./background/BackgroundWrapper";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <>
      <BackgroundWrapper />
      <Navigation />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <main className="pt-20 font-serif text-[var(--scene-text)] bg-transparent transition-colors duration-500">
        {children}
        <Footer />
      </main>
    </>
  );
}
