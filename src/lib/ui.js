// Shared Tailwind class strings (kept in one place so components stay readable).

// Scroll-reveal: hidden until useScrollReveal sets data-visible="true"
export const REVEAL =
  "opacity-0 translate-y-[25px] transition duration-[800ms] data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100";
export const REVEAL_LG = REVEAL.replace("translate-y-[25px]", "translate-y-[35px]");

// Section spacing (px-6 / py-100, smaller on mobile)
export const SECTION = "px-6 py-[100px] max-md:px-5 max-md:py-[75px]";
// Same, but leaves room for the fixed navbar at the top
export const NAV_SECTION = "px-6 pt-[110px] pb-[100px] max-md:px-5 max-md:pb-[75px]";

export const KICKER =
  "mt-4 mb-[18px] block text-xs font-bold tracking-[.2em] uppercase";
export const H2 =
  "mx-auto mb-[22px] font-script text-[clamp(2rem,5vw,3.8rem)] leading-[1.2] font-medium tracking-[-.04em]";
export const P = "my-4 text-base leading-[1.9] text-muted";

export const BTN =
  "inline-flex min-h-[50px] cursor-pointer items-center justify-center gap-3 rounded-full border-0 px-6 py-3.5 text-[.9rem] font-bold transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-[3px]";
export const BTN_PRIMARY =
  "bg-linear-135 from-[#a47148] to-saddle text-white shadow-[0_10px_25px_rgb(127_85_57/20%)] hover:shadow-[0_14px_30px_rgb(127_85_57/30%)]";

export const PHOTO_FRAME =
  "group/frame relative block aspect-square overflow-hidden rounded-3xl bg-[#d4b595] shadow-[0_16px_30px_rgb(94_60_40/18%)]";
export const PHOTO_IMG =
  "absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover/frame:scale-[1.07]";
