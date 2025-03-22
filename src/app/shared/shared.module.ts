import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgHandlerComponent } from './components/img-handler/img-handler.component';

import { InputTextModule } from 'primeng/inputtext';
const components = [
  ImgHandlerComponent
]

@NgModule({
  declarations: [
    ...components
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
