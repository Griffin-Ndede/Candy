import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { heroImage, letter } from "../data/memories";

export default function Home() {
  const { rainHearts, music } = useOutletContext();
  const navigate = useNavigate();
  const [letterOpen, setLetterOpen] = useState(false);

  const closeLetter = () => {
    setLetterOpen(false);
    rainHearts();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-cream via-sand to-caramel/30 px-6 pt-28 pb-24 text-center">
        <div className="pointer-events-none absolute top-20 left-1/2 size-96 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

        <div
          data-reveal
          className="relative z-10 w-full max-w-3xl translate-y-6 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
        >
         

          <h1 className=" text-xl text-espresso md:text-6xl">
            Happy Birthday,
          </h1>
          <span className="block font-script text-saddle text-8xl">Sweets</span>

          <p className="mx-auto mt-5 mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            To the girl who makes my world softer, brighter, and so much more
            beautiful.
          </p>

          <div className="relative mx-auto mb-8 ">
            <div className="aspect-square animate-float overflow-hidden rounded-3xl shadow-xl">
              <img
                src={heroImage}
                alt="A special memory together"
                className="size-full object-cover"
              />
            </div>
            <span className="absolute -top-4 -right-4 animate-float-slow text-4xl text-saddle">
              ♥
            </span>
            <span className="absolute -bottom-4 -left-4 animate-float-slow text-3xl text-saddle">
              ♡
            </span>
          </div>

          <button
            className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-saddle px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-espresso"
            onClick={() => {
              rainHearts();
              navigate("/memories");
            }}
          >
            Explore our memories <span>↓</span>
          </button>

          <div className="mt-4">
            <button
              className="mx-auto flex cursor-pointer items-center gap-2 rounded-full border border-saddle/20 bg-white/60 px-4 py-2 text-sm text-saddle disabled:cursor-wait disabled:opacity-60"
              onClick={() => {
                music.toggle();
                rainHearts();
              }}
              disabled={!music.ready}
            >
              <span>{music.playing ? "Ⅱ" : "♫"}</span>
              {music.playing ? "Pause the Song" : "Play the Song"}
            </button>
            <p className="mt-2 text-xs text-muted">
              Music may require a tap before it can play with sound.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs  text-muted"
          aria-hidden="true"
        >
          <span className="h-7 w-px animate-scroll-dot bg-caramel" />
          <small>Scroll down</small>
        </div>
      </section>

      {/* Intro */}
      <section className="grid min-h-96 place-items-center bg-white px-6 py-24 text-center">
        <div
          data-reveal
          className="max-w-2xl translate-y-6 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
        >
          <p className="mb-1 text-xl font-light text-saddle">
            This part of my life is called
          </p>
          <h2 className="mb-5 font-script text-6xl text-espresso md:text-7xl">
            A dedication to my favourite person and best friend
          </h2>
          <p className="leading-loose text-muted">
            This part of my life that I share with you is called love and happiness. This little corner of the internet is
            for us: for the moments we have shared, the memories I hold close,
            and all the ones still waiting for us.
          </p>
          <span className="mt-6 block font-script text-3xl text-saddle">
            With all my love, always ♥
          </span>
        </div>
      </section>

      {/* Love note */}
      <section className="bg-linear-to-br from-cream to-sand px-6 py-24 text-center">
        <div
          data-reveal
          className="mx-auto max-w-2xl translate-y-6 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
        >
          <p className="mb-1 text-xl font-light text-saddle">This part of my life is called</p>
          <h2 className="mb-5 font-script text-6xl text-espresso md:text-7xl">
            Love
          </h2>
          <div className="mb-4 animate-beat text-7xl text-caramel" aria-hidden="true">♥</div>
          <p className="mx-auto mb-8 max-w-xl leading-loose text-muted">
            You are loved more than words can say. On your birthday and on every ordinary day, I hope you remember how special you
            are to me.
          </p>
          <button
            className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-saddle px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-espresso"
            onClick={() => { setLetterOpen(true); rainHearts(); }}
          >
            Open your birthday letter <span>♥</span>
          </button>
        </div>
      </section>

      {/* Letter popup */}
      {letterOpen && (
        <div
          className="fixed inset-0 z-50 grid animate-fade-in place-items-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={closeLetter}
        >
          <article
            className="relative max-h-[90vh] w-full max-w-xl animate-letter-open overflow-y-auto rounded-3xl border border-sand bg-cream p-8 text-center shadow-2xl md:p-12"
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center rounded-full bg-sand text-2xl text-saddle"
              onClick={closeLetter}
              aria-label="Close letter"
            >
              ×
            </button>

            <span className="mb-3 block text-4xl text-caramel">♥</span>
            <span className="mb-4 block text-xs font-bold tracking-widest text-saddle uppercase">
              A letter for you
            </span>
            <h2 id="letter-title" className="mb-5 font-script text-5xl text-espresso">
              {letter.title}
            </h2>

            {letter.paragraphs.map((text, i) => (
              <p key={i} className="my-4 text-left text-sm leading-loose text-muted">{text}</p>
            ))}

            <p className="mt-6 font-script text-3xl text-saddle">
              Happy birthday, beautiful.
              <br />
              Yours, with love. ♥
            </p>

            <button
              className="mt-6 inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-saddle px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-espresso"
              onClick={closeLetter}
            >
              Send you all my love ♥
            </button>
          </article>
        </div>
      )}
    </>
  );
}
