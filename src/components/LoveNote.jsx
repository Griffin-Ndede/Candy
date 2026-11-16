import { BTN, BTN_PRIMARY, H2, KICKER, NAV_SECTION, REVEAL } from "../lib/ui";

export default function LoveNote({ onOpenLetter }) {
  return (
    <section className={`bg-love text-center ${NAV_SECTION}`}>
      <div data-reveal className={`mx-auto max-w-[700px] ${REVEAL}`}>
        <span className={`${KICKER} text-saddle`}>A little reminder</span>
        <div className="mx-auto mb-5 animate-beat text-[4.5rem] text-caramel" aria-hidden="true">♥</div>
        <h2 className={`${H2} text-espresso`}>You are loved more than words can say.</h2>
        <p className="mx-auto mb-7 max-w-[560px] text-base leading-[1.9] text-muted">
          On your birthday and on every ordinary day, I hope you remember how special you
          are to me.
        </p>
        <button className={`${BTN} ${BTN_PRIMARY}`} onClick={onOpenLetter}>
          Open your birthday letter <span>♥</span>
        </button>
      </div>
    </section>
  );
}
