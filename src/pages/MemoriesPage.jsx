import FloatingHeart from "../components/FloatingHeart";
import { memories } from "../data/memories";

// On phones everything stacks in one centred column.
// From md up: photo and caption sit on opposite sides of the centre line.
const placement = {
  left: {
    photo: "md:col-start-1 md:justify-self-end",
    caption: "md:col-start-3 md:justify-self-start md:text-left",
  },
  right: {
    photo: "md:col-start-3 md:justify-self-start",
    caption: "md:col-start-1 md:justify-self-end md:text-right",
  },
};

export default function MemoriesPage() {
  return (
    <section className="bg-cream px-6 pt-32 pb-24">
      <div
        data-reveal
        className="mx-auto mb-16 max-w-2xl translate-y-6 text-center opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      >
        <span className="mb-4 block text-xs font-bold tracking-widest text-saddle uppercase">
          Our little love story
        </span>
        <h2 className="mb-5 font-script text-5xl text-espresso md:text-6xl">
          Moments I want to keep forever
        </h2>
        <p className="leading-loose text-muted">
          Every picture tells a story. Every memory reminds me how lucky I am to have you.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* centre line (desktop only) */}
        <div className="absolute inset-y-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-caramel/60 md:block" aria-hidden="true" />

        {memories.map((m, index) => (
          <article
            key={`${m.date}-${index}`}
            data-reveal
            className="mb-16 grid translate-y-6 items-center gap-4 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 md:mb-10 md:grid-cols-[1fr_3rem_1fr] md:gap-6"
          >
            {/* Photo */}
            <div className={`group w-full max-w-xs justify-self-center md:row-start-1 ${placement[m.side].photo}`}>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-sand shadow-xl transition duration-300 group-hover:-rotate-2 group-hover:scale-105">
                  <img src={m.image} alt={m.title} className="size-full object-cover" loading="lazy" />
                </div>
                <FloatingHeart corner={m.side === "left" ? "left" : "right"} />
              </div>
              <span className="mt-3 block text-center text-xs tracking-widest text-muted uppercase">
                Memory {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Dot on the centre line (desktop only) */}
            <div className="hidden size-10 place-items-center justify-self-center rounded-full border-4 border-cream bg-saddle text-sm text-white md:col-start-2 md:row-start-1 md:grid">
              ♥
            </div>

            {/* Caption */}
            <div className={`max-w-sm justify-self-center text-center md:row-start-1 ${placement[m.side].caption}`}>
              <span className="mb-2 inline-block text-xs font-bold tracking-widest text-saddle uppercase">{m.date}</span>
              <h3 className="mb-2 font-script text-4xl text-espresso">{m.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{m.description}</p>
              <span className="mt-3 inline-block text-2xl text-caramel">♡</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
