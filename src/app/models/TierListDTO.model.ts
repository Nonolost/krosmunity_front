export class TierListDTO {

  id: number;
  god: number;
  name: string;
  author: string;
  type: string;
  tier: number;
  note: number;
  kamasPrice: number;
  dustPrice: number;
  krosbuilderLink: string;


  constructor(id: number, god: number, name: string, author: string, type: string, tier: number, note: number, kamasPrice: number, dustPrice: number, krosbuilderLink: string) {
    this.id = id;
    this.god = god;
    this.name = name;
    this.author = author;
    this.type = type;
    this.tier = tier;
    this.note = note;
    this.kamasPrice = kamasPrice;
    this.dustPrice = dustPrice;
    this.krosbuilderLink = krosbuilderLink;
  }
}
