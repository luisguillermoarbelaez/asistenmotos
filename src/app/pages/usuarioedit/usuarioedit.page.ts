import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarioedit',
  templateUrl: './usuarioedit.page.html',
  styleUrls: ['./usuarioedit.page.scss'],
})
export class UsuarioeditPage implements OnInit {

  usuario:Usuario={
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

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  guardar(){

    this.usuarioService.addUsuario(this.usuario);
    alert('guardado el usuario'+ this.usuario.nombre);
    console.log(this.usuario.nombre)

  }



}
