// ==================
// a. Gesorteerde map
// ==================
const tekst =
  'De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort';

let woordenMap = new Map();
for (const w of tekst.toUpperCase().split(' ')) {
  if (woordenMap.has(w)) woordenMap.set(w, woordenMap.get(w) + 1);
  else woordenMap.set(w, 1);
}
woordenMap = new Map([...woordenMap.entries()].sort((a, b) => b[1] - a[1]));

for (const [woord, aantal] of woordenMap) {
  console.log(`${woord} komt ${aantal} keer voor.`);
}

// =======================
// b. Coderen en Decoderen
// =======================
const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const teCoderen = 'ERRARE HUMANUM EST.';
const teDecoderen = 'SHUIHFW! BRX DUH GRLQJ JUHDW, NHHS LW XS!';
const code = 3;

const codeer = function (teCoderen, code, alfabet) {
  return [...teCoderen]
    .map((value) => {
      let index = alfabet.indexOf(value);
      if (index !== -1) return alfabet[(index + code) % alfabet.length];
      else return value;
    })
    .join('');
};

const decodeer = function (teDecoderen, code, alfabet) {
  return codeer(teDecoderen, code, alfabet.reverse());
};

console.log(
  `"${teCoderen}" is gecodeerd "${codeer(teCoderen, code, alfabet)}"\n`
);
console.log(
  `"${teDecoderen}" is gedecodeerd "${decodeer(teDecoderen, code, alfabet)}"`
);

// ===========
// c. Camelize
// ===========
function camelize(input) {
  return input
    .split('-') // my-long-word -> ['my', 'long', 'word']
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
    .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}

console.log(camelize('background-color')); // backgroundColor
console.log(camelize('list-style-image')); // listStyleImage
console.log(camelize('-webkit-transition')); // WebkitTransition

// ========
// d. Buren
// ========
const woorden = [
  'KOLDER',
  'HOLDER',
  'HELDER',
  'HERDER',
  'VERDER',
  'VERVER',
  'VERSER',
  'VELSER',
];

const zijnBuren = function (woord1, woord2) {
  return (
    1 ===
    [...woord1].reduce((aantalVerschillendeLetters, letter, index) => {
      return aantalVerschillendeLetters + (letter !== woord2[index]);
    }, 0)
  );
};

const allemaalBuren = woorden.reduce(
  (result, value, index, array) =>
    index < array.length - 1
      ? result && zijnBuren(woorden[index], woorden[index + 1])
      : result,
  true
);

console.log(
  `KOLDER en HOLDER zijn ${zijnBuren('KOLDER', 'HOLDER') ? '' : 'geen '}buren`
);
console.log(
  `KOLDER en HALDER zijn ${zijnBuren('KOLDER', 'HALDER') ? '' : 'geen '}buren`
);
console.log(
  `${allemaalBuren ? 'Alle' : 'Niet alle'} woorden in de array zijn buren.`
);

// =====
// Morse
// =====
let morse = new Map();
morse.set('A', '.-');
morse.set('B', '-...');
morse.set('C', '-.-.');
morse.set('D', '-..');
morse.set('E', '.');
morse.set('F', '..-.');
morse.set('G', '--.');
morse.set('H', '....');
morse.set('I', '..');
morse.set('J', '.---');
morse.set('K', '-.-');
morse.set('L', '.-..');
morse.set('M', '--');
morse.set('N', '-.');
morse.set('O', '---');
morse.set('P', '.--.');
morse.set('Q', '--.-');
morse.set('R', '.-.');
morse.set('S', '...');
morse.set('T', '-');
morse.set('U', '..-');
morse.set('V', '...-');
morse.set('W', '.--');
morse.set('X', '-..-');
morse.set('Y', '-.--');
morse.set('Z', '--..');
morse.set('0', '-----');
morse.set('1', '.----');
morse.set('2', '..---');
morse.set('3', '...--');
morse.set('4', '....-');
morse.set('5', '.....');
morse.set('6', '-....');
morse.set('7', '--...');
morse.set('8', '---..');
morse.set('9', '----.');
morse.set('.', '.-.-.-');
morse.set(',', '--..--');
morse.set('?', '..--..');
morse.set('-', '-....-');
morse.set('/', '-..-.');
morse.set(':', '---...');
morse.set("'", '.----.');
morse.set('-', '-....-');
morse.set(')', '-.--.-');
morse.set(';', '-.-.-');
morse.set('(', '-.--.');
morse.set('=', '-...-');
morse.set('@', '.--.-.');

let converteer = function (bericht, morse) {
  return [...bericht.toUpperCase()]
    .map((value) => (morse.has(value) ? morse.get(value) + ' ' : value))
    .join('');
};

console.log(converteer('SOS Javascript', morse));

// ========
// Josephus
// ========
function josephus(n, k) {
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, true);
  }
  let aantalLevenden = n;
  let index = 0;
  while (aantalLevenden > 1) {
    let aantal = 0;
    while (aantal < k) {
      index = (index + 1) % (n + 1);
      if (map.get(index)) aantal++;
    }
    aantalLevenden--;
    map.set(index, false);
  }
  return [...map].find(([, inLeven]) => inLeven)[0];
}

const aantalPersonen = 30;
const stapGrootte = 9;
console.log(
  `In een cirkel met ${aantalPersonen} personen en stapgrootte ${stapGrootte} sta je best op plaats ${josephus(
    aantalPersonen,
    stapGrootte
  )}`
);
