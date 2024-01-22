import { Component , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  /**
   * FormGroups agrupar controles y crear objetos
   * FormControl definicion de un control para capturar el valor
   * FormArray que agrupan controles y crean array
   */
  userForm: FormGroup;  
 
  @Output() 
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {    // el FormBuilder es un servicio que viene en Angular que se inyecta
    this.userForm = this.fb.group(
      {
        firstName: this.fb.control('', [Validators.required, Validators.minLength(2) ] ),
        lastName: this.fb.control('', [Validators.required, Validators.minLength(2) ] ),
        dni: this.fb.control('', [Validators.required ] ),
        birthDate: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email ] ),
        phone: this.fb.control(''),
        gender: this.fb.control(''),
        address: this.fb.control('', [Validators.required, Validators.minLength(2) ] ),
        residenceCountry: this.fb.control(''),
        bornCountry: this.fb.control('')
      }); 
  }

  
  onSubmit(): void {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
        this.userSubmitted.emit(this.userForm.value);
        this.userForm.reset();        
    }
  }


}
