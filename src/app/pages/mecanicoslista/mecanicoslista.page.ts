import { Component, OnInit } from '@angular/core';
import { Mecanico } from 'src/app/interfaces/mecanico.interface';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-mecanicoslista',
  templateUrl: './mecanicoslista.page.html',
  styleUrls: ['./mecanicoslista.page.scss'],
})
export class MecanicoslistaPage implements OnInit {

  mecanicos: Mecanico[];

  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit() {
    this.mecanicoService.getMecanicos().subscribe(res => {
      console.log ('Mecanicos', res);
      this.mecanicos= res;
      console.log(this.mecanicos);
    }
      )
  }

}
