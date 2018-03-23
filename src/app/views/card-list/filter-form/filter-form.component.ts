import {Component, OnInit} from '@angular/core';
import {CardService} from '../../../services/card.service';
import {FormElement} from '../../../models/formElement.model';
import {Card} from '../../../models/card.model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

  displayedCards: Card[];
  isToken = false;
  isSpell = true;
  isMinion = true;
  god = -1;
  pageNumber = 0;
  pageContent = 10;
  language: number;
  atMin: number;
  atMax: number;
  apMin: number;
  apMax: number;
  hpMin: number;
  hpMax: number;
  mpMin: number;
  mpMax: number;
  rarity = -1;
  extension: number;
  content: string;


  godList = [
    {value: -1, viewValue: 'All'},
    {value: 0, viewValue: 'Neutral'},
    {value: 1, viewValue: 'Iop'},
    {value: 2, viewValue: 'Cra'},
    {value: 3, viewValue: 'Eniripsa'},
    {value: 4, viewValue: 'Ecaflip'},
    {value: 5, viewValue: 'Enutrof'},
    {value: 6, viewValue: 'Sram'},
    {value: 7, viewValue: 'Xelor'},
    {value: 8, viewValue: 'Sacrieur'},
    {value: 9, viewValue: 'Feca'},
    {value: 10, viewValue: 'Sadida'},
  ];

  rarityList = [
    {value: -1, viewValue: 'All'},
    {value: 0, viewValue: 'Common'},
    {value: 1, viewValue: 'Uncommon'},
    {value: 2, viewValue: 'Rare'},
    {value: 3, viewValue: 'Krosmique'},
    {value: 4, viewValue: 'Infinite'},
  ];

  pageContentList = [
    {value: 10, viewValue: '10'},
    {value: 20, viewValue: '20'},
  ];


  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.getFilteredCards();
  }


  getFilteredCards() {
    let isSpellFilter: boolean;
    if (this.isMinion || this.isSpell) {
      if (this.isMinion && this.isSpell) {
        // Créa et sorts donc pas de filtre
        isSpellFilter = null;
      } else {
        isSpellFilter = this.isSpell;
      }
      const form = new FormElement(isSpellFilter,
        this.isToken,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        (this.god === -1) ? null : this.god,
        (this.rarity === -1) ? null : this.rarity,
        null,
        0,
        null,
        this.pageNumber,
        this.pageContent);
      this.cardService.loadCards(form).subscribe(
        data => this.displayedCards = data
      );
    } else {
      this.displayedCards = [];
    }
  }


  resetGod() {
    if (this.rarity === 4) {
      this.god = -1;
    }
  }

  resetRarity() {
    if (this.rarity === 4) {
      this.rarity = -1;
    }
  }


  pageUp() {
    this.pageNumber++;
    this.getFilteredCards();
  }

  pageDown() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.getFilteredCards();
    }
  }

  resetPage() {
    this.pageNumber = 0;
  }

}
