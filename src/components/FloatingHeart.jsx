// A floating heart pinned to the top-left or top-right corner of a photo.
// Put it next to the photo (inside a `relative` wrapper), not inside it.
const corners = {
  right: "-top-4 -right-3",
  left: "-top-4 -left-3",
};

export default function FloatingHeart({ corner = "right" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 animate-float-slow text-4xl text-saddle drop-shadow-md select-none ${corners[corner]}`}
    >
      ♥
    </span>
  );
}
