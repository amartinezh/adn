import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from '@categoria/components/categoria-list/categoria-list.component';
import { CategoriaAddComponent } from '@categoria/components/categoria-add/categoria-add.component';
import { LayoutComponent } from '@categoria/components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: CategoriaListComponent
      },
      {
        path: 'add', component: CategoriaAddComponent
      },
      {
        path: 'edit/:id', component: CategoriaAddComponent
      },
      {
        path: 'del', component: CategoriaListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
