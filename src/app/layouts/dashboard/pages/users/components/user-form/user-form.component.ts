import { Component , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup ; 
  
  // Roles de Usuario
  roles: string[] = ['ADMIN', 'USER'];


  constructor(private fb: FormBuilder) {    // el FormBuilder es un servicio que viene en Angular que se inyecta
    this.userForm = this.fb.group(
      {
        firstName: this.fb.control('', [Validators.required, Validators.minLength(2) ] ),
        lastName: this.fb.control('', [Validators.required, Validators.minLength(2) ] ),
        userName: this.fb.control('', [Validators.required ] ),
        email: this.fb.control('', [Validators.required, Validators.email ] ),
        password: this.fb.control('', [Validators.required ] ),
        role: this.fb.control('', [Validators.required ] )
      }); 
  }
  @Output() 
  userSubmitted = new EventEmitter();

  
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
        this.userSubmitted.emit(this.userForm.value);
        this.userForm.reset();        
    }
  }
  
}
