import { Component, OnInit } from '@angular/core';
import { Mecanico } from 'src/app/interfaces/mecanico.interface';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.page.html',
  styleUrls: ['./mecanico.page.scss'],
})
export class MecanicoPage implements OnInit {

  mecanico:Mecanico={
    nombre:'',
    apellido:'',
    sexo:'',
    edad:'',
    direccion:'',
    telefono:'',
    movil:'',
    latitud:null,
    longitud:null, 
    marcas:[] 
  }

  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit() {
  }

  guardar(){
 
    this.mecanicoService.addMecanico(this.mecanico);
    alert('guardado el mecanico'+ this.mecanico.nombre);
    console.log(this.mecanico.nombre)
}

}
