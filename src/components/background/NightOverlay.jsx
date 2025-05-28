// src/components/background/NightOverlay.jsx

export default function NightOverlay() {
    return (
        <div className="absolute inset-0 z-[-2] bg-black theme-day:opacity-0 theme-night:opacity-100 transition-opacity duration-700" />
        );
  }
  