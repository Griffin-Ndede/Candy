import { BTN, BTN_PRIMARY, H2, KICKER, REVEAL } from "../lib/ui";

export default function LoveNote({ onOpenLetter }) {
  return (
    <section className="bg-linear-to-br from-cream to-sand px-6 pt-32 pb-24 text-center">
      <div data-reveal className={`mx-auto max-w-2xl ${REVEAL}`}>
        <span className={KICKER}>A little reminder</span>
        <div className="mb-4 animate-beat text-7xl text-caramel" aria-hidden="true">♥</div>
        <h2 className={H2}>You are loved more than words can say.</h2>
        <p className="mx-auto mb-8 max-w-xl leading-loose text-muted">
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
