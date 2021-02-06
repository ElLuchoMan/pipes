import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Ironman', vuela: true, color: Color.rojo },
    { nombre: 'Capitán América', vuela: false, color: Color.azul },
    { nombre: 'Spiderman', vuela: false, color: Color.rojo },
    { nombre: 'Scarlet Witch', vuela: true, color: Color.rojo }];
  enMayusculas: boolean = true;
  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }
}
