import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { Contactenos } from './pages/contactenos/contactenos';

export const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: Principal },
  { path: 'contactenos', component: Contactenos },
  { path: '**', redirectTo: 'principal' }
];
