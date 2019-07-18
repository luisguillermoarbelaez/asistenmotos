import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mecanico } from '../interfaces/mecanico.interface';





@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private mecanicoCollection: AngularFirestoreCollection<Mecanico>;
  private mecanicos: Observable<Mecanico[]>;

  constructor(public db: AngularFirestore) {
    this.mecanicoCollection = this.db.collection<Mecanico>('mecanicos');

    this.mecanicos = this.mecanicoCollection.snapshotChanges().pipe(map(
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

  getMecanicos() {
    return this.mecanicos;
  }

  getMecanico(id: string) {
    return this.mecanicoCollection.doc<Mecanico>(id).valueChanges();
  }

  addMecanico(mecanico: Mecanico) {
    return this.mecanicoCollection.add(mecanico);
  }

  updateMecanico(mecanico: Mecanico, id: string) {
    return this.mecanicoCollection.doc(id).update(mecanico);
  }

  removeMecanico(id) {
    return this.mecanicoCollection.doc(id).delete();
  }

}