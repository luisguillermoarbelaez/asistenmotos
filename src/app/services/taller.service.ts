import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taller } from '../interfaces/taller.interface';




@Injectable({
  providedIn: 'root'
})
export class TallerService {
  private tallerCollection: AngularFirestoreCollection<Taller>;
  private talleres: Observable<Taller[]>;

  constructor(public db: AngularFirestore) {
    this.tallerCollection = this.db.collection<Taller>('talleres');

    this.talleres = this.tallerCollection.snapshotChanges().pipe(map(
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

  getTalleres() {
    return this.talleres;
  }

  getTaller(id: string) {
    return this.tallerCollection.doc<Taller>(id).valueChanges();
  }

  addTaller(taller: Taller) {
    return this.tallerCollection.add(taller);
  }

  updateTaller(taller: Taller, id: string) {
    return this.tallerCollection.doc(id).update(taller);
  }

  removeTaller(id) {
    return this.tallerCollection.doc(id).delete();
  }

}