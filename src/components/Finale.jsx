// Shown at the bottom of every page (rendered by layout/Layout.jsx).
export default function Finale({ onRainHearts }) {
  return (
    <section className="overflow-hidden bg-linear-to-br from-saddle to-espresso px-6 py-24 text-center">
      <div
        data-reveal
        className="mx-auto max-w-2xl translate-y-6 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      >
        <div className="mb-6 animate-beat-slow text-4xl tracking-widest text-caramel" aria-hidden="true">♡ ♥ ♡</div>
        <span className="mb-4 block text-xs font-bold tracking-widest text-sand uppercase">
          And the story continues...
        </span>
        <h2 className="mb-5 font-script text-5xl text-cream md:text-6xl">Happy Birthday, Candy.</h2>
        <p className="mb-6 leading-loose text-sand">
          Here is to more laughter, more adventures, more photographs, and more beautiful
          moments with you.
        </p>
        <button
          className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-bold text-saddle shadow-lg transition hover:-translate-y-1 hover:bg-white"
          onClick={onRainHearts}
        >
          Make it rain hearts <span>♥</span>
        </button>
        <p className="mt-12 font-script text-3xl text-sand">Made just for you, with love.</p>
      </div>
    </section>
  );
}
