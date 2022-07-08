import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  ListaCarousel = [
    {
      img: 'assets/images/carousel/2.jpeg',
      title: 'SERVICIOS',
      buttons: [
        { url: '#', title: 'OPERATIVOS'},
        { url: '#', title: 'TARIFARIO'}
      ]
    },
    {
      img: 'assets/images/carousel/3.jpeg',
      title: 'SERVICIOS',
      buttons: [
        { url: '#', title: 'ADMINISTRATIVOS'},
        { url: '#', title: 'TARIFARIO'}
      ]
    },
    {
      img: 'assets/images/carousel/4.jpeg',
      title: 'SERVICIOS',
      buttons: [
        { url: '#', title: 'OPERATIVOS'},
        { url: '#', title: 'ADMINISTRATIVOS'},
      ]
    }
  ]

  ListaIndicadores = [
    { cantidad: '8.564', title: 'Buques Abanderados'},
    { cantidad: '59.687', title: 'Documentación técnica emitida a la Gente de Mar'},
    { cantidad: '3.412', title: 'Inspecciones realizadas a instalaciones portuarias'},
    { cantidad: '936', title: 'Charlas de conciencia acuática impartidas'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
