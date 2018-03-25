import {Component, OnInit, ViewChild} from '@angular/core';
import {TierListService} from '../../services/tier-list.service';
import {TierListDTO} from '../../models/TierListDTO.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-tierlist',
  templateUrl: './tierlist.component.html',
  styleUrls: ['./tierlist.component.scss']
})
export class TierlistComponent implements OnInit {

  godList = [
    {value: 0, viewValue: 'Neutral'},
    {value: 1, viewValue: 'iop'},
    {value: 2, viewValue: 'cra'},
    {value: 3, viewValue: 'eniripsa'},
    {value: 4, viewValue: 'ecaflip'},
    {value: 5, viewValue: 'enutrof'},
    {value: 6, viewValue: 'sram'},
    {value: 7, viewValue: 'xelor'},
    {value: 8, viewValue: 'sacrieur'},
    {value: 9, viewValue: 'feca'},
    {value: 10, viewValue: 'sadida'},
  ];

  tierList: TierListDTO[];
  displayedColumns = ['name', 'god', 'author', 'type', 'tier', 'note', 'kamasPrice', 'dustPrice', 'krosbuilderLink'];
  dataSource: MatTableDataSource<TierListDTO>;
  filter = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tierListService: TierListService) {
  }

  ngOnInit() {
    this.tierListService.loadTierList().subscribe(
      data => this.tierList = data
    );
  }
}
