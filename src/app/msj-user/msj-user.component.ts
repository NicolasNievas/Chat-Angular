import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-msj-user',
  templateUrl: './msj-user.component.html',
  styleUrls: ['./msj-user.component.css']
})
export class MsjUserComponent {
  txtChatPepe:string
  txtChatMaria:string
  @Output() mensaje1 = new EventEmitter<string>();
  @Output() mensaje2 = new EventEmitter<string>();
  
  constructor() {
    this.txtChatPepe = ''
    this.txtChatMaria = ''
   }
  
   SaveMsjPepe() {
    this.mensaje1.emit(`Pepe: ${this.txtChatPepe}`);
    this.txtChatPepe = '';
  }
  
  SaveMsjMaria() {
    this.mensaje2.emit(`Maria: ${this.txtChatMaria}`);
    this.txtChatMaria = '';
  }
}
