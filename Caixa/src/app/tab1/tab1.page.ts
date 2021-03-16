import { Component } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import {DatabaseService} from '../database.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public  value : number;

  constructor(private dbProvider: DatabaseService) {}

  async alerta(serviço){
    await this.dbProvider.create()
    alert(`O valor de R$${this.value.toFixed(2)} foi adicionado como ${serviço}`)
    this.value = 0
  }

}

