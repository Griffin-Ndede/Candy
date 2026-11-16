import { useNavigate, useOutletContext } from "react-router-dom";
import { heroImage } from "../data/memories";

export default function Home() {
  const { rainHearts, music } = useOutletContext();
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-cream via-sand to-caramel/30 px-6 pt-28 pb-24 text-center">
        <div className="pointer-events-none absolute top-20 left-1/2 size-96 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

        <div
          data-reveal
          className="relative z-10 w-full max-w-3xl translate-y-6 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
        >
          <p className="mb-4 block text-xl font-light text-saddle">
            This part of my life is called
          </p>

          <h1 className=" text-xl text-espresso md:text-6xl">
            Happy Birthday,
          </h1>
          <span className="block font-script text-saddle text-8xl">Sweets</span>

          <p className="mx-auto mt-5 mb-8 max-w-lg text-lg leading-relaxed text-muted">
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
              {music.playing ? "Pause Our Song" : "Play Our Song"}
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
          <p className="mb-1 text-xl font-light text-saddle">This part of my life is called</p>
          <h2 className="mb-5 font-script text-6xl text-espresso md:text-7xl">
            My favourite person and best friend
          </h2>
          <p className="leading-loose text-muted">
            Some people make life feel like a love song. You are one of the most beautiful parts of my life. This little
            corner of the internet is for us: for the moments we have shared,
            the memories I hold close, and all the ones still waiting for us.
          </p>
          <span className="mt-6 block font-script text-3xl text-saddle">
            With all my love, always ♥
          </span>
        </div>
      </section>
    </>
  );
}
