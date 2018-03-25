import {Component, OnInit} from '@angular/core';
import {Streamresult} from '../../models/streamresult.model';
import {StreamresultService} from '../../services/streamresult.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchsearchstreamComponent implements OnInit {
  results: Streamresult[];

  constructor(private searchUserservice: StreamresultService) {
  }

  ngOnInit() {
    this.updateResults();
  }

  updateResults(): void {
    this.searchUserservice.search('Krosmaga').subscribe(results => this.results = results);
  }
}
