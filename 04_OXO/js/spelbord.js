export class Spelbord {
  static grootte = 3;
  #bord;
  constructor() {
    this.#bord = [];
    for (let rij = 0; rij < Spelbord.grootte; rij++) {
      this.bord[rij] = new Array(Spelbord.grootte).fill('');
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

    if (isDrieOpEenRij(this.#bord[rij])) return true;
    const kolom = this.#bord.reduce((pv, el) => pv.concat([el[kol]]), []);
    if (isDrieOpEenRij(kolom)) return true;
    let diagonaal = this.#bord.reduce((pv, el, i) => pv.concat([el[i]]), []);
    if (isDrieOpEenRij(diagonaal)) return true;
    diagonaal = this.#bord.reduce(
      (pv, el, i) => pv.concat([el[Spelbord.grootte - 1 - i]]),
      []
    );
    if (isDrieOpEenRij(diagonaal)) return true;
    return false;
  }

  get isVolzet() {
    return !this.#bord.some((rij) => rij.some((e) => !e));
  }
}
