import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-box',
  templateUrl: './empty-box.component.html',
  styleUrls: ['./empty-box.component.scss']
})
export class EmptyBoxComponent implements OnInit {

  @Input() mainDesc = 'No Data Founded';
  
  constructor() { }

  ngOnInit(): void {
  }

}
