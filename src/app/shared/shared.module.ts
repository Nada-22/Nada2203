import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgHandlerComponent } from './components/img-handler/img-handler.component';

const components = [
  ImgHandlerComponent
]

@NgModule({
  declarations: [
    ImgHandlerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImgHandlerComponent
  ]
})
export class SharedModule { }
