import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CardListComponent } from './views/card-list/card-list.component';
import { DisplayCardsComponent } from './views/card-list/display-cards/display-cards.component';
import { FilterFormComponent } from './views/card-list/filter-form/filter-form.component';
import { AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { TierlistComponent } from './views/tierlist/tierlist.component';
import { StatsComponent } from './views/stats/stats.component';
import { TournamentStatsComponent } from './views/tournament-stats/tournament-stats.component';
import { TournamentListsComponent } from './views/tournament-lists/tournament-lists.component';
import { CodesComponent } from './views/codes/codes.component';
import { NewsComponent } from './views/news/news.component';
import {StreamresultService} from './services/streamresult.service';
import { SearchresultComponent } from './views/twitch/searchresult/searchresult.component';
import { TwitchsearchstreamComponent } from './views/twitch/twitchsearchstream/twitchsearchstream.component';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    DisplayCardsComponent,
    FilterFormComponent,
    HomeComponent,
    TierlistComponent,
    StatsComponent,
    TournamentStatsComponent,
    TournamentListsComponent,
    CodesComponent,
    NewsComponent,
    SearchresultComponent,
    TwitchsearchstreamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
  ],
  providers: [StreamresultService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
