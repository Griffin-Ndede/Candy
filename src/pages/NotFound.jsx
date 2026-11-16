import { Link } from "react-router-dom";
import { BTN, BTN_PRIMARY, H2, SECTION } from "../lib/ui";

export default function NotFound() {
  return (
    <section className={`grid min-h-[420px] place-items-center bg-[#fdf9f4] pt-[140px] text-center ${SECTION}`}>
      <div className="max-w-[690px]">
        <h2 className={`${H2} text-espresso`}>Page not found</h2>
        <Link to="/" className={`${BTN} ${BTN_PRIMARY} no-underline`}>Back home ♥</Link>
      </div>
    </section>
  );
}
