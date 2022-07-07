import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  ListRadio = [
    { img: 'assets/images/radio/1.png' },
    { img: 'assets/images/radio/2.png' },
    { img: 'assets/images/radio/3.png' },
    { img: 'assets/images/radio/4.png' },
]

  constructor() { }

  ngOnInit(): void {
  }

}
