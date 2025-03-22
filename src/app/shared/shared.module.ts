import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgHandlerComponent } from './components/img-handler/img-handler.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { EmptyBoxComponent } from './components/empty-box/empty-box.component';
import { LoaderComponent } from './components/loader/loader.component';
const components = [
  ImgHandlerComponent,
  EmptyBoxComponent,
  LoaderComponent
]

@NgModule({
  declarations: [
    ...components,
    

  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    BlockUIModule,
    ProgressSpinnerModule

  ],
  exports: [
    ...components,
    InputTextModule,
    ButtonModule,
    BlockUIModule,
    ProgressSpinnerModule
  ]
})
export class SharedModule { }
