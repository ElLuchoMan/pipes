import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
nombreLower:string = 'bryan';
nombreUpper:string="BRYAN";
nombreCompleto:string="BrYaN AlEjAnDrO LuIs ToRrEs";
fecha: Date = new Date();
}
