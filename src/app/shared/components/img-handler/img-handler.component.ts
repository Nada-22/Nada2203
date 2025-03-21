import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-handler',
  templateUrl: './img-handler.component.html',
  styleUrls: ['./img-handler.component.scss'],

})
export class ImgHandlerComponent implements OnInit {

  @Input() src = '';
  @Input() width = '100px';
  @Input() height = '100px';
  @Input() alt = '';
  fallback = 'assets/imgs/empty-data.svg'; // Default fallback image
  @Input() placeholder = 'assets/imgs/empty-data.svg'; // Spinner or placeholder image

  currentSrc: string | null = null;
  isLoading = true;

  onLoad() {
    this.isLoading = false;
  }

  onError() {
    this.currentSrc = this.fallback;
    this.isLoading = false;
  }

  ngOnInit() {
    this.currentSrc = this.src;
  }
}