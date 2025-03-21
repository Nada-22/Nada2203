import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'home', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
