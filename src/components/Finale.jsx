import { BTN, H2, KICKER, REVEAL, SECTION } from "../lib/ui";

export default function Finale({ onRainHearts }) {
  return (
    <section className={`bg-finale relative overflow-hidden text-center ${SECTION}`}>
      <div data-reveal className={`mx-auto max-w-[700px] ${REVEAL}`}>
        <div className="mb-[25px] animate-beat-slow text-[2.6rem] tracking-[.25em] text-[#d9b38c]" aria-hidden="true">♡ ♥ ♡</div>
        <span className={`${KICKER} text-[#e8c9a8]`}>And the story continues...</span>
        <h2 className={`${H2} text-[#fdf6ee]`}>Happy Birthday, Candy.</h2>
        <p className="my-4 text-base leading-[1.9] text-[#ecdccb]">
          Here is to more laughter, more adventures, more photographs, and more beautiful
          moments with you.
        </p>
        <button
          className={`${BTN} mt-[15px] bg-cream text-saddle shadow-[0_10px_25px_rgb(0_0_0/12%)] hover:bg-white`}
          onClick={onRainHearts}
        >
          Make it rain hearts <span>♥</span>
        </button>
        <p className="mt-[50px] font-script text-[1.6rem] text-[#ecdccb]">Made just for you, with love.</p>
      </div>
    </section>
  );
}
