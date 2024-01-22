import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';

import { MatTableModule } from '@angular/material/table';
import { StudentFormComponent } from './components/student-form/student-form.component'; 

import { MatFormFieldModule } from '@angular/material/form-field'; // input wrapper
import { MatInputModule } from '@angular/material/input'; // input
import { MatSelectModule } from '@angular/material/select'; // select
import { MatButtonModule } from '@angular/material/button'; // button
import { MatCheckboxModule } from '@angular/material/checkbox'; // checkbox
import { ReactiveFormsModule } from '@angular/forms';  // formularios reactivos
import { SharedModule } from '../../../../shared/shared.module';

import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core'; 


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
    ReactiveFormsModule,
    SharedModule, 
    MatDatepickerModule,
    MatCheckboxModule
  ],
  exports: [
    StudentsComponent
  ],
})
export class StudentsModule { }
