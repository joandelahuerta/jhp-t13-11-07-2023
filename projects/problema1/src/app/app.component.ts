import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema1';
  
    nombre= '';
    cif= '';
    direccion= '';
    grupo= '';
    cliente:any= [];
  
    addCliente(){
      this.cliente.push({
        nombre:this.nombre,
        cif:this.cif,
        direccion:this.direccion,
        grupo:this.grupo
      });
    }
}
