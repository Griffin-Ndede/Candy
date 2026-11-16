import { H2, HEART_FRAME, HEART_IMG, KICKER, NAV_SECTION, P, REVEAL, REVEAL_LG } from "../lib/ui";

const placement = {
  left: {
    content: "col-start-1 justify-self-end",
    caption: "col-start-3 text-left",
  },
  right: {
    content: "col-start-3 justify-self-start",
    caption: "col-start-1 text-right",
  },
};

export default function Memories({ memories }) {
  return (
    <section className={`bg-memories relative ${NAV_SECTION}`} id="candy-memories">
      <div data-reveal className={`mx-auto mb-[75px] max-w-[700px] text-center max-md:mb-[45px] ${REVEAL}`}>
        <span className={`${KICKER} text-saddle`}>Our little love story</span>
        <h2 className={`${H2} text-espresso`}>Moments I want to keep forever</h2>
        <p className={P}>Every picture tells a story. Every memory reminds me how lucky I am to have you.</p>
      </div>

      <div className="relative mx-auto w-[min(100%,1000px)]">
        <div className="bg-timeline absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 max-md:left-5" aria-hidden="true" />

        {memories.map((m, index) => (
          <article
            key={`${m.date}-${index}`}
            data-reveal
            className={`relative mb-[38px] grid min-h-[320px] grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] items-center gap-6 max-md:mb-[55px] max-md:min-h-0 max-md:grid-cols-[40px_minmax(0,1fr)] max-md:gap-3.5 ${REVEAL_LG}`}
          >
            <div
              className={`group w-[min(100%,310px)] row-start-1 ${placement[m.side].content} max-md:col-start-2 max-md:w-[min(100%,320px)] max-md:justify-self-start`}
            >
              <div className={`${HEART_FRAME} bg-memory-heart w-full drop-shadow-[0_14px_24px_rgb(94_60_40/14%)] transition-transform duration-[350ms] group-hover:-rotate-2 group-hover:scale-[1.025] max-md:w-[min(100%,300px)]`}>
                <img src={m.image} alt={m.title} className={HEART_IMG} loading="lazy" />
              </div>
              <span className="mt-3 block text-center text-[.72rem] tracking-[.12em] text-muted uppercase max-md:text-left">
                Memory {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="z-[1] col-start-2 row-start-1 grid size-[42px] place-items-center rounded-full border-[5px] border-cream bg-saddle text-[.9rem] text-white shadow-[0_0_0_1px_#c9a27e] max-md:col-start-1 max-md:mt-1 max-md:self-start">
              <span>♥</span>
            </div>

            <div className={`row-start-1 max-w-[340px] py-4 ${placement[m.side].caption} max-md:col-start-2 max-md:row-start-2 max-md:max-w-full max-md:p-0 max-md:text-left`}>
              <span className="mb-3 inline-block text-[.72rem] font-bold tracking-[.13em] text-saddle uppercase">{m.date}</span>
              <h3 className="mb-3 font-script text-[clamp(1.4rem,3vw,2rem)] leading-[1.3] font-medium text-espresso">{m.title}</h3>
              <p className="text-[.92rem] leading-[1.8] text-muted">{m.description}</p>
              <span className="mt-3.5 inline-block text-2xl text-caramel">♡</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
