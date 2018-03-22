import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Card} from '../models/card.model';
import {FormElement} from '../models/formElement.model';
import {environment} from '../../environments/environment';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) {
  }

  loadCards(formData: FormElement): Observable<Card[]> {
    return this.http.post<Card[]>(environment.BASE_URL + 'card', formData);
  }


}
