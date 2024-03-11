export default class Spelbord {
  #bord;
  constructor() {
    this.#bord = [];
    for (let rij = 0; rij < 3; rij++) {
      this.#bord[rij] = [];
      for (let kol = 0; kol < 3; kol++) {
        this.#bord[rij][kol] = '';
      }
    }
  }

  get bord() {
    return this.#bord;
  }

  plaatsSymbool(symbool, rij, kol) {
    this.#bord[rij][kol] = symbool;
  }

  geefSymbool(rij, kol) {
    return this.#bord[rij][kol];
  }

  isVrij(rij, kol) {
    return !this.#bord[rij][kol];
  }

  bevatDrieOpEenRij(symbool, rij, kol) {
    const isDrieOpEenRij = (drieCellen) =>
      drieCellen.every((s) => s === symbool);

    // horizontaal
    if (isDrieOpEenRij(this.#bord[rij])) return true;
    // verticaal
    const kolom = this.#bord.reduce((pv, el) => pv.concat([el[kol]]), []);
    if (isDrieOpEenRij(kolom)) return true;
    // diagonalen
    let diagonaal = this.#bord.reduce((pv, el, i) => pv.concat([el[i]]), []);
    if (isDrieOpEenRij(diagonaal)) return true;
    diagonaal = this.#bord.reduce((pv, el, i) => pv.concat([el[2 - i]]), []);
    if (isDrieOpEenRij(diagonaal)) return true;
    return false;
  }

  get isVolzet() {
    for (const rij of this.#bord) for (const kol of rij) if (!kol) return false;
    return true;
  }
}
