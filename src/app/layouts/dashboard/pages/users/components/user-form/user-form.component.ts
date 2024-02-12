import { Component , EventEmitter, OnInit , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../../../core/services/users.service';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup ; 
  
  // Roles de Usuario
  //roles: string[] = ['ADMIN', 'USER'];
  roles: string[] = [];   // ahora se cargan del servicio (UsersService)

  constructor(private usersService: UsersService,
    private loadingService: LoadingService,
    private fb: FormBuilder) {    // el FormBuilder es un servicio que viene en Angular que se inyecta
    
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
  
  ngOnInit():void {
    this.getPageData();
  }
  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([                              // como sólo se levantan los roles, no tiene sentido el forkJoin por el momento
      this.usersService.getRoles()          // si se llegara a necesitar levantar otros datos del UsersService se levantan aquí
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
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
