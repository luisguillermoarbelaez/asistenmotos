import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario.interface';





@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioCollection: AngularFirestoreCollection<Usuario>;
  private usuarios: Observable<Usuario[]>;

  constructor(public db: AngularFirestore) {
    this.usuarioCollection = this.db.collection<Usuario>('usuarios');

    this.usuarios = this.usuarioCollection.snapshotChanges().pipe(map(
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

  getUsuarios() {
    return this.usuarios;
  }

  getUsuario(id: string) {
    return this.usuarioCollection.doc<Usuario>(id).valueChanges();
  }

  addUsuario(usuario: Usuario) {
    return this.usuarioCollection.add(usuario);
  }

  updateUsuario(usuario: Usuario, id: string) {
    return this.usuarioCollection.doc(id).update(usuario);
  }

  removeUsuario(id) {
    return this.usuarioCollection.doc(id).delete();
  }

}