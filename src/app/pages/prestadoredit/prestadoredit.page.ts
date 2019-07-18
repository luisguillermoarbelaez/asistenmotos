import { Component, OnInit } from '@angular/core';
import { Prestador } from 'src/app/interfaces/prestador.interface';
import { PrestadorService } from 'src/app/services/prestador.service';

@Component({
  selector: 'app-prestadoredit',
  templateUrl: './prestadoredit.page.html',
  styleUrls: ['./prestadoredit.page.scss'],
})
export class PrestadoreditPage implements OnInit {

  prestador:Prestador={
    descripcion:'',
    horario:'',
    nombre:'',
    direccion:'',
    telefono:'',
    movil:'',
    latitud:null,
    longitud:null, 
    marcas:[] 

  }

  constructor(private prestadorService: PrestadorService) { }

  ngOnInit() {
    
  }

  guardar(){
    this.prestadorService.addPrestador(this.prestador);
    alert('guardado el prestador' + this.prestador.nombre);
    console.log(this.prestador.nombre) 
  }
}
