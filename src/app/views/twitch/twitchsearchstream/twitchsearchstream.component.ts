import {Component, OnInit} from '@angular/core';
import {Streamresult} from '../../../models/streamresult.model';
import {StreamresultService} from '../../../services/streamresult.service';

@Component({
  selector: 'app-twitchsearchstream',
  templateUrl: './twitchsearchstream.component.html',
  styleUrls: ['./twitchsearchstream.component.scss']
})
export class TwitchsearchstreamComponent implements OnInit {
  results: Streamresult[];

  constructor(private searchUserservice: StreamresultService) {
  }

  ngOnInit() {
    this.updateResults();
  }

  updateResults(): void {
    this.searchUserservice.search('Solary').subscribe(results => this.results = results);
  }
}
