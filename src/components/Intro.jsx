import { H2, KICKER, P, REVEAL, SECTION } from "../lib/ui";

export default function Intro() {
  return (
    <section className={`grid min-h-[420px] place-items-center bg-[#fdf9f4] text-center ${SECTION}`}>
      <div data-reveal className={`max-w-[690px] ${REVEAL}`}>
        <span className={`${KICKER} text-saddle`}>To my favourite person</span>
        <h2 className={`${H2} text-espresso`}>Some people make life feel like a love song.</h2>
        <p className={P}>
          You are one of the most beautiful parts of my life. This little corner of the
          internet is for us: for the moments we have shared, the memories I hold close,
          and all the ones still waiting for us.
        </p>
        <span className="mt-6 block font-script text-[1.8rem] text-saddle">With all my love, always ♥</span>
      </div>
    </section>
  );
}
