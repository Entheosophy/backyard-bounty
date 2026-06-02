// /Users/entheos/Documents/Backyard Bounty/components/Layout.jsx
import Navigation from "./Navigation";
import Footer from "./Footer";
import BackgroundWrapper from "./background/BackgroundWrapper";
import PageViewTracker from "./PageViewTracker";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <>
      <BackgroundWrapper />
      <PageViewTracker />
      <Navigation />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <main className="pt-20 font-serif text-[var(--scene-text)] bg-transparent transition-colors duration-500">
        {children}
        <Footer />
      </main>
    </>
  );
}
