import {RouterModule, Routes} from '@angular/router';
import {CardListComponent} from './views/card-list/card-list.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {TierlistComponent} from './views/tierlist/tierlist.component';
import {StatsComponent} from './views/stats/stats.component';
import {TournamentStatsComponent} from './views/tournament-stats/tournament-stats.component';
import {TournamentListsComponent} from './views/tournament-lists/tournament-lists.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tierList', component: TierlistComponent},
  {path: 'card', component: CardListComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'tournamentStats', component: TournamentStatsComponent},
  {path: 'tournamentList', component: TournamentListsComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
