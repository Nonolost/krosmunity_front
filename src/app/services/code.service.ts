import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Code} from '../models/code.model';

@Injectable()
export class CodeService {

  constructor(private http: HttpClient) {
  }

  loadCodes(): Observable<Code[]> {
    return this.http.get<Code[]>(environment.BASE_URL + 'code');
  }

}
