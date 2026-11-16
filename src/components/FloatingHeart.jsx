// A small floating heart pinned to the top-left or top-right corner of a photo.
// Render it as a sibling of the image frame (inside a `relative` wrapper) so the
// frame's overflow-hidden doesn't clip it.
const corners = {
  right: "-top-4 -right-3",
  left: "-top-4 -left-3",
};

export default function FloatingHeart({ corner = "right" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-[2] animate-float-slow text-[2.2rem] leading-none text-saddle select-none drop-shadow-[0_4px_8px_rgb(127_85_57/30%)] ${corners[corner]}`}
    >
      ♥
    </span>
  );
}
