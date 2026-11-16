// All editable content lives here.
export const SONG_ID = "u2ah9tWTkmk"; // YouTube video id of "our song"

// Photos live in /public/photos and are numbered 1..38 (web-optimised copies of /public/images).
// Memory 01 on the page uses 1.jpg, Memory 02 uses 2.jpg, and so on.
export const PHOTO_COUNT = 38;
const photo = (n) => `/photos/${n}.jpg`;

export const heroImage = photo(11);

// Captions for the first five memories. Edit these freely.
const written = [
  { date: "The beginning", title: "When our story began",
    description: "Somehow, in a world full of people, I found you. And everything became a little more beautiful." },
  { date: "A beautiful day", title: "Your smile, my favourite view",
    description: "There are moments I wish I could pause forever. Being with you is one of them." },
  { date: "Little adventures", title: "Making memories with you",
    description: "It is never really about where we go. It is about the person beside me when we get there." },
  { date: "My favourite person", title: "You make ordinary days special",
    description: "The laughs, the conversations, and the little things that might seem ordinary to everyone else. They mean everything to me." },
  { date: "Today and always", title: "More memories to come",
    description: "This is only a small collection of moments. I cannot wait for all the beautiful chapters we have yet to write." },
];

// Placeholder captions for memories 6+ (cycled). Override any single one in `custom` below.
const generic = [
  { date: "Another moment", title: "Just us", description: "Every picture of us is a little reminder of how happy you make me." },
  { date: "Simple joys", title: "Happy with you", description: "The best moments are the ones I get to share with you." },
  { date: "Together", title: "Forever my favourite", description: "Out of every moment, the ones with you are the ones I keep." },
  { date: "A memory to keep", title: "Smiles for days", description: "Some memories never fade. This one is going straight into my heart." },
];

// Give any memory its own caption by number, e.g. 12: { date: "...", title: "...", description: "..." }
const custom = {};

export const memories = Array.from({ length: PHOTO_COUNT }, (_, i) => {
  const n = i + 1;
  const text = custom[n] ?? (i < written.length ? written[i] : generic[(i - written.length) % generic.length]);
  return { ...text, image: photo(n), side: i % 2 === 0 ? "left" : "right" };
});

export const letter = {
  title: "To my Candy,",
  paragraphs: [
    "Happy birthday, my love. I hope this new chapter of your life brings you joy, peace, laughter, and all the beautiful things your heart has been wishing for.",
    "Thank you for being you. Thank you for the memories, the smiles, the conversations, and the little moments that have become so precious to me. You make my world more meaningful just by being part of it.",
    "I hope we keep finding reasons to laugh together, places to explore, dreams to chase, and memories to look back on with happy hearts. There is still so much of our story left to write.",
  ],
};
