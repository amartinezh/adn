import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './components/categoria-add/categoria-add.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from './shared/service/categoria.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaAddComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriaService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriaModule { }
