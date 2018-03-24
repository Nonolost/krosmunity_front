import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {TierListDTO} from '../models/TierListDTO.model';

@Injectable()
export class TierListService {

  constructor(private http: HttpClient) {
  }

  loadTierList(): Observable<TierListDTO[]> {
    return this.http.get<TierListDTO[]>(environment.BASE_URL + 'tierList');
  }
}
