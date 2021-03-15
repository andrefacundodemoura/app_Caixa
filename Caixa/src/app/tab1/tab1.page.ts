import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public  value : number ;

  constructor() {}

  alerta(serviço){
    alert(`O valor de R$${this.value.toFixed(2)} foi adicionado como ${serviço}`)
    this.value = 0
  }

}
