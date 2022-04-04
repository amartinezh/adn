import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenteRoutingModule } from './agente-routing.module';
import { AgenteListComponent } from './components/agente-list/agente-list.component';
import { AgenteAddComponent } from './components/agente-add/agente-add.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgenteService } from './shared/service/agente.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AgenteListComponent,
    AgenteAddComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgenteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AgenteService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgenteModule { }
