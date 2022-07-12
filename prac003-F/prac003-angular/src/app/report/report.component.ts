import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { user } from '../user';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  impuesto = this.setImpuesto();
  impuestoFraccionBasica:number = 0;
  porcentajeExcendete:number = 0;
  excedente:number = 0;
  baseImponible = 0;
  ingresos = 0;
  gastos = 0;

  users: user[] = [];

  constructor(private dataService: DataService) {
    this.dataService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.users = data;
    })
   }

  ngOnInit(): void {  }

  get(){
    let values =  localStorage.getItem('total');
    if(values == null){
      return 0;
    }else {
      return parseInt(values);
    }
  }

  setImpuesto(){
    this.gastos = this.get();
    this.baseImponible = this.ingresos - this.gastos;
    return this.getImpuesto(this.baseImponible);
  }

  getImpuesto(baseImponible:number) {
      
  if(baseImponible > 0 && baseImponible <= 11212)
  {
      this.impuestoFraccionBasica = 0;
      this.excedente = baseImponible - 0;
      this.porcentajeExcendete = this.excedente * 0;
  }else if(baseImponible > 11212 && baseImponible <= 14285)
  {
      this.impuestoFraccionBasica = 0;
      this.excedente = baseImponible - 11212;
      this.porcentajeExcendete = this.excedente * 0.05;
  }else if(baseImponible > 14285 && baseImponible <= 17854)
  {
      this.impuestoFraccionBasica = 154;
      this.excedente = baseImponible - 14854;
      this.porcentajeExcendete = this.excedente * 0.10;
  }else if(baseImponible > 17854 && baseImponible <= 21442)
  {
      this.impuestoFraccionBasica = 511;
      this.excedente = baseImponible - 17854;
      this.porcentajeExcendete = this.excedente * 0.12;
  }else if(baseImponible > 21442 && baseImponible <= 42874)
  {
      this.impuestoFraccionBasica = 941;
      this.excedente = baseImponible - 21442;
      this.porcentajeExcendete = this.excedente * 0.15;
  }else if(baseImponible > 42874 && baseImponible <= 64297)
  {
      this.impuestoFraccionBasica = 4156;
      this.excedente = baseImponible - 42874;
      this.porcentajeExcendete = this.excedente * 0.20;
  }else if(baseImponible > 64297 && baseImponible <= 85729)
  {
      this.impuestoFraccionBasica = 8440;
      this.excedente = baseImponible - 64297;
      this.porcentajeExcendete = this.excedente * 0.25;
  }else if(baseImponible > 85729 && baseImponible <= 114288)
  {
      this.impuestoFraccionBasica = 13798;
      this.excedente = baseImponible - 85729;
      this.porcentajeExcendete = this.excedente * 0.30;

  }else if(baseImponible > 114288){
      this.impuestoFraccionBasica = 22366;
      this.excedente = baseImponible - 114288;
      this.porcentajeExcendete = this.excedente * 0.35;
  }

  return this.impuestoFraccionBasica + this.porcentajeExcendete;
    }
}
