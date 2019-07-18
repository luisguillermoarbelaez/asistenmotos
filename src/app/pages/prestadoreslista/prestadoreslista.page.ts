import { Component, OnInit } from '@angular/core';
import { PrestadorService } from 'src/app/services/prestador.service';
import { Prestador } from 'src/app/interfaces/prestador.interface';

@Component({
  selector: 'app-prestadoreslista',
  templateUrl: './prestadoreslista.page.html',
  styleUrls: ['./prestadoreslista.page.scss'],
})
export class PrestadoreslistaPage implements OnInit {
  prestadores: Prestador[];
 
  constructor(private prestadorService: PrestadorService) { }

  

  ngOnInit() {
 
  this.prestadorService.getPrestadores().subscribe(res => {
      console.log('Prestadores', res);
      this.prestadores= res;
      console.log(this.prestadores);
    })
  }
}
