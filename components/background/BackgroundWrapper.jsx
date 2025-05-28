// components/background/BackgroundWrapper.jsx
import NightOverlay from "./NightOverlay";
import SunAura from "./SunAura";
import CrescentMoon from "./CrescentMoon";
import LandscapeBackdrop from "./LandscapeBackdrop";
import DayNightInsects from "./DayNightInsects";
import RootCanvas from "./RootCanvas";

export default function BackgroundWrapper() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* SKY + STARS */}
      <NightOverlay />

      {/* CELESTIAL */}
      <SunAura />
      <CrescentMoon />

      {/* LANDSCAPE */}
      <LandscapeBackdrop />

      {/* ATMOSPHERIC ELEMENTS */}
      <DayNightInsects />
      <RootCanvas />
    </div>
  );
}