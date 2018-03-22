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
  god: number = null;
  pageNumber = 0;
  pageContent = 10;


  godList = [
    {value: 'null', viewValue: 'All'},
    {value: '0', viewValue: 'Neutral'},
    {value: '1', viewValue: 'Iop'},
    {value: '2', viewValue: 'Cra'},
    {value: '3', viewValue: 'Eniripsa'},
    {value: '4', viewValue: 'Ecaflip'},
    {value: '5', viewValue: 'Enutrof'},
    {value: '6', viewValue: 'Sram'},
    {value: '7', viewValue: 'Xelor'},
    {value: '8', viewValue: 'Sacrieur'},
    {value: '9', viewValue: 'Feca'},
    {value: '10', viewValue: 'Sadida'},
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
      const form = new FormElement(isSpellFilter, this.isToken, null, null, null, null, null, null, null, null, this.god, null, null, 0, null, 0, 100);
      this.cardService.loadCards(form).subscribe(
        data => this.displayedCards = data
      );
    } else {
      this.displayedCards = [];
    }
  }

}
