import {Component, Input} from '@angular/core';
import {Streamresult} from '../../../models/streamresult.model';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent {
  @Input()
  result: Streamresult;

  constructor() {
  }


}
