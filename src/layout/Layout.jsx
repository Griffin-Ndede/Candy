import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SONG_ID } from "../data/memories";
import { useHeartConfetti } from "../hooks/useHeartConfetti";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useYouTubeMusic } from "../hooks/useYouTubeMusic";
import HeartConfetti from "../components/HeartConfetti";
import Navbar from "../components/Navbar";
import Finale from "../components/Finale";

// Lives above all routes so the music + confetti keep running while navigating.
export default function Layout() {
  const { pathname } = useLocation();
  const { hearts, trigger: rainHearts } = useHeartConfetti();
  const music = useYouTubeMusic(SONG_ID);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { rainHearts(); }, [rainHearts]);

  // On every route change: close menu, scroll to top
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Re-run reveal animations for the new page's elements
  useScrollReveal("[data-reveal]", pathname);

  return (
    <main className="relative overflow-hidden bg-cream font-sans text-body">
      <HeartConfetti pieces={hearts} />
      <div className="pointer-events-none fixed top-0 left-0 -z-10 size-px overflow-hidden opacity-0" aria-hidden="true">
        <div ref={music.containerRef} />
      </div>

      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
        musicPlaying={music.playing}
        musicReady={music.ready}
        onToggleMusic={() => { music.toggle(); rainHearts(); }}
      />

      <Outlet context={{ rainHearts, music }} />

      <Finale onRainHearts={rainHearts} />
    </main>
  );
}
