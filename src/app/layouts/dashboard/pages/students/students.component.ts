import { Component } from '@angular/core';
import { Student } from './models';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  // para seleccionar pais de origen y de residencia  
  countries: string[] = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Paraguay', 'Uruguay', 'Otro'];

  
  // Rubro del trabajo
  companyIndustries: string[] = ['Agencia de Publicidad', 'Agricultura', 'Alimentación y Bebidas', 'Arquitectura', 'Arte y Diseño', 'Asesoramiento Financiero', 'Biotecnología', 'Blockchain', 'Comercio Electrónico', 'Construcción', 'Consultoría', 'Contabilidad', 'Desarrollo de Aplicaciones Móviles', 'Desarrollo Web', 'Educación', 'Energía Renovable', 'Entretenimiento', 'Energía y Recursos Naturales', 'Farmacéutica', 'Fotografía', 'Gestión de Proyectos', 'Gobierno', 'Industria Automotriz', 'Industria del Acero', 'Industria del Agua', 'Industria del Carbón', 'Industria del Cemento', 'Industria del Cobre', 'Industria del Deporte', 'Industria del Oro', 'Industria del Papel', 'Industria del Plástico', 'Industria del Vidrio', 'Industria Farmacéutica', 'Ingeniería', 'Ingeniería Ambiental', 'Ingeniería Civil', 'Ingeniería de Software', 'Investigación', 'Juegos', 'Logística', 'Manufactura', 'Marketing', 'Mantenimiento de Edificios', 'Medios de Comunicación', 'Metalurgia', 'Moda', 'Organización de Eventos', 'Papelería y Impresión', 'Psicología', 'Publicidad', 'Publicidad Exterior', 'Realidad Aumentada', 'Realidad Virtual', 'Reciclaje', 'Recursos Humanos', 'Relaciones Públicas', 'Robótica', 'Salud', 'Seguridad', 'Servicios Financieros', 'Servicios Legales', 'Servicios de Animación', 'Servicios de Audiovisual', 'Servicios de Catering', 'Servicios de Coaching', 'Servicios de Data Science', 'Servicios de Impresión 3D', 'Servicios de Investigación Clínica', 'Servicios de Investigación de Mercado', 'Servicios de Limpieza', 'Servicios de Mantenimiento', 'Servicios de Organización de Eventos', 'Servicios de Relaciones Públicas', 'Telecomunicaciones', 'Textil', 'Traducción', 'Transporte', 'Turismo', 'Vivienda', 'Y Tecnología de la Información'];

  // Puesto Laboral
  jobDescriptions: string[] = ['Analista', 'Asistente', 'Asociado', 'Coordinador', 'Director', 'Director Ejecutivo (CEO)', 'Empleado de Nivel Básico', 'Especialista', 'Gerente', 'Jefe de Equipo', 'Presidente', 'Socio', 'Supervisor'];

  // Genero
  genders: string[] = ['Masculino', 'Femenino', 'Otro']; 
 
  // Trabaja actualmente
  //working: string[] = ['Yes', 'No', 'Unknown']; 
  
  displayedColumns: string[] = ['id', 'fullName', 'dni', 'birthDate', 'edad', 'email', 'phone', 'gender', 'address', 'residenceCountry', 'bornCountry'];
  //,'working','companyName','companyIndustry','jobDescription'];

  dataSource: Student[] = [
      {
        id: new Date().getTime(),
        firstName: 'Marcelo',
        lastName: 'Laje',
        dni: 222222222,
        birthDate:  new Date(1973, 2, 18),
        email: 'marcelo.laje@gmail.com',
        phone: '54 911 3683-5510',
        gender: 'Masculino',
        address: 'Bragado 4655',
        residenceCountry: 'Argentina',
        bornCountry: 'Argentina'
        //working: true,
        //companyName: 'SkyCop',
        //companyIndustry: 'Security',
        //jobDescription: 'Analista'
      },  
      {
        id: new Date().getTime(),
        firstName: 'Valentina',
        lastName: 'Laje',
        dni: 44444444,
        birthDate:  new Date(2013, 6, 27),
        email: 'valentina.laje@gmail.com',
        phone: '54 911 3683-5510',
        gender: 'Femenino',
        address: 'Bragado 4671',
        residenceCountry: 'Argentina',
        bornCountry: 'Argentina'
        
        //working: false,
        //companyName: '',
        //companyIndustry: '',
        //jobDescription: ''
      } , 
      {
        id: new Date().getTime(),
        firstName: 'Liliana',
        lastName: 'Ibarra',
        dni: 933333333,
        birthDate:  new Date(1975, 6, 20),
        email: 'liluibarra@gmail.com',
        phone: '54 911 3683-5510',
        gender: 'Femenino',
        address: 'Bragado 4688',
        residenceCountry: 'Argentina',
        bornCountry: 'Paraguay'
        //working: true,
        //companyName: 'Shimpumpam',
        //companyIndustry: 'Textil',
        //jobDescription: 'Socio'
      }  
  ];


  onUserSubmitted(ev: Student): void {
    //this.dataSource.push(ev); //no anda porque angular material necesita que se recree el array
    this.dataSource = [...this.dataSource,  {...ev, id: new Date().getTime()}];
  }
}
