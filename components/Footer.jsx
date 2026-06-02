// /Users/entheos/Documents/Backyard Bounty/components/Footer.jsx
import { siteLinks } from "../data/siteLinks";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-[var(--scene-text)]">
      <p>&copy; {new Date().getFullYear()} Backyard Bounty. All rights reserved.</p>
      <a
        href={siteLinks.backyardBountyFacebook}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex font-extrabold text-red-900 underline decoration-red-900/30 underline-offset-4 transition hover:text-red-700 theme-night:text-red-200 theme-night:hover:text-red-100"
      >
        Follow Backyard Bounty on Facebook
      </a>
    </footer>
  );
}
