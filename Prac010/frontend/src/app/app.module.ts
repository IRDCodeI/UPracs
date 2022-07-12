import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { GastoService } from './services/gasto.service';
@NgModule({
  declarations: [
    AppComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //FormControl
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
