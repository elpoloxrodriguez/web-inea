import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  ListaSocial = [
    {
      icon: 'lni-twitter-original',
      url: '#',
      title: 'twitter',
    },
    {
      icon: 'lni-instagram-original',
      url: '#',
      title: 'instagram',
    },
    {
      icon: 'lni-facebook-filled',
      url: '#',
      title: 'facebook',
    },
    {
      icon: 'lni-youtube',
      url: '#',
      title: 'youtube',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
