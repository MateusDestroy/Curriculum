

import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormationComponent } from './pageTwo/formation/formation.component';
import { AboutMeComponent } from './pageOne/about-me/about-me.component';

const routes: Routes = [
  {path : '' , component: AboutMeComponent},
  {path : 'Formation', component: FormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
