// All editable content lives here.
export const SONG_ID = "nSDgHBxUbVQ"; // YouTube video id of "our song"

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
    title: "The first movie date we went on and the interesting conversations we had after the movie",
  },
  // Memory 02  (photo 2.jpg)
  {
    title: "When you joined me for my birthday at the Nairobi children's rescue center and I got a glimpes of your kind heart",
  },
  // Memory 03  (photo 3.jpg)
  {
    title: "Always creating time for enjoyment any chance we get",
  },
  // Memory 04  (photo 4.jpg)
  {
    title: "Swinging into the new year",
  },
  // Memory 05  (photo 5.jpg)
  {
    title: "The irony of one of your favorite animals being a giraffe yet you are the shortest person I know haha",
  },
  // Memory 06  (photo 6.jpg)
  {
    title: "To being my muse in photos",
  },
  // Memory 07  (photo 7.jpg)
  {
    title: "Del ok ger gi matofal, Idich ma haha",
  },
  // Memory 08  (photo 8.jpg)
  {
    title: "Appetite kama ya fundi haha",
  },
  // Memory 09  (photo 9.jpg)
  {
    title: "Ukishiba hausumbui, smiles for days",
  },
  // Memory 10  (photo 10.jpg)
  {
    title: "Tupige picha mbio mbio tumalize food",
  },
  // Memory 11  (photo 11.jpg)
  {
    title: "This part of the memories is called happiness",
  },
  // Memory 12  (photo 12.jpg)
  {
    title: "To taking interest in learning new skills and hobbies together",
  },
  // Memory 13  (photo 13.jpg)
  {
    title: "Nipige moja kama niko unaware",
  },
  // Memory 14  (photo 14.jpg)
  {
    title: "His and hers camera edition",
  },
  // Memory 15  (photo 15.jpg)
  {
    title: "We keep this love in a photograph",
  },
  // Memory 16  (photo 16.jpg)
  {
    title: "Sunkissed nini nini",
  },
  // Memory 17  (photo 17.jpg)
  {
    title: "Hata mimi sijui mbona nime add hii picha hapa haha",
  },
  // Memory 18  (photo 18.jpg)
  {
    title: "To more dinner dates",
  },
  // Memory 19  (photo 19.jpg)
  {
    title: "To celebrating anniversaries together",
  },
  // Memory 20  (photo 20.jpg)
  {
    title: "And more celebrations ",
  },
  // Memory 21  (photo 21.jpg)
  {
    title: "Ni record nikuonyeshe hii dress nimevaa and other stories haha",
  },
  // Memory 22  (photo 22.jpg)
  {
    title: "To celebrating small wins like when I printed the first copy of the coloring book",
  },
  // Memory 23  (photo 23.jpg)
  {
    title: "Kushiba kwanza kabla ya celebrations haha",
  },
  // Memory 24  (photo 24.jpg)
  {
    title: "How did we even clear two pizzas in one sitting? haha",
  },
  // Memory 25  (photo 25.jpg)
  {
    title: "You showing up at the first pop up sale I did was probably the highlight of the event for me. I was so happy to have you there.",
  },
  // Memory 26  (photo 26.jpg)
  {
    title: "Kutafuta clean money will finish us haha",
  },
  // Memory 27  (photo 27.jpg)
  {
    title: "Previously on mahali clean money hutoka haha",
  },
  // Memory 28  (photo 28.jpg)
  {
    title: "Steady on the grind",
  },
  // Memory 29  (photo 29.jpg)
  {
    title: "Tupige moja ya kukumbuka zero sales haha",
  },
  // Memory 30  (photo 30.jpg)
  {
    title: "Body is tea and gik ma kamago haha",
  },
  // Memory 31  (photo 31.jpg)
  {
    title: "To more outdoors adventures together",
  },
  // Memory 32  (photo 32.jpg)
  {
    title: "To more picnics and hikes together",
  },
  // Memory 33  (photo 33.jpg)
  {
    title: "Smiles for days",
  },
  // Memory 34  (photo 34.jpg)
  {
    title: "To always looking beautiful",
  },
  // Memory 35  (photo 35.jpg)
  {
    title: "Happy birthday, Sweets. I love you.",
  },
  // Memory 36  (photo 36.jpg)
  {
    title: "Hatusmile tena hadi your next birthday haha just staying dangerous",
  },
  // Memory 37  (photo 37.jpg)
  {
    title: "We are the danger but si kama Henry danger haha",
  },
  // Memory 38  (photo 38.jpg)
  {
    title: "Just kidding to more birthdays and celebrations together and to more smiles and laughter. I love you.",
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
    "Thank you for being you and for always being a child at heart. Thank you for the memories, the bible verses you share with me, the smiles, the conversations, your support, and the little moments that have become so precious to me. You make my world more meaningful just by being part of it.",
    "I hope we keep finding reasons to laugh together, places to explore Mombasa sana sana ma chunowa, dreams to chase, and memories to look back on with happy hearts. There is still so much of our story left to write.",
  ],
};
