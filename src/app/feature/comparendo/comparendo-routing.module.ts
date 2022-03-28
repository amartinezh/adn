import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparendoListComponent } from './components/comparendo-list/comparendo-list.component';
import { ComparendoAddComponent } from './components/comparendo-add/comparendo-add.component';
import { LayoutComponent } from '@categoria/components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: ComparendoListComponent
      },
      {
        path: 'add', component: ComparendoAddComponent
      },
      {
        path: 'edit/:id', component: ComparendoAddComponent
      },
      {
        path: 'del', component: ComparendoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenteRoutingModule { }
