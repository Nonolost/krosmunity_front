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
  apValue = null;
  atValue = null;
  mpValue = null;
  hpValue = null;
  language: number;
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
    {value: 5, viewValue: '5'},
    {value: 10, viewValue: '10'},
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
      const apMin = this.apValue;
      const apMax = this.apValue === 7 ? null : this.apValue;

      const atMin = this.atValue;
      const atMax = this.atValue === 7 ? null : this.atValue;

      const hpMin = this.hpValue;
      const hpMax = this.hpValue === 7 ? null : this.hpValue;

      const mpMin = this.mpValue;
      const mpMax = this.mpValue === 5 ? null : this.mpValue;

      const form = new FormElement(isSpellFilter,
        this.isToken,
        hpMin,
        hpMax,
        apMin,
        apMax,
        mpMin,
        mpMax,
        atMin,
        atMax,
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

  notToken() {
    if (this.rarity === 4) {
      this.isToken = false;
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
