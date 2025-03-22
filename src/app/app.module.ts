import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from "./layout/layout.module";
import { HomeComponent } from './pages/home/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    TabMenuModule,
    SharedModule,
    SwiperModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
