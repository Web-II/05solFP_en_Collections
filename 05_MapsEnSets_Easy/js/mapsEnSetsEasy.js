'use strict';
// =============
// Deel 1 - Maps
// =============

// Declareer een lege map genaamd nl_en_dict
const nl_en_dict = new Map();

// Voeg de volgende key-value pairs toe aan nl_en_dict. Maak gebruik van method chaining.
// stoel - chair
// tafel - table
// kaars - candle
// dubbel - double
nl_en_dict
  .set('stoel', 'chair')
  .set('tafel', 'table')
  .set('kaars', 'candle')
  .set('dubbel', 'double');

// Declareer een map genaamd en_fr_dict die initieel volgende entries bevat.
// chair - chaise
// table - table
// candle - bougie
// double - double

const en_fr_dict = new Map([
  ['chair', 'chaise'],
  ['table', 'table'],
  ['candle', 'bougie'],
  ['double', 'double']
]);

// Gebruik nl_en_dict om woorden te vertalen van NL naar EN
// Vul onderstaande code aan
console.log('Vertalen van NL naar EN');
let word = prompt('Geef een nederlands woord');
while (word) {
  if (nl_en_dict.has(word))
    console.log(`NL: ${word} - EN: ${nl_en_dict.get(word)}`);
  else console.log(`${word} staat niet in het woordenboek`);
  word = prompt('Geef een nederlands woord');
}

// Gebruik beide woordenboeken om woorden te vertalen van NL naar EN
// Vul onderstaande code aan
console.log('Vertalen van NL naar FR');
word = prompt('Geef een nederlands woord');
while (word) {
  if (nl_en_dict.has(word))
    console.log(`NL: ${word} - FR: ${en_fr_dict.get(nl_en_dict.get(word))}`);
  else console.log(`${word} staat niet in het woordenboek`);
  word = prompt('Geef een nederlands woord');
}

// Itereer over nl_en_dict en log alle nederlandse woorden naar de console.
// Maak gebruik van een for .. of lus
for (const word of nl_en_dict.keys()) {
  console.log(word);
}

// Itereer over en_fr_dict en log alle entries naar de console.
// Maak gebruik van een for .. of lus en array destructuring.
// Elke entry wordt getoond als key: value
for (const [enWord, frWord] of en_fr_dict.entries()) {
  console.log(`${enWord}: ${frWord}`);
}
// Schrijf een functie die een woordenboek als parameter heeft
// en die retourneert hoeveel woorden identiek zijn in beide talen (i.e. key en value hebben dezelfde waarde)
function geefZelfdeWoorden(dictionary) {
  let doubles = 0;
  for (const [word1, word2] of dictionary.entries()) {
    if (word1 === word2) ++doubles;
  }
  return doubles;
}

// Gebruik de functie en log naar de console voor onze beide dictionaries
// hoeveel identieke woorden ze bevatten
console.log(
  `nl_en dictionary bevat ${geefZelfdeWoorden(nl_en_dict)} identieke woorden`
);
console.log(
  `en_fr dictionary bevat ${geefZelfdeWoorden(en_fr_dict)} identieke woorden`
);

// =============
// Deel 2 - Sets
// =============

const krishna = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];

// Overloop de array krishna met een forEach en voeg alle
// elementen toe aan een initieel lege set.
// Overloop de set met een for-of en druk de inhoud af.
// Zijn de dubbels verdwenen?
let uniek = new Set();
krishna.forEach((el) => uniek.add(el));
for (const el of uniek) {
  console.log(el);
}

// Maak nu gebruik van de spread syntax om met een one-liner
// een *array* van unieke waarden te krijgen uit de array krishna
uniek = [...new Set(krishna)];
for (const el of uniek) {
  console.log(el);
}

// Maak een array met 3 *verschillende* random getallen tussen 1 en 6
let getallen = new Set();
while (getallen.size < 3) {
  getallen.add(Math.floor(Math.random() * 6) + 1);
}
getallen = [...getallen];
console.log(getallen);
