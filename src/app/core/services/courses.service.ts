import { Inject, Injectable } from '@angular/core';
import { Course } from '../../layouts/dashboard/pages/courses/models/course';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let COURSES_DB: Course[] = [
  {
    id: new Date().getTime()+1,
    nombre: 'Angular',
    carrera: 'Programación y Desarrollo',
    categoria: 'Programación y Desarrollo',
    nivel: 'Avanzado',
    dedicacion: 'Moderada',
    precioDeLista: 90000,
    descuento: 20,
    precioFinal: 74000,
    detalles: 'Se requieren conocimientos de HTML, CSS y Javascript',
    rangoDeFechas: 'Del 08/09 al 02/11',
    dias: 'Lunes y Miercoles',
    horario: '20 hs a 22 hs',
    profesor: 'Josué Baez'
  },
  {
    id: new Date().getTime()+2,
    nombre: 'Power BI Avanzado',
    carrera: 'Data',
    categoria: 'Data',
    nivel: 'Avanzado',
    dedicacion: 'Moderada',
    precioDeLista: 80000,
    descuento: 15,
    precioFinal: 68000,
    detalles: 'Se requieren conocimientos de SQL',
    rangoDeFechas: 'Del 01/03 al 03/05',
    dias: 'Martes y Viernes',
    horario: '19 a 21 hs',
    profesor: 'José Datiten'
  },
  {
    id: new Date().getTime()+3,
    nombre: 'Magia',
    carrera: 'Producto',
    categoria: 'Data',
    nivel: 'Negocios',
    dedicacion: 'Alta',
    precioDeLista: 100000,
    descuento: 20,
    precioFinal: 80000,
    detalles: 'No Se requieren conocimientos previos',
    rangoDeFechas: 'Del 02/02 al 05/05',
    dias: 'Lunes y Jueves',
    horario: '20:30 a 22:30 hs',
    profesor: 'Sofía Loren'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private alerts: AlertsService) {}
  
  getCourseById(idCourse: number | string): Observable<Course | undefined> {
    return of(COURSES_DB.find((course) => course.id == idCourse)).pipe(delay(500));
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(3000));
  }

  getCourses() {
    return of(COURSES_DB).pipe(delay(1000));
  }

  createCourse(payload: Course) {
    // en la vida real, llamar al backend
    COURSES_DB.push(payload);
    return this.getCourses();      
  }

  deleteCourse(courseID: number) {
    COURSES_DB = COURSES_DB.filter((course) => course.id !== courseID);
    return this.getCourses().pipe(tap(() => this.alerts.showSuccess('Realizado', 'Se eliminó correctamente')) ) ;
  }
		
}
