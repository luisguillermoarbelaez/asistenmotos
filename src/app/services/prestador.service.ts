import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestador } from '../interfaces/prestador.interface';




@Injectable({
  providedIn: 'root'
})
export class PrestadorService {
  private prestadorCollection: AngularFirestoreCollection<Prestador>;
  private prestadores: Observable<Prestador[]>;

  constructor(public db: AngularFirestore) {
    this.prestadorCollection = this.db.collection<Prestador>('prestadores');

    this.prestadores = this.prestadorCollection.snapshotChanges().pipe(map(
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

  getPrestadores() {
    return this.prestadores;
  }

  getPrestador(id: string) {
    return this.prestadorCollection.doc<Prestador>(id).valueChanges();
  }

  addPrestador(prestador: Prestador) {
    return this.prestadorCollection.add(prestador);
  }

  updatePrestador(prestador: Prestador, id: string) {
    return this.prestadorCollection.doc(id).update(prestador);
  }

  removePrestador(id) {
    return this.prestadorCollection.doc(id).delete();
  }

}