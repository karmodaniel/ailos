import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Ailo | Admissão cooperado',
    path: '',
    loadChildren: () => import('./pages/admission-cooperative/admission-cooperative.module').then(m => m.AdmissionCooperativeModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
