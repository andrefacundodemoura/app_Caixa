import { Component } from '@angular/core';
import{Plugins} from '@capacitor/core'

const {Storage} = Plugins
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public  value : number;

  constructor() {}

  async alerta(serviço){
    await this.create(serviço)
    alert(`O valor de R$${this.value.toFixed(2)} foi adicionado como ${serviço}`)
    this.value = 0
  }

  async create(serviço){
    const data = new Date

    const movimento = JSON.stringify([
      {valor: this.value.toFixed(2),
       servico: serviço,
       dia: data.getDate(),
       mes: data.getMonth()+1  ,
       ano: data.getFullYear()
      }
    ])
    await Storage.set({
      key: "evento",
      value: movimento
    })
    const evento = await Storage.get({key:"evento"})
    alert(evento.value)
  }
  

}

