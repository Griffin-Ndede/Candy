import { useCallback, useEffect, useRef, useState } from "react";

const API_SRC = "https://www.youtube.com/iframe_api";

export function useYouTubeMusic(videoId) {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let script;

    const init = () => {
      if (cancelled || !window.YT?.Player || !containerRef.current) return;
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        height: "1",
        width: "1",
        videoId,
        playerVars: {
          autoplay: 1, controls: 0, loop: 1, playlist: videoId,
          playsinline: 1, mute: 1, rel: 0,
        },
        events: {
          onReady: (event) => {
            setReady(true);
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };

    if (window.YT?.Player) {
      init();
    } else {
      const existing = document.querySelector(`script[src="${API_SRC}"]`);
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        init();
      };
      if (!existing) {
        script = document.createElement("script");
        script.src = API_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      if (script?.parentNode) script.parentNode.removeChild(script);
    };
  }, [videoId]);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!ready || !player) return;

    if (playing) {
      player.pauseVideo();
      setPlaying(false);
    } else {
      player.unMute();
      player.setVolume(70);
      player.playVideo();
      setPlaying(true);
    }
  }, [ready, playing]);

  return { containerRef, ready, playing, toggle };
}
