import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/memories", label: "Memories" },
  { to: "/letter", label: "Letter" },
];

export default function Navbar({ menuOpen, onToggleMenu, musicPlaying, musicReady, onToggleMusic }) {
  return (
    <header className="fixed inset-x-0 top-0 z-90 border-b border-saddle/12 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex w-[min(100%,1100px)] items-center justify-between px-6 py-3">
        <Link to="/" className="font-script text-4xl font-bold text-espresso no-underline">
          Sweets <span className="text-caramel">♥</span>
        </Link>

        <button
          className="hidden cursor-pointer border-0 bg-transparent text-[1.6rem] text-saddle max-md:block"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav
          className={`flex items-center gap-2 max-md:absolute max-md:inset-x-0 max-md:top-full max-md:flex-col max-md:items-stretch max-md:gap-1 max-md:border-b max-md:border-saddle/[.12] max-md:bg-cream max-md:px-5 max-md:pt-3 max-md:pb-[18px] ${
            menuOpen ? "" : "max-md:hidden"
          }`}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[.9rem] font-semibold no-underline transition-colors max-md:text-center ${
                  isActive ? "bg-[#f1e3d3] text-saddle" : "text-muted hover:text-saddle"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            className="ml-2 cursor-pointer rounded-full border border-saddle/20 bg-transparent px-3.5 py-2 text-[.8rem] font-bold text-saddle disabled:cursor-wait disabled:opacity-50 max-md:mt-1.5 max-md:ml-0"
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
