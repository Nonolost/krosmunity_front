import {Injectable} from '@angular/core';
import {Streamresult} from '../models/streamresult.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StreamresultService {
  TWITCH_API_KEY = 'swuj1g229g7jrr01xeez4v53tritwe';
  TWITCH_API_URL = 'https://api.twitch.tv/kraken/search/streams';
  LIMIT = '10';

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<Streamresult[]> {
    const queryUrl: string = this.TWITCH_API_URL + '?client_id=' + this.TWITCH_API_KEY + '&q=' + query + '&limit=10';
    return this.http.get<Streamresult[]>(queryUrl).map((response: Streamresult[]) => {
      return (<any>response).streams.map(stream => {
        return new Streamresult({
          game: stream.channel.game,
          status: stream.channel.status,
          display_name: stream.channel.display_name,
          language: stream.channel.language,
          viewers: stream.viewers,
          logo: stream.preview.medium,
          url: stream.channel.url
        });
      });
    });
  }

}
