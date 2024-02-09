import { Component , EventEmitter, Output} from '@angular/core';
import { User } from './models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  displayedColumns: string[] = ['id', 'fullName', 'userName', 'email', 'password', 'rol'];

  dataSource: User[] = [
    {
      id: new Date().getTime(),
      userName: 'cremita',
      firstName: 'Pepe',
      lastName: 'Cuenca',
      email: 'pepe.cuenca@gmail.com',
      password: 'bombazo',
      role: 'ADMIN'     
    },  
    {
      id: new Date().getTime(),
      userName: 'chucky',
      firstName: 'Vassily',
      lastName: 'Ivanchuk',
      email: 'vassily.ivanchuk@gmail.com',
      password: 'marzo',
      role: 'ADMIN'    
    },
    {
      id: new Date().getTime(),
      userName: 'flancito',
      firstName: 'Marcelo',
      lastName: 'Laje',
      email: 'marcelo.laje@gmail.com',
      password: 'flancito',
      role: 'USER'    
    }   
  ];


  onUserSubmitted(ev: User): void {
    //this.dataSource.push(ev); //no anda porque angular material necesita que se recree el array
    this.dataSource = [...this.dataSource,  {...ev, id: new Date().getTime()}];
  }

}

