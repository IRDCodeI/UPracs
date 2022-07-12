import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  informacion(deducible: string){
    alert('Esta es informacion adicional sobre ' + deducible)
  }

  borrarDeducible(deducible: string) {
    for (let i = 0; i < this.deducibles.length; i++){
      if(deducible == this.deducibles[i]){
        this.deducibles.splice(i, 1);
      }
    }
  }

  deducibles = ['Vivienda', 'Educacion', 'Alimentacion', 'Vestimenta', 'Turismo', 'Salud'];
}
