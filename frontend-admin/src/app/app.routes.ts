import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { AdminDashboardComponent } from './modules/dashboard/admin-dashboard/admin-dashboard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout';
import { ManageSkillsComponent } from './modules/dashboard/manage-skills/manage-skills';
import { ManageProjectsComponent } from './modules/dashboard/manage-projects/manage-projects';
import { SystemLogsComponent } from './modules/dashboard/system-logs/system-logs';


export const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'skills', component: ManageSkillsComponent },
      { path: 'projects', component: ManageProjectsComponent },
      { path: 'logs', component: SystemLogsComponent }
    ]
  },

  { path: '', redirectTo: 'admin/login', pathMatch: 'full' }
];
