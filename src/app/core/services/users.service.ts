import { Inject, Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models/user';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [
    {
      id: new Date().getTime() +1 ,
      userName: 'cremita',
      firstName: 'Pepe',
      lastName: 'Cuenca',
      email: 'pepe.cuenca@gmail.com',
      password: 'bombazo',
      role: 'ADMIN'     
    },  
    {
      id: new Date().getTime() +2 ,
      userName: 'chucky',
      firstName: 'Vassily',
      lastName: 'Ivanchuk',
      email: 'vassily.ivanchuk@gmail.com',
      password: 'marzo',
      role: 'ADMIN'    
    },
    {
      id: new Date().getTime() +3,
      userName: 'flancito',
      firstName: 'Marcelo',
      lastName: 'Laje',
      email: 'marcelo.laje@gmail.com',
      password: 'flancito',
      role: 'USER'    
    }   
  ];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private alerts: AlertsService) {}
  
  getUserById(idUser: number | string): Observable<User | undefined> {
    return of(USERS_DB.find((user) => user.id == idUser)).pipe(delay(500));
  }


  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(3000));
  }

  getUsers() {
    return of(USERS_DB).pipe(delay(1000));
  }

  createUser(payload: User) {
    // en la vida real, llamar al backend
    USERS_DB.push(payload);
    return this.getUsers();
      
  }

  deleteUser(userID: number) {
    USERS_DB = USERS_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(tap(() => this.alerts.showSuccess('Realizado', 'Se eliminó correctamente')) ) ;
  }
		
}
