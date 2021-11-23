import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SasComponent } from '../sas/sas.component';
import { AboutComponent } from '../about/about.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'login',     component: LoginComponent},
  { path: 'ocr',     component: SasComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];