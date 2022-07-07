import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  ListaSocial = [
    {
      icon: '',
      url: '',
      title: 'twitter'
    },
    {
      icon: '',
      url: '',
      title: 'instagram'
    },
    {
      icon: '',
      url: '',
      title: 'facebook'
    },
    {
      icon: '',
      url: '',
      title: 'youtube'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
