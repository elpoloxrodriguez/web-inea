import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-online',
  templateUrl: './system-online.component.html',
  styleUrls: ['./system-online.component.scss']
})
export class SystemOnlineComponent implements OnInit {

  listSystem = [
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' },
    { img: 'assets/images/system-online/3.png' }
]

  constructor() { }

  ngOnInit(): void {
  }

}
