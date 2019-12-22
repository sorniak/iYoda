import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattlesComponent } from './app/pages/battles/battles.component';


const routes: Routes = [
  { path: '', component: BattlesComponent },
  { path: 'battles', component: BattlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
