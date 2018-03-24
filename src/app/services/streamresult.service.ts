import {Injectable} from '@angular/core';
import {Streamresult} from '../models/streamresult.model';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StreamresultService {
  TWITCH_API_KEY = 'swuj1g229g7jrr01xeez4v53tritwe';
  TWITCH_API_URL = 'https://api.twitch.tv/kraken/search/streams';
  LIMIT = '10';

  constructor(private http: Http) {
  }

  search(query: string): Observable<Streamresult[]> {
    const queryUrl: string = this.TWITCH_API_URL + '?client_id=' + this.TWITCH_API_KEY + '&q=' + query + '&limit=10';
    return this.http.get<Streamresult[]>(queryUrl).map((response: Response) => {
      return (<any>response.json()).streams.map(stream => {
        return new Streamresult({
          game: stream.channel.game,
          status: stream.channel.status,
          display_name: stream.channel.display_name,
          language: stream.channel.language,
          viewers: stream.viewers,
          follower: stream.channel.followers,
          logo: stream.preview.medium,
          url: stream.channel.url
        });
      });
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }
}
