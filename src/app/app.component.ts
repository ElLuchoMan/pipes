import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nombre:string= 'bryan alejandro luis torres';
valor:number=1250;
obj={
  primerNombre: 'Bryan',
  segundoNombre:'Alejandro',
  primerApellido:'Luis',
  segundoApellido:'Torres',
}

mostrarNombre(){
  console.log(this.nombre);
  console.log(this.valor);
  console.log(this.obj);
}

}
