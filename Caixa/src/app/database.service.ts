import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

  async create(){
    const data = new Date
    this.sqlite.create({
      name:'evento.db',
      location:'default'
    })
    .then((db: SQLiteObject)=> {
      db.executeSql('CREATE TABLE IF NOT EXISTS evento( id INT AUTO_INCREMENT PRIMARY KEY, service text, value REAL, day INTEGER, month INTEGER, year INTEGER)',[])
        .then(()=> alert('DB criado'))
        .catch(e => alert(e))
    })
    .catch(e => alert(e +"deu ruim"))
  }
}
