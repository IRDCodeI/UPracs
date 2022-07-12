import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';
import { Gasto } from 'src/app/models/gasto';
import { FormControl, NgForm } from '@angular/forms';

import * as M from 'materialize-css';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gasto = new Gasto();
  obj = {
    tipo: '',
    empresa: '',
    ruc: '',
    monto: 0
  }
  constructor(protected gastosServices: GastoService) {}

  ngOnInit(): void {
    this.getGastos();
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.gastosServices.selectedGasto = new Gasto();
    }
  }

  addGasto(form:NgForm){
    this.gastosServices.postGastos(form.value).subscribe( res => {

      this.resetForm(form);
      M.toast({html:'Gasto Guardado'})
    });
  }

  getGastos(){
    this.gastosServices.getGastos().subscribe( res => {
      this.gastosServices.gastos = res as Gasto[];
      console.log(res);
    });
  }

  editGasto(_id: string, form:NgForm){
    this.gastosServices.putGasto(form.value, _id).subscribe ( res => {
      this.resetForm(form);
      M.toast({html: 'Gasto Actualizado'})
    });
  }

  deleteGasto(_id: string){
     if(confirm('Eliminar Gasto?')){
      this.gastosServices.deleteGasto(_id).subscribe( res => {
        console.log('Eliminado');
      });
    }
  }
}
