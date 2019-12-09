import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattlesComponent } from './app/pages/battles/battles.component';
import { HistoryComponent } from './app/pages/history/history.component';


const routes: Routes = [
  { path: '', component: BattlesComponent },
  { path: 'battles', component: BattlesComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
