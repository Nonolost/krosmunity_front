import {Component, OnInit} from '@angular/core';
import {CodeService} from '../../../services/code.service';
import {Code} from '../../../models/code.model';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent implements OnInit {

  displayedCodes: Code[];

  constructor(private codeService: CodeService) {
  }

  ngOnInit() {

    this.codeService.loadCodes().subscribe(
      data => this.displayedCodes = data
    );
  }

}
