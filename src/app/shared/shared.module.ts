import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgHandlerComponent } from './components/img-handler/img-handler.component';

import { InputTextModule } from 'primeng/inputtext';
import { EmptyBoxComponent } from './components/empty-box/empty-box.component';
const components = [
  ImgHandlerComponent,
  EmptyBoxComponent
]

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    InputTextModule
    
  ],
  exports: [
    ...components,
    InputTextModule
  ]
})
export class SharedModule { }
