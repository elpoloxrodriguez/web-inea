import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-online',
  templateUrl: './system-online.component.html',
  styleUrls: ['./system-online.component.scss']
})
export class SystemOnlineComponent implements OnInit {

  listSystem = [
    { img: 'assets/images/system-online/3.png', title: 'SINEA', url: 'http://sinea.inea.gob.ve/sinea'},
    { img: 'assets/images/system-online/3.png', title: 'CENAVE', url: 'https://cenave.inea.gob.ve/'},
    { img: 'assets/images/system-online/3.png', title: 'GENTE DE MAR', url: 'http://sinea.inea.gob.ve/certificados/'},
    { img: 'assets/images/system-online/3.png', title: 'RECAUDACION', url: 'http://recaudacion.inea.gob.ve/sinea/'},
    { img: 'assets/images/system-online/3.png', title: 'WEB VTS - INEA', url: 'http://inea.web-vts.com/INEA/login.aspx?ReturnUrl=%2finea%2fAView.aspx'},
    { img: 'assets/images/system-online/3.png', title: 'BUQUES RENAVE', url: 'http://sinea.inea.gob.ve/consulta_buque/'},
    { img: 'assets/images/system-online/3.png', title: 'BOLETIN METEOROLOGÍCO', url: '#'},
    { img: 'assets/images/system-online/3.png', title: 'TARIFARIO', url: '#'},
    { img: 'assets/images/system-online/3.png', title: 'MATRICULACION', url: 'http://www.inea.gob.ve/rematriculacion/'},
    { img: 'assets/images/system-online/3.png', title: 'SALVOCONDUCTO DE MOVILIZACION', url: 'http://www.inea.gob.ve/salvoconducto/'},
    { img: 'assets/images/system-online/3.png', title: 'SISTEMA ARMONIZADO', url: 'http://www.inea.gob.ve/reconocimiento/'},
    { img: 'assets/images/system-online/3.png', title: 'DECLARACIONES INTERNACIONALES', url: 'http://www.inea.gob.ve/camtrip/'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
