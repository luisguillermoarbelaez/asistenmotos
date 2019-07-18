import { Component, OnInit } from '@angular/core';
import { Taller } from 'src/app/interfaces/taller.interface';
import { TallerService } from 'src/app/services/taller.service';

@Component({
  selector: 'app-talleredit',
  templateUrl: './talleredit.page.html',
  styleUrls: ['./talleredit.page.scss'],
})
export class TallereditPage implements OnInit {

  taller:Taller={
    nombre:'',
    descripcion:'',
    horario:'',
    direccion:'',
    telefono:'',
    movil:'',
    latitud:null,
    longitud:null, 
    marcas:[] 
  }
  
  constructor(private tallerService: TallerService) {}

  ngOnInit() {
  }
  guardar(){
    this.tallerService.addTaller(this.taller);
    alert('guardado el taller'+ this.taller.nombre);
    console.log(this.taller.nombre)
  }

}
