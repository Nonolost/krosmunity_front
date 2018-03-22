export class Card {
  language: number;
  god: number;
  name: string;
  description: string;
  at: number;
  ap: number;
  hp: number;
  mp: number;
  isSpell: boolean;
  family: string;
  rarity: number;
  extension: number;
  isToken: boolean;
  imageLink: string;

  constructor(language, god, name, description, at, ap, hp, mp, isSpell, family, rarity, extension, isToken, imageLink) {
    this.language = language;
    this.god = god;
    this.name = name;
    this.description = description;
    this.at = at;
    this.ap = ap;
    this.hp = hp;
    this.mp = mp;
    this.isSpell = isSpell;
    this.family = family;
    this.rarity = rarity;
    this.extension = extension;
    this.isToken = isToken;
    this.imageLink = imageLink;
  }
}
