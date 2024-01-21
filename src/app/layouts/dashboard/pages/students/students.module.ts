import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';

import { MatTableModule } from '@angular/material/table';
import { StudentFormComponent } from './components/student-form/student-form.component'; 

import { MatFormFieldModule } from '@angular/material/form-field'; // input wrapper
import { MatInputModule } from '@angular/material/input'; // input
import {MatSelectModule} from '@angular/material/select'; // select
import {MatButtonModule} from '@angular/material/button'; // button
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsComponent
],
})
export class StudentsModule { }
