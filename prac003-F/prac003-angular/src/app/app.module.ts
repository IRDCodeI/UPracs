import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './galery/galery.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReportComponent } from './report/report.component';
import { DataService } from './data.service';

const rutas:Routes = [
  {path:'informacion', component:GaleryComponent},
  {path:'registro', component:FormularioComponent},
  {path:'report', component:ReportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GaleryComponent,
    FormularioComponent,
    ReportComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})


export class AppModule {}
