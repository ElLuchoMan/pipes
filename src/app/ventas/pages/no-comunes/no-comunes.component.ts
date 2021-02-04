import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})

export class NoComunesComponent {
  //i18nSelect
  nombre: string = "Susana";
  genero: string = "femenino";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  clientes: string[] = ['Maria', 'Armando', 'Edwin', 'Bryan']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarCliente() {
    this.nombre = 'Bryan',
      this.genero = 'masculino'
  }
  borrarCliente() {
    this.clientes.shift();
  }
  //KeyValue Pipe
  persona={
    nombre:'Bryan',
    edad: 24,
    direccion: 'Bogotá'
  }
  //JSon Pipe
  heroes=[
    {nombre: 'Capitan América', equipo: 'Los vengadores'},
    {nombre: 'Iron Man', equipo: 'Los vengadores'},
    {nombre: 'Batman', equipo: 'La liga de la Justicia'},
    {nombre: 'Super Man', equipo: 'La liga de la Justicia'},
  ]
  //Async pipe
myObservable = interval(1500); 
valorPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Información Cargada');
  },3500);
}) 

}

