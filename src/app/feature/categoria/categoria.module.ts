import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from './components/categoria-add/categoria-add.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaAddComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
