// All editable content lives here.
export const SONG_ID = "u2ah9tWTkmk"; // YouTube video id of "our song"

// Photos live in /public/photos and are numbered 1.jpg ... 38.jpg.
// The Nth caption below is shown next to the Nth photo (Memory 01 = 1.jpg, Memory 02 = 2.jpg, ...).
const photo = (n) => `/photos/${n}.jpg`;

export const heroImage = photo(11);

// ---------------------------------------------------------------------------
// CAPTIONS: just type over the text in quotes for each memory.
// Keep the order (slot 1 first, slot 38 last) and keep the commas and quotes.
// If you ever want fewer memories, delete a whole { ... }, block from the end.
// ---------------------------------------------------------------------------
const captions = [
  // Memory 01  (photo 1.jpg)
  {
    title: "The first movie date we went to together",
    description: "The conversation we had after the movie hapo Sarit ndo ilifanya nikajua you are kind and thoughtful. Specifically the reason you gave me for wanting to study psychology so you can help special needs kids. I knew then that you were a special person and I wanted to be around you more.",
  },
  // Memory 02  (photo 2.jpg)
  {
    title: "Your made the day special for me",
    description: "This reinforced the fact that you are a kind person and the care and attention you gave to the kids.",
  },
  // Memory 03  (photo 3.jpg)
  {
    title: "Always create time for enjoyment",
    description: "This was so much fun.",
  },
  // Memory 04  (photo 4.jpg)
  {
    title: "You make ordinary days special",
    description: "The laughs, the conversations, and the little things that might seem ordinary to everyone else. They mean everything to me.",
  },
  // Memory 05  (photo 5.jpg)
  {
    title: "More memories to come",
    description: "This is only a small collection of moments. I cannot wait for all the beautiful chapters we have yet to write.",
  },
  // Memory 06  (photo 6.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 07  (photo 7.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 08  (photo 8.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 09  (photo 9.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 10  (photo 10.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 11  (photo 11.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 12  (photo 12.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 13  (photo 13.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 14  (photo 14.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 15  (photo 15.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 16  (photo 16.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 17  (photo 17.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 18  (photo 18.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 19  (photo 19.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 20  (photo 20.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 21  (photo 21.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 22  (photo 22.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 23  (photo 23.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 24  (photo 24.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 25  (photo 25.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 26  (photo 26.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 27  (photo 27.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 28  (photo 28.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 29  (photo 29.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 30  (photo 30.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 31  (photo 31.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 32  (photo 32.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 33  (photo 33.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 34  (photo 34.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
  // Memory 35  (photo 35.jpg)
  {
    title: "Happy with you",
    description: "The best moments are the ones I get to share with you.",
  },
  // Memory 36  (photo 36.jpg)
  {
    title: "Forever my favourite",
    description: "Out of every moment, the ones with you are the ones I keep.",
  },
  // Memory 37  (photo 37.jpg)
  {
    title: "Smiles for days",
    description: "Some memories never fade. This one is going straight into my heart.",
  },
  // Memory 38  (photo 38.jpg)
  {
    title: "Just us",
    description: "Every picture of us is a little reminder of how happy you make me.",
  },
];

// Builds the memories list: photo N goes with caption N, alternating left / right.
export const memories = captions.map((caption, i) => ({
  ...caption,
  image: photo(i + 1),
  side: i % 2 === 0 ? "left" : "right",
}));

export const letter = {
  title: "Sweets,",
  paragraphs: [
    "Happy birthday, Sweets. I hope this new chapter of your life brings you joy, peace, laughter, and all the beautiful things your heart has been wishing for.",
    "You are the kindest person I know and it shows in every story you tell me about how you day has been and how much you care about the kids you teach.",
    "Thank you for being you and for always being a child at heart. Thank you for the memories, the bible verses, the smiles, the conversations, your support, and the little moments that have become so precious to me. You make my world more meaningful just by being part of it.",
    "I hope we keep finding reasons to laugh together, places to explore Mombasa sana sana ma chunowa, dreams to chase, and memories to look back on with happy hearts. There is still so much of our story left to write.",
  ],
};
