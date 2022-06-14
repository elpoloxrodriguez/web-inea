import { Component, OnInit } from '@angular/core';
import { ApiService, IAPICore } from 'src/app/service/apicore/api.service';


interface Mensaje {
  resp: string;
  preg: string;
}


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  public xAPI: IAPICore = {
    funcion: '',
    parametros: ''
  }
  public msj: any
  public preg: any
  public hidden = false
  public msjAux: any
  public client: Array<Mensaje> = []
  public boot: Array<Mensaje> = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ChatBot() {
    this.msjAux = this.msj
    this.msj = ''
    this.hidden = true
    this.xAPI.funcion = 'ChatBot'
    this.xAPI.parametros = this.msjAux
    this.apiService.Ejecutar(this.xAPI).
      subscribe(
        (data: any) => {
          if (data.Cuerpo.length > 0) {
            data.Cuerpo.forEach((e: any) => {
              e.preg = this.msjAux
              this.client.push(e)
            });
          } else {
            this.client.push({ resp: 'No poseo la respuesta en este momento, por favor intente mas tarde!', preg: this.msjAux })
          }
          this.hidden = false
        },
        error => {
          console.log(error);
        }
      )
  }

}
