import { Component } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {
  mensajes: string[] = [];

  mostrarMsj(mensaje: string) {
    this.mensajes.push(mensaje);
  }
}
