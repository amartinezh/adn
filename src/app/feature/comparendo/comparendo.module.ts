import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenteRoutingModule } from './comparendo-routing.module';
import { ComparendoListComponent } from './components/comparendo-list/comparendo-list.component';
import { ComparendoAddComponent } from './components/comparendo-add/comparendo-add.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComparendoService } from './shared/service/comparendo.service';
import { PosiblesInfractorService } from './shared/service/posibles_infractores.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ComparendoListComponent,
    ComparendoAddComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgenteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ComparendoService,
    PosiblesInfractorService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComparendoModule { }
