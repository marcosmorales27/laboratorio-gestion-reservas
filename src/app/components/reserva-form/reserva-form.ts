import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../services/reserva';

@Component({
  selector: 'app-reserva-form',
  standalone:true,
  imports:[
    CommonModule,
    FormsModule
  ],
  templateUrl:'./reserva-form.html',
  styleUrl:'./reserva-form.css'
})

export class ReservaFormComponent {
  @Input() espacio:any;
  responsable='';
  fecha='';
  hora='';
  carrera='';
  constructor(
    private reservaService:ReservaService
  ){}
  guardar(){
    if(
      this.responsable.length < 3
    ){
      alert(
        'Responsable inválido'
      );
      return;
    }

    if(
      this.fecha == ''
    ){
      alert(
        'Ingrese fecha'
      );
      return;
    }

    if(
      this.hora == ''
    ){
      alert(
        'Ingrese hora'
      );
      return;
    }

    const reserva = {
      espacio:this.espacio,
      responsable:this.responsable,
      fecha:this.fecha,
      hora:this.hora,
      carrera:this.carrera
    };

    this.reservaService
    .registrarReserva(reserva);
    alert('Reserva guardada');
  }

  limpiar(){
    this.responsable='';
    this.fecha='';
    this.hora='';
    this.carrera='';
  }
}