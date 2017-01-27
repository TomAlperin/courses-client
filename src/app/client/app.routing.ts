import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const appRoutes: Routes = [
  {
    path: 'login',
    component: ProfileComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
