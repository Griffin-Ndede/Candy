import { Link } from "react-router-dom";
import { BTN, BTN_PRIMARY, H2 } from "../lib/ui";

export default function NotFound() {
  return (
    <section className="grid min-h-96 place-items-center bg-white px-6 pt-40 pb-24 text-center">
      <div>
        <h2 className={H2}>Page not found</h2>
        <Link to="/" className={`${BTN} ${BTN_PRIMARY}`}>Back home ♥</Link>
      </div>
    </section>
  );
}
