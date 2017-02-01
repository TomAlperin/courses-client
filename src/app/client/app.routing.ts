import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { LoginComponent }         from './components/login/login.component';
import { HomeComponent }          from './components/home/home.component';
import { ProfileComponent }       from './components/profile/profile.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';

// user components
import { UsersComponent }         from './components/users/users.component';
import { UserComponent }          from './components/users/user/user.component';

// courses components
import { CoursesComponent }       from './components/courses/courses.component';
import { CourseEditComponent }    from './components/courses/course-edit/course-edit.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'academy',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: UserComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'course-edit/:id',
        component: CourseEditComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
