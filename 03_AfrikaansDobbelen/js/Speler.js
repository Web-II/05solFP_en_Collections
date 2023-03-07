import Dobbelsteen from './dobbelsteen.js';

export default class Speler {
  static #aantalDobbelstenen = 5;
  #naam;
  #score;
  #dobbelstenen;

  constructor(naam) {
    this.#naam = naam;
    this.#score = 0;
    this.#dobbelstenen = [];
    for (let i = 1; i <= Speler.aantalDobbelstenen; i++) {
      this.#dobbelstenen.push(new Dobbelsteen());
    }
  }

  static get aantalDobbelstenen() {
    return Speler.#aantalDobbelstenen;
  }

  get naam() {
    return this.#naam;
  }

  get score() {
    return this.#score;
  }

  get dobbelstenen() {
    return this.#dobbelstenen;
  }

  speel() {
    this.dobbelstenen.forEach((ds) => ds.rol());
    this.#score = this.dobbelstenen.reduce(
      (pv, ds) =>
        ds.aantalOgen === 1 ? pv + 100 : ds.aantalOgen === 5 ? pv + 50 : pv,
      this.score
    );
  }
}
