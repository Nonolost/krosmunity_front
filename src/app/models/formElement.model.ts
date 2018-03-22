export class FormElement {
  isSpell: boolean;
  isToken: boolean;
  hpGreaterThan: number;
  hpLessThan: number;
  apGreaterThan: number;
  apLessThan: number;
  mpGreaterThan: number;
  mpLessThan: number;
  atGreaterThan: number;
  atLessThan: number;
  god: number;
  rarity: number;
  extension: number;
  language: number;
  content: string;
  pageNumber: number;
  pageContent: number;

  constructor(isSpell: boolean, isToken: boolean, hpGreaterThan: number, hpLessThan: number, apGreaterThan: number, apLessThan: number, mpGreaterThan: number, mpLessThan: number, atGreaterThan: number, atLessThan: number, god: number, rarity: number, extension: number, language: number, content: string, pageNumber: number, pageContent: number) {
    this.isSpell = isSpell;
    this.isToken = isToken;
    this.hpGreaterThan = hpGreaterThan;
    this.hpLessThan = hpLessThan;
    this.apGreaterThan = apGreaterThan;
    this.apLessThan = apLessThan;
    this.mpGreaterThan = mpGreaterThan;
    this.mpLessThan = mpLessThan;
    this.atGreaterThan = atGreaterThan;
    this.atLessThan = atLessThan;
    this.god = god;
    this.rarity = rarity;
    this.extension = extension;
    this.language = language;
    this.content = content;
    this.pageNumber = pageNumber;
    this.pageContent = pageContent;
  }
}
