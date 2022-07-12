import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  cant: number = 0;
  cont: number = 0;
  ruc: number = 0;
  typeG: string = '';
  totalG: number = 0;

  private gasto:Array<any> = new Array();

  items: any[] = [
    { id: 'Vivienda', name: 'Vivienda'},
    { id: 'Educacion', name: 'Educacion'},
    { id: 'Alimentacion', name: 'Alimentacion'},
    { id: 'Vestimenta', name: 'Vestimenta'},
    { id: 'Turismo', name: 'Turismo'},
    { id: 'Salud', name: 'Salud'}
  ]

  constructor() { }

  ngOnInit(): void {}

  getGasto(){
    this.gasto.push({
      'ruc': this.ruc,
      'cant': this.cant,
      'typeGasto': this.typeG
     })

   /*for(let g of this.gasto){
      console.log(g);
    }*/
  }

  add(){

    this.getGasto();
    this.cont ++;

    let row = document.createElement('tr');
    row.className=`tr-${this.cont}`
    row.innerHTML = `
      <th>${this.typeG}</th>
      <th>${this.cant}</th>
    `;
    document.querySelector(".tableGasto")?.appendChild(row);
  
  }

  calcular(){
      let cant = 0, total = 0;
      for(let i = 0; i < this.gasto.length; i++){
      cant = parseInt((Object.values(this.gasto[i].cant).join('') as unknown as string));
      total += cant;
      }
      this.totalG = total;
      localStorage.setItem('total', JSON.stringify(this.totalG));
  }
}
