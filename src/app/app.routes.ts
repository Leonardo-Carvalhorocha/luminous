import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ConsultaCnpjComponent } from './components/modules/ConsultaCnpj/ConsultaCnpj.component';
import { DashboardComponent } from './components/modules/dashboard/dashboard.component';
import { ClientesComponent } from './components/modules/clientes/clientes.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: 'full' },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard],
    children: [
    { path: 'consultaCnpj', component: ConsultaCnpjComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
    ],
  },
];
