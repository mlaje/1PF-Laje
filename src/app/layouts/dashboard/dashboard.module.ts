import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 

import {MatCheckboxModule} from '@angular/material/checkbox'; 

import { StudentsModule } from './pages/students/students.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersModule } from './pages/users/users.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, 
    MatSidenavModule,
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule ,
    StudentsModule, 
    SharedModule,
    UsersModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
