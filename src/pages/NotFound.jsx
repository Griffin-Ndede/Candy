import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-96 place-items-center bg-white px-6 pt-40 pb-24 text-center">
      <div>
        <h2 className="mb-5 font-script text-5xl text-espresso md:text-6xl">Page not found</h2>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-saddle px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-espresso"
        >
          Back home ♥
        </Link>
      </div>
    </section>
  );
}
