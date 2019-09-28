import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarIncidenciaPage } from './agregar-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarIncidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarIncidenciaPage]
})
export class AgregarIncidenciaPageModule {}
