import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BranchesComponent } from './branches/branches.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    BranchesComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
