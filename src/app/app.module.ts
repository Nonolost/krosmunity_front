import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CardListComponent} from './views/card-list/card-list.component';
import {FilterFormComponent} from './views/card-list/filter-form/filter-form.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './views/home/home.component';
import {TierlistComponent} from './views/tierlist/tierlist.component';
import {StatsComponent} from './views/stats/stats.component';
import {TournamentStatsComponent} from './views/tournament-stats/tournament-stats.component';
import {TournamentListsComponent} from './views/tournament-lists/tournament-lists.component';
import {CardService} from './services/card.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from './angular.material.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    FilterFormComponent,
    HomeComponent,
    TierlistComponent,
    StatsComponent,
    TournamentStatsComponent,
    TournamentListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
