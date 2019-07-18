import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarioslista',
  templateUrl: './usuarioslista.page.html',
  styleUrls: ['./usuarioslista.page.scss'],
})
export class UsuarioslistaPage implements OnInit {
  usuarios : Usuario [];
  

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarios().subscribe (res =>{
      console.log ('Usuario',res);
      this.usuarios=res;
      console.log(this.usuarios);
    }

    )
  }

}
