import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { EspacioCardComponent } from '../espacio-card/espacio-card';

import { ReservaFormComponent } from '../reserva-form/reserva-form';

@Component({
  selector: 'app-lista-espacios',

  standalone: true,

  imports: [
    CommonModule,
    EspacioCardComponent,
    ReservaFormComponent
  ],

  templateUrl: './lista-espacios.html',

  styleUrl: './lista-espacios.css'
})

export class ListaEspaciosComponent {

  espacios = [

  {
    id:1,
    nombre:'Laboratorio 1',
    tipo:'Laboratorio',
    capacidad:20,
    disponible:true,
    ubicacion:'Bloque A',
    imagen:'https://cdn.pixabay.com/photo/2014/06/25/13/32/class-377117_1280.jpg'
  },

  {
    id:2,
    nombre:'Laboratorio 2',
    tipo:'Laboratorio',
    capacidad:25,
    disponible:false,
    ubicacion:'Bloque E',
    imagen:'https://media.istockphoto.com/id/1600739251/photo/tablet-planning-and-scientist-with-digital-innovation-data-and-reading-in-laboratory-asian.jpg?s=1024x1024&w=is&k=20&c=FetEg8_LY7CgqTT8d09vNfpg6LYX7GDHMo15TxlgHu4='
  },

  {
    id:3,
    nombre:'Laboratorio 3',
    tipo:'Laboratorio',
    capacidad:30,
    disponible:true,
    ubicacion:'Bloque B',
    imagen:'https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg'
  }

];

get espaciosDisponibles(){

  return this.espacios.filter(
    e => e.disponible
  ).length;

}

  espacioSeleccionado:any;

  recibirEspacio(espacio:any){

    this.espacioSeleccionado = espacio;

  }

}