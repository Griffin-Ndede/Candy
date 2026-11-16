import { BTN, BTN_PRIMARY, KICKER, REVEAL } from "../lib/ui";

export default function Hero({ image, musicPlaying, musicReady, onExplore, onToggleMusic }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-cream via-sand to-caramel/30 px-6 pt-28 pb-24 text-center">
      <div className="pointer-events-none absolute top-20 left-1/2 size-96 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

      <div data-reveal className={`relative z-10 w-full max-w-3xl ${REVEAL}`}>
        <p className={KICKER}>A little website, made with love</p>

        <h1 className="font-script text-6xl text-espresso md:text-8xl">
          Happy Birthday,
          <span className="block text-saddle italic">Sweets</span>
        </h1>

        <p className="mx-auto mt-5 mb-8 max-w-lg text-lg leading-relaxed text-muted">
          To the girl who makes my world softer, brighter, and so much more beautiful.
        </p>

        <div className="relative mx-auto mb-8 w-64 md:w-80">
          <div className="aspect-square animate-float overflow-hidden rounded-3xl shadow-xl">
            <img src={image} alt="A special memory together" className="size-full object-cover" />
          </div>
          <span className="absolute -top-4 -right-4 animate-float-slow text-4xl text-saddle">♥</span>
          <span className="absolute -bottom-4 -left-4 animate-float-slow text-3xl text-saddle">♡</span>
        </div>

        <button className={`${BTN} ${BTN_PRIMARY}`} onClick={onExplore}>
          Explore our memories <span>↓</span>
        </button>

        <div className="mt-4">
          <button
            className="mx-auto flex cursor-pointer items-center gap-2 rounded-full border border-saddle/20 bg-white/60 px-4 py-2 text-sm text-saddle disabled:cursor-wait disabled:opacity-60"
            onClick={onToggleMusic}
            disabled={!musicReady}
          >
            <span>{musicPlaying ? "Ⅱ" : "♫"}</span>
            {musicPlaying ? "Pause Our Song" : "Play Our Song"}
          </button>
          <p className="mt-2 text-xs text-muted">
            Music may require a tap before it can play with sound.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-muted" aria-hidden="true">
        <span className="h-7 w-px animate-scroll-dot bg-caramel" />
        <small>Scroll down</small>
      </div>
    </section>
  );
}
