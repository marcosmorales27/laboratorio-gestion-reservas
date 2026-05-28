import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-espacio-card',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './espacio-card.html',

  styleUrl: './espacio-card.css'
})

export class EspacioCardComponent {

  @Input() espacio:any;

  @Output() seleccionarEspacio =
    new EventEmitter<any>();

  seleccionar(){

    this.seleccionarEspacio.emit(this.espacio);

  }

}