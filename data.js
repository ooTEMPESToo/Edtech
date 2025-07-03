const vocabulary = [
  {
    letter: "A",
    word: "Apple",
    image: "pics/apple.jpeg",
  },
  {
    letter: "B",
    word: "Ball",
    image: "pics/ball.jpeg",
  },
  {
    letter: "C",
    word: "Cat",
    image: "pics/cat.jpeg",
  },
  {
    letter: "D",
    word: "Dog",
    image: "pics/dog.jpeg",
  },
  {
    letter: "E",
    word: "Egg",
    image: "pics/egg.jpeg",
  },
  {
    letter: "F",
    word: "Fish",
    image: "pics/fish.jpeg",
  },
  {
    letter: "G",
    word: "Grapes",
    image: "pics/grapes.jpeg",
  },
  {
    letter: "H",
    word: "Hat",
    image: "pics/hat.jpeg",
  },
  {
    letter: "I",
    word: "Ice creame",
    image: "pics/icecream.jpeg",
  },
  {
    letter: "J",
    word: "Juice",
    image: "pics/juice.jpeg",
  },
  {
    letter: "K",
    word: "Kite",
    image: "pics/kite.jpeg",
  },
  {
    letter: "L",
    word: "Lion",
    image: "pics/lion.jpeg",
  },
  {
    letter: "M",
    word: "Mango",
    image: "pics/mango.jpeg",
  },
  {
    letter: "N",
    word: "Nest",
    image: "pics/nest.jpeg",
  },
  {
    letter: "O",
    word: "Orange",
    image: "pics/orange.jpeg",
  },
  {
    letter: "P",
    word: "Parrot",
    image: "pics/parrot.jpeg",
  },
  {
    letter: "Q",
    word: "Queen",
    image: "pics/queen.jpeg",
  },
  {
    letter: "R",
    word: "Rabbit",
    image: "pics/rabbit.jpeg",
  },
  {
    letter: "S",
    word: "Sun",
    image: "pics/sun.jpeg",
  },
  {
    letter: "T",
    word: "Tiger",
    image: "pics/tiger.jpeg",
  },
  {
    letter: "U",
    word: "Umbrella",
    image: "pics/umbrella.jpeg",
  },
  {
    letter: "V",
    word: "Van",
    image: "pics/van.jpeg",
  },
  {
    letter: "W",
    word: "Watch",
    image: "pics/watch.jpeg",
  },
  {
    letter: "X",
    word: "Xylophone",
    image: "pics/xylophone.jpeg",
  },
  {
    letter: "Y",
    word: "Yak",
    image: "pics/yack.jpeg",
  },
  {
    letter: "Z",
    word: "Zebra",
    image: "pics/zebra.jpeg",
  },
];

const levels = Array.from({ length: 10 }, (_, i) => {
  const shuffled = [...vocabulary].sort(() => 0.5 - Math.random());
  const numItems = Math.min(2 + i, vocabulary.length);
  return {
    level: i + 1,
    items: shuffled.slice(0, numItems),
  };
});
