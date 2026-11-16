import { useNavigate, useOutletContext } from "react-router-dom";
import { heroImage } from "../data/memories";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  const { rainHearts, music } = useOutletContext();
  const navigate = useNavigate();
  return (
    <>
      <Hero
        image={heroImage}
        musicPlaying={music.playing}
        musicReady={music.ready}
        onExplore={() => { rainHearts(); navigate("/memories"); }}
        onToggleMusic={() => { music.toggle(); rainHearts(); }}
      />
      <Intro />
    </>
  );
}
