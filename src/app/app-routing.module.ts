import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { CoursesComponent } from './layouts/dashboard/pages/courses/courses.component';
import { StudentsComponent } from './layouts/dashboard/pages/students/students.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { UserDetailComponent } from './layouts/dashboard/pages/users/pages/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',   
    component: DashboardComponent,
    children: [ 
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:idUser',
        component: UserDetailComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      { 
        path: '**',
        redirectTo: 'home'
      }
    ]
   
  },
  
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
 
  {
    path: '**',
    redirectTo: '/404',
  },
 
];

/*
const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () =>
      import('./layouts/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  // {
  //   path: 'auth/login',
  //   component: LoginComponent,
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
