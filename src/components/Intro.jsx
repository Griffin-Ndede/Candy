import { H2, KICKER, REVEAL } from "../lib/ui";

export default function Intro() {
  return (
    <section className="grid min-h-96 place-items-center bg-white px-6 py-24 text-center">
      <div data-reveal className={`max-w-2xl ${REVEAL}`}>
        <span className={KICKER}>To my favourite person</span>
        <h2 className={H2}>Some people make life feel like a love song.</h2>
        <p className="leading-loose text-muted">
          You are one of the most beautiful parts of my life. This little corner of the
          internet is for us: for the moments we have shared, the memories I hold close,
          and all the ones still waiting for us.
        </p>
        <span className="mt-6 block font-script text-3xl text-saddle">With all my love, always ♥</span>
      </div>
    </section>
  );
}
