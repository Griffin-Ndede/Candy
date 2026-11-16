import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { letter } from "../data/memories";

export default function LetterPage() {
  const { rainHearts } = useOutletContext();
  const [open, setOpen] = useState(false);

  const closeLetter = () => {
    setOpen(false);
    rainHearts();
  };

  return (
    <>
      {/* Love note */}
      <section className="bg-linear-to-br from-cream to-sand px-6 pt-32 pb-24 text-center">
        <div
          data-reveal
          className="mx-auto max-w-2xl translate-y-6 opacity-0 transition duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
        >
          <span className="mb-4 block text-xs font-bold tracking-widest text-saddle uppercase">
            A little reminder
          </span>
          <div className="mb-4 animate-beat text-7xl text-caramel" aria-hidden="true">♥</div>
          <h2 className="mb-5 font-script text-5xl text-espresso md:text-6xl">
            You are loved more than words can say.
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-loose text-muted">
            On your birthday and on every ordinary day, I hope you remember how special you
            are to me.
          </p>
          <button
            className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-saddle px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-espresso"
            onClick={() => { setOpen(true); rainHearts(); }}
          >
            Open your birthday letter <span>♥</span>
          </button>
        </div>
      </section>

      {/* Letter popup */}
      {open && (
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
