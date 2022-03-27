import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenteRoutingModule } from './agente-routing.module';
import { AgenteListComponent } from './components/agente-list/agente-list.component';
import { AgenteAddComponent } from './components/agente-add/agente-add.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgenteListComponent,
    AgenteAddComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AgenteRoutingModule,
    ReactiveFormsModule
  ]
})
export class AgenteModule { }
