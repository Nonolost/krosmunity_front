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
    this.dataSource = new MatTableDataSource(this.tierList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    this.filter = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.filter;
  }

}
