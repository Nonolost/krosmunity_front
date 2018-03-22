import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterFormComponent} from './filter-form/filter-form.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @ViewChild(FilterFormComponent) filterFormComponent: FilterFormComponent;

  ngOnInit() {
  }

}
