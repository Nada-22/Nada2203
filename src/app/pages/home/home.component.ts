import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items = [
    { label: 'All Movies', routerLink: '/home' },
    { label: 'For Kids' , routerLink: '/forKids' },
    { label: 'Select Branch' ,routerLink: '/movie/branches' },
 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
