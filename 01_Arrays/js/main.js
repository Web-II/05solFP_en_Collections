"use strict";
// ============================================================================
// Creëer een nieuwe array die alle getallen uit origineel bevat
// die groter zijn dan 3.
const origineel = [1, 2, 3, 4];
let groterDan3 = origineel.filter((el) => el > 3);
console.log(groterDan3);
// Creëer een nieuwe array die alle even getallen uit origineel bevat
let evenGetallen = origineel.filter((el) => el % 2 === 0);
console.log(evenGetallen);

// Creëer een nieuwe array die alle getallen uit origineel bevat
// maar met 5 verhoogd.
let allesPlusVijf = origineel.map((i) => i + 5);
console.log(allesPlusVijf);

// Creëer een nieuwe array waarbij de oneven getallen ongewijzigd blijven
// en de even getallen vermenigvuldigd worden met 2.
let onevenMaalTwee = origineel.map((i) => (i % 2 ? i : i * 2));
console.log(onevenMaalTwee);

// ============================================================================
// Creëer een nieuwe array met alle fruit in hoofdletters.
const fruit = ["orange", "pineapple", "strawberry", "blueberry", "melon"];
const fruitCaps = fruit.map((f) => f.toUpperCase());
console.log(fruitCaps);

// ============================================================================
// Bereken de gemiddelde leeftijd van users
const users = [
  { id: 1, firstname: "Jan", lastname: "Janssens", age: 25 },
  { id: 2, firstname: "Eva", lastname: "De Smet", age: 30 },
  { id: 3, firstname: "Pieter", lastname: "Martens", age: 29 },
];

const averageAge = users.reduce(
  (pv, { age }, i, arr) => pv + age / arr.length,
  0
);
console.log(`Average age of users = ${averageAge}`);

// ============================================================================
// Schrijf een functie filterRange die een array van getallen filtert
// voor een gegeven start- en stopwaarde. filterRange retourneert een array
// die enkel de getallen bevat die liggen tussen [start, stop]
// De array van getallen, de start en stopwaarde zijn parameters van filterRange.
// De oorspronkelijke array moet ongewijzigd blijven
let filterRange = (numbers, start, stop) =>
  numbers.filter((el) => el >= start && el <= stop);

console.log(filterRange([120, 5, -88, 26, 98, 100], 0, 100));

// ============================================================================
// We werken we met strings die enkel de karakters
// + en - bevatten.
// Schrijf een functie berekenAantalOvergangen met een string parameter
// die berekent hoeveel maal een overgang optreedt van + naar − of omgekeerd.
// Je mag ervan uitgaan dat de invoerstring minstens 1 karakter bevat.
const berekenAantalOvergangen = (plusMinString) =>
  plusMinString.split("").reduce((result, value, index, array) => {
    return (result =
      index < array.length - 1 && array[index] !== array[index + 1]
        ? result + 1
        : result);
  }, 0);

let plusMin = "-++++----++--+";
console.log(
  `Aantal overgangen in ${plusMin} = ${berekenAantalOvergangen(plusMin)}`
);
plusMin = "++";
console.log(
  `Aantal overgangen in ${plusMin} = ${berekenAantalOvergangen(plusMin)}`
);

// ============================================================================
// Een natuurlijk getal k dat bestaat uit n cijfers en dat gelijk is aan
// de som van de n-de machten van zijn cijfers
// wordt een narcistisch getal genoemd. Enkele voorbeelden:
//
// 153 = 1^3 + 5^3 + 3^3
// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 54748 = 5^5 + 4^5 + 7^5 + 4^5 + 8^5
// 548834 = 5^6 + 4^6 + 8^6 + 8^6 + 3^6 + 4^6
// 1741725 = 1^7 + 7^7 + 4^7 + 1^7+ 7^7 + 2^7 + 5^7
//
// Schrijf een functie isNarcistisch(getal) die een boolean retourneert
// die aangeeft of getal al dan niet narcistisch is
// Maak gebruik van getal.split('') om een array met
// de afzonderlijke cijfers van een getal te bekomen
const isNarcistisch = function (getal) {
  const somVanMachten = getal.split("").reduce((previous, value, _, array) => {
    return (previous += Math.pow(value, array.length));
  }, 0);
  return somVanMachten == getal; // merk op: ==
};

let getal = "548834";
console.log(`${getal} is ${isNarcistisch(getal) ? "" : "niet "}narcistisch.`);
getal = "1234";
console.log(`${getal} is ${isNarcistisch(getal) ? "" : "niet "}narcistisch.`);

// ============================================================================
// Schrijf een functie die controleert of een woord een permutatie is van
// een ander woord (i.e. ze bevatten dezelfde letters), bijvoorbeeld:
// voor SLAAPT en PLAATS retourneert de functie true
function isPermutatie(woord1, woord2) {
  return [...woord1].sort().toString() === [...woord2].sort().toString();
}

let woord1 = "slaapt",
  woord2 = "plaats";
console.log(
  `${woord1} en ${woord2} zijn ${
    isPermutatie(woord1, woord2) ? "" : "g"
  }een permutatie van elkaar.`
);
woord2 = "plast";
console.log(
  `${woord1} en ${woord2} zijn ${
    isPermutatie(woord1, woord2) ? "" : "g"
  }een permutatie van elkaar.`
);

// ============================================================================
// Sorteer de array animals op basis van gewicht: van lichter naar zwaarder
const animals = [
  {
    name: "lion",
    size: "medium",
    weight: 150,
  },
  {
    name: "dog",
    size: "small",
    weight: 10,
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000,
  },
  {
    name: "cat",
    size: "small",
    weight: 5,
  },
];

animals.sort((a, b) => a.weight - b.weight);
console.log(animals);

// ============================================================================
// Maak een array sortedShapes die de elementen uit onderstaande array aflopend op het aantal zijden van de shape bevat. De array shapes blijft ongewijzigd.
let shapes = [
  [5, "Pentagon"],
  [3, "Triangle"],
  [8, "Octagon"],
  [4, "Rectangle"],
];

const sortedShapes = shapes.toSorted(([sides1], [sides2]) => sides2 - sides1);
console.log(sortedShapes);
