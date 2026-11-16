import { BTN, BTN_PRIMARY, PHOTO_FRAME, PHOTO_IMG, KICKER, P, REVEAL } from "../lib/ui";

export default function Hero({ image, musicPlaying, musicReady, onExplore, onToggleMusic }) {
  return (
    <section className="bg-hero relative flex min-h-svh items-center justify-center overflow-hidden px-6 pt-[110px] pb-[110px] text-center">
      <div className="pointer-events-none absolute top-[10%] left-1/2 size-110 -translate-x-1/2 rounded-full bg-white opacity-[.32] blur-[70px]" />

      <div data-reveal className={`relative z-10 w-full max-w-195 ${REVEAL}`}>
        <p className={`${KICKER} text-saddle`}>A little website, made with love</p>

        <h1 className="m-0 font-script text-[clamp(2.7rem,7vw,5.8rem)] leading-[1.1] font-medium tracking-[-.04em] text-espresso">
          Happy Birthday,
          <span className="block text-saddle italic">Sweets</span>
        </h1>

        <p className={`${P} mx-auto mt-[22px] mb-[30px] max-w-[520px] text-[1.05rem] leading-[1.8]`}>
          To the girl who makes my world softer, brighter, and so much more beautiful.
        </p>

        <div className="relative mx-auto mb-7 w-[min(300px,70vw)] max-md:w-[min(250px,68vw)]">
          <div className={`${PHOTO_FRAME} w-full animate-float`}>
            <img src={image} alt="A special memory together" className={PHOTO_IMG} />
          </div>
          <span className="absolute right-[-8%] top-[15%] z-2 animate-float-slow text-[2.5rem] text-saddle">♥</span>
          <span className="absolute left-[-9%] bottom-[20%] z-2 animate-float-slow text-[2rem] text-saddle [animation-delay:-1.5s]">♡</span>
        </div>

        <button className={`${BTN} ${BTN_PRIMARY}`} onClick={onExplore}>
          Explore our memories <span>↓</span>
        </button>

        <button
          className="mx-auto mt-[18px] flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-saddle/20 bg-white/55 px-4 py-2.5 text-saddle disabled:cursor-wait disabled:opacity-60"
          onClick={onToggleMusic}
          disabled={!musicReady}
        >
          <span className="text-[1.1rem]">{musicPlaying ? "Ⅱ" : "♫"}</span>
          {musicPlaying ? "Pause Our Song" : "Play Our Song"}
        </button>

        <p className="mt-2 mb-0 text-[.72rem] text-muted">
          Music may require a tap before it can play with sound.
        </p>
      </div>

      <div className="absolute bottom-[25px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[.7rem] tracking-[.1em] text-muted" aria-hidden="true">
        <span className="h-7 w-px animate-scroll-dot bg-caramel" />
        <small>Scroll down</small>
      </div>
    </section>
  );
}
