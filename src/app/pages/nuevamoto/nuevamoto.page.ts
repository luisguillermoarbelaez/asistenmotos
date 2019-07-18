import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/interfaces/moto.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-nuevamoto',
  templateUrl: './nuevamoto.page.html',
  styleUrls: ['./nuevamoto.page.scss'],
})
export class NuevamotoPage implements OnInit {

  moto:Moto={
    placa:'',
    fechaaceite: new Date (),
    kmaceite: null
  };

  motos: Moto[];
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getMotos().subscribe(res => {
      console.log('Motos', res);
      this.motos= res;
    })
  }
  guardar(){

    this.firebaseService.addMoto(this.moto);
    alert('Guardando la Moto' + this.moto.placa
    ) ;
    console.log (this.moto)
  }

}
