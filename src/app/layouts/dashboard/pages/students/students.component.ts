import { Component , EventEmitter, Output} from '@angular/core';
import { Student } from './models';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  displayedColumns: string[] = ['id', 'fullName', 'dni', 'birthDate', 'edad', 'email', 'phone', 'gender', 'address', 
  'residenceCountry', 'bornCountry', 'works', 'companyIndustry', 'jobDescription'];




  dataSource: Student[] = [
      {
        id: new Date().getTime(),
        firstName: 'Marcelo',
        lastName: 'Laje',
        dni: 222222222,
        birthDate:  new Date(1973, 2, 18),
        email: 'cualquier.mail@gmail.com',
        phone: '54 911 3683-5510',
        gender: 'Masculino',
        address: 'Bragado 4111',
        residenceCountry: 'Argentina',
        bornCountry: 'Argentina',
        works: true,
        companyIndustry: 'Sistemas',
        jobDescription: 'Analista'
      },  
      {
        id: new Date().getTime(),
        firstName: 'Valentina',
        lastName: 'Laje',
        dni: 44444444,
        birthDate:  new Date(2013, 6, 27),
        email: 'otro.mail@gmail.com',
        phone: '54 911 3683-5510',
        gender: 'Femenino',
        address: 'Bragado 4999',
        residenceCountry: 'Argentina',
        bornCountry: 'Argentina',
        works: false,
        companyIndustry: '',
        jobDescription: ''
      } , 
      {
        id: new Date().getTime(),
        firstName: 'Liliana',
        lastName: 'Ibarra',
        dni: 933333333,
        birthDate:  new Date(1975, 6, 20),
        email: 'lili.mail@gmail.com',
        phone: '54 911 3683-5510',
        gender: 'Femenino',
        address: 'Bragado 4666',
        residenceCountry: 'Argentina',
        bornCountry: 'Paraguay',
        works: true,
        companyIndustry: 'Shimpumpam',
        jobDescription: 'Socio'
      }  
  ];

  @Output() 
  userSubmitted = new EventEmitter();

  onUserSubmitted(ev: Student): void {
    //this.dataSource.push(ev); //no anda porque angular material necesita que se recree el array
    this.dataSource = [...this.dataSource,  {...ev, id: new Date().getTime()}];
  }
}
