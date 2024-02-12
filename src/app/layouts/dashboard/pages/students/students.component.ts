import { Component , EventEmitter, Output} from '@angular/core';
import { Student } from './models';
import { StudentsService } from '../../../../core/services/students.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  displayedColumns: string[] = ['id', 'fullName', 'dni', 'birthDate', 'edad', 'email', 'phone', 'gender', 'address', 
  'residenceCountry', 'bornCountry', 'works', 'companyIndustry', 'jobDescription', 'actions'];


  roles: string[] = [];
  dataSource: Student[] = [];
  
  constructor (private studentsService: StudentsService,
               private loadingService: LoadingService) {
  } 

  ngOnInit():void {
    this.getPageData();
  }
  

  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([
      this.studentsService.getStudents(),
    ]).subscribe({
      next: (value) => {
        this.dataSource = value[0];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onDeleteStudent(ev: Student): void {
    this.loadingService.setIsLoading(true);
    this.studentsService.deleteStudent(ev.id).subscribe({
      next: (students) => {
        this.dataSource = [...students];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  //onUserSubmitted(ev: User): void {
    //this.dataSource.push(ev); //no anda porque angular material necesita que se recree el array
    //this.dataSource = [...this.dataSource,  {...ev, id: new Date().getTime()}];
  //}

	onStudentSubmitted(ev: Student): void {
    
    this.loadingService.setIsLoading(true);
    this.studentsService
      .createStudent({...ev, id: new Date().getTime()})
      .subscribe({							
        next: (students) => {
          this.dataSource = [...students ]; 
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  @Output() 
  userSubmitted = new EventEmitter();

  onUserSubmitted(ev: Student): void {
    //this.dataSource.push(ev); //no anda porque angular material necesita que se recree el array
    this.dataSource = [...this.dataSource,  {...ev, id: new Date().getTime()}];
  }
}
