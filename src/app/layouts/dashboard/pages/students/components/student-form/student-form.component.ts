import { Component , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  userForm: FormGroup; 
 
  @Output() 
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group(
      {
        firstName: this.fb.control(''),
        lastName: this.fb.control(''),
        dni: this.fb.control(''),
        birthDate: this.fb.control(''),
        email: this.fb.control(''),
        gender: this.fb.control(''),
        address: this.fb.control(''),
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
