import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasComponent } from './mapas/mapas.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MapasComponent
  ],
  exports: [
    MapasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
