import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login';
import { AdminDashboardComponent } from './modules/dashboard/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
