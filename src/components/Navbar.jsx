import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/memories", label: "Memories" },
];

export default function Navbar({ menuOpen, onToggleMenu, musicPlaying, musicReady, onToggleMusic }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-saddle/10 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link to="/" className="font-script text-3xl text-espresso">
          Sweets <span className="text-caramel">♥</span>
        </Link>

        <button
          className="cursor-pointer text-2xl text-saddle md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav
          className={`absolute inset-x-0 top-full flex-col gap-1 border-b border-saddle/10 bg-cream px-6 py-4 md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-center text-sm font-semibold transition ${
                  isActive ? "bg-sand text-saddle" : "text-muted hover:text-saddle"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            className="cursor-pointer rounded-full border border-saddle/20 px-4 py-2 text-xs font-bold text-saddle disabled:cursor-wait disabled:opacity-50 md:ml-2"
            onClick={onToggleMusic}
            disabled={!musicReady}
          >
            {musicPlaying ? "Ⅱ Pause" : "♫ Play"}
          </button>
        </nav>
      </div>
    </header>
  );
}
