import { BTN, BTN_PRIMARY, KICKER } from "../lib/ui";

export default function LetterModal({ letter, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 grid animate-fade-in place-items-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <article
        className="relative max-h-[90vh] w-full max-w-xl animate-letter-open overflow-y-auto rounded-3xl border border-sand bg-cream p-8 text-center shadow-2xl md:p-12"
        role="dialog"
        aria-modal="true"
        aria-labelledby="candy-letter-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center rounded-full bg-sand text-2xl text-saddle"
          onClick={onClose}
          aria-label="Close letter"
        >
          ×
        </button>

        <span className="mb-3 block text-4xl text-caramel">♥</span>
        <span className={KICKER}>A letter for you</span>
        <h2 id="candy-letter-title" className="mb-5 font-script text-5xl text-espresso">
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

        <button className={`${BTN} ${BTN_PRIMARY} mt-6`} onClick={onClose}>
          Send you all my love ♥
        </button>
      </article>
    </div>
  );
}
