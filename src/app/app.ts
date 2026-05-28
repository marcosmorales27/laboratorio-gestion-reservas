import { Component } from '@angular/core';

import { ListaEspaciosComponent } from './components/lista-espacios/lista-espacios';

import { ResumenReservaComponent } from './components/resumen-reserva/resumen-reserva';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    ListaEspaciosComponent,
    ResumenReservaComponent
  ],

  templateUrl: './app.html',

  styleUrl: './app.css'
})

export class App {

}