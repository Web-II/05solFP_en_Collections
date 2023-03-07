import Speler from './Speler.js';

export default class Spel {
  #spelers = [];
  #spelerAanZet;
  constructor(spelersNamen) {
    this.#spelers = spelersNamen.map((naam) => new Speler(naam));
    this.#spelerAanZet = this.#spelers[0];
  }

  get spelerAanZet() {
    return this.#spelerAanZet;
  }

  get heeftWinnaar() {
    return this.#spelers.some((s) => s.score >= 1000);
  }

  get scoreOverzicht() {
    return this.#spelers.reduce((pv, s) => pv + `${s.naam}: ${s.score}\n`, '');
  }

  speel() {
    if (!this.heeftWinnaar) this.spelerAanZet.speel();
  }

  bepaalVolgendeSpeler() {
    if (!this.heeftWinnaar) {
      const indexNext =
        (this.#spelers.indexOf(this.#spelerAanZet) + 1) % this.#spelers.length;
      this.#spelerAanZet = this.#spelers[indexNext];
    }
  }
}
