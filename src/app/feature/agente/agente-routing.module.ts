import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenteListComponent } from './components/agente-list/agente-list.component';
import { AgenteAddComponent } from './components/agente-add/agente-add.component';
import { LayoutComponent } from '@categoria/components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: AgenteListComponent
      },
      {
        path: 'add', component: AgenteAddComponent
      },
      {
        path: 'edit/:id', component: AgenteAddComponent
      },
      {
        path: 'del', component: AgenteListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenteRoutingModule { }
