import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moto } from '../interfaces/moto.interface';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private motosCollection: AngularFirestoreCollection<Moto>;
  private motos: Observable<Moto[]>;

  constructor(public db: AngularFirestore) {
    this.motosCollection = this.db.collection<Moto>('motos');

    this.motos = this.motosCollection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;

            return {id, ...data };
          });
        }
      )
    );
  }

  getMotos() {
    return this.motos;
  }

  getMoto(id: string) {
    return this.motosCollection.doc<Moto>(id).valueChanges();
  }

  addMoto(moto: Moto) {
    return this.motosCollection.add(moto);
  }

  updateMoto(moto: Moto, id: string) {
    return this.motosCollection.doc(id).update(moto);
  }

  removeMoto(id) {
    return this.motosCollection.doc(id).delete();
  }

/*
  createUser(value, avatar) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age, 10),
      avatar: avatar
    });
  }
  */
}
