import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpcliente: HttpClient) { 
    console.log('Servicio Http Funcionando');
  }

  obtenerDatos(){
    return this.httpcliente.get<user[]>('https:jsonplaceholder.typicode.com/users');
  }
}
