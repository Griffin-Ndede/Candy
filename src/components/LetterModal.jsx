import { BTN, BTN_PRIMARY, KICKER } from "../lib/ui";

export default function LetterModal({ letter, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] grid animate-fade-in place-items-center overflow-y-auto bg-[rgb(40_25_16/65%)] p-6 backdrop-blur-[8px] max-md:p-3"
      role="presentation"
      onClick={onClose}
    >
      <article
        className="relative max-h-[calc(100vh-48px)] w-[min(100%,620px)] animate-letter-open overflow-y-auto rounded-3xl border border-[#e3d0b9] bg-[#fdf8f1] p-[clamp(28px,6vw,55px)] text-center shadow-[0_30px_90px_rgb(0_0_0/20%)] max-md:max-h-[calc(100vh-24px)] max-md:px-6 max-md:pt-10 max-md:pb-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="candy-letter-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3.5 right-[17px] grid size-10 cursor-pointer place-items-center rounded-full border-0 bg-[#f1e3d3] text-[1.7rem] text-saddle"
          onClick={onClose}
          aria-label="Close letter"
        >
          ×
        </button>

        <span className="mb-3.5 block text-[2.8rem] text-caramel">♥</span>
        <span className={`${KICKER} text-saddle`}>A letter for you</span>
        <h2 id="candy-letter-title" className="mb-5 font-script text-[clamp(2rem,5vw,3rem)] leading-[1.2] font-medium tracking-[-.04em] text-espresso">
          {letter.title}
        </h2>

        {letter.paragraphs.map((text, i) => (
          <p key={i} className="my-4 text-left text-[.94rem] leading-[1.9] text-muted">{text}</p>
        ))}

        <p className="mt-[26px] text-center font-script text-[1.7rem] leading-normal text-saddle">
          Happy birthday, beautiful.
          <br />
          Yours, with love. ♥
        </p>

        <button className={`${BTN} ${BTN_PRIMARY} mt-3`} onClick={onClose}>
          Send you all my love ♥
        </button>
      </article>
    </div>
  );
}
