import { Component , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  courseForm: FormGroup;

  // categoria del curso
  categorias: string[] = ['Inglés', 'Inteligencia Artificial', 'Herramientas Digitales',
                        'Negocios', 'Habilidades blandas', 'Diseño UX/UI',
                        'Marketing', 'Programación y Desarrollo', 'Producto', 'Data']; 
  
  // carreta de la institución
  carreras: string[] = ['Ninguna', 'Diseño UX/UI', 'Marketing', 'Programación y Desarrollo', 'Producto', 'Data']; 

  // nivel de dificultad
  niveles: string[] = ['Principiante', 'Intermedio', 'Avanzado', 'Experto']; 

  // dedicación que demanda
  dedicaciones: string[] = ['Baja', 'Moderada', 'Alta']; 

  @Output() 
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {    // el FormBuilder es un servicio que viene en Angular que se inyecta
    this.courseForm = this.fb.group(
      {
        nombre: this.fb.control('', [Validators.required, Validators.minLength(2) ] ),
        carrera: this.fb.control('', [Validators.required] ),
        categoria: this.fb.control('', [Validators.required ] ),
        nivel: this.fb.control('', [Validators.required]),
        dedicacion: this.fb.control('', [Validators.required] ),
        precioDeLista: this.fb.control(''),
        descuento: this.fb.control(''),
        precioFinal: this.fb.control('', [Validators.required ] ),
        detalles: this.fb.control(''),
        rangoDeFechas: this.fb.control('', [Validators.required ]),
        dias: this.fb.control('', [Validators.required ]),
        horario: this.fb.control('', [Validators.required ]),
        profesor: this.fb.control('', [Validators.required ])    
      }); 
  }

  
  onSubmit(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
        this.userSubmitted.emit(this.courseForm.value);
        this.courseForm.reset();        
    }
  }

}
