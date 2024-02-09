import { Component , EventEmitter, Output} from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  displayedColumns: string[] = ['id', 'nombre', 'carrera', 'categoria', 'nivel', 'dedicacion', 'precioDeLista', 'descuento', 
                                'precioFinal', 'detalles', 'rangoDeFechas', 'dias', 'horario', 'profesor'];

  dataSource: Course[] = [
    {
      id: new Date().getTime(),
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
      id: new Date().getTime(),
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
      id: new Date().getTime(),
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


  @Output() 
  userSubmitted = new EventEmitter();

  onUserSubmitted(ev: Course): void {
    //this.dataSource.push(ev); //no anda porque angular material necesita que se recree el array
    this.dataSource = [...this.dataSource,  {...ev, id: new Date().getTime()}];
  }
}
