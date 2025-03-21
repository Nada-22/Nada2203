import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BranchesComponent } from './branches/branches.component';

const routes: Routes = [
  
 {path:'details/:id' , component:MovieDetailsComponent},
 {path:'branches' , component:BranchesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
