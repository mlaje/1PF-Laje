import { Inject, Injectable } from '@angular/core';
import { Student } from '../../layouts/dashboard/pages/students/models/index';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let STUDENTS_DB: Student[] = [
{
  id: new Date().getTime()+1,
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
  id: new Date().getTime()+2,
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
  id: new Date().getTime()+3,
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

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private alerts: AlertsService) {}
  
  getStudentById(idStudent: number | string): Observable<Student | undefined> {
    return of(STUDENTS_DB.find((student) => student.id == idStudent)).pipe(delay(500));
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(3000));
  }

  getStudents() {
    return of(STUDENTS_DB).pipe(delay(1000));
  }

  createStudent(payload: Student) {
    // en la vida real, llamar al backend
    STUDENTS_DB.push(payload);
    return this.getStudents();
      
  }

  deleteStudent(studentID: number) {
    STUDENTS_DB = STUDENTS_DB.filter((student) => student.id !== studentID);
    return this.getStudents().pipe(tap(() => this.alerts.showSuccess('Realizado', 'Se eliminó correctamente')) ) ;
  }
		
}
