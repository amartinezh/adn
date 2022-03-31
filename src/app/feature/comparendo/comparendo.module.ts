import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenteRoutingModule } from './comparendo-routing.module';
import { ComparendoListComponent } from './components/comparendo-list/comparendo-list.component';
import { ComparendoAddComponent } from './components/comparendo-add/comparendo-add.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComparendoService } from './shared/service/comparendo.service';

@NgModule({
  declarations: [
    ComparendoListComponent,
    ComparendoAddComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AgenteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ComparendoService
  ]
})
export class ComparendoModule { }
